import { createContext, useContext, useState } from "react";
import {  useNavigate } from "react-router-dom"; //Navigate,
import isNetworkError from "is-network-error";
import { isExpired, decodeToken } from "react-jwt"


interface userProps {
    contact: string,
    exp: number,
    id:number,
    lieuLivraison: string,
    montantCompte: string,
    pseudo:string,
    role: {
        id:number,
        nomRole:string
    }[],
    statut: boolean
}

interface AuthContextProps {
    myTokenInfo : {} | null, 
    isAuthenticated: boolean,
    loginState: boolean, 
    user: userProps | null | {} , 
    requestStatus: string , 
    isnetworkError: boolean, 
    token: string,
    setUser: React.Dispatch<React.SetStateAction<userProps>>, 
    loginAction: (data:any)=>Promise<any>, 
    logOut: ()=>void
}


const AuthContext = createContext<AuthContextProps | null>(null);

const montantCompte = {
    montantCompte:  String(sessionStorage.getItem('montant'))
}
const sessionStorageValue :string = String(sessionStorage.getItem('site'))

export const  AuthProvider = ({children}:any) => {
    const navigate = useNavigate()

    const [user, setUser] = useState< userProps >( {...decodeToken(sessionStorageValue) , ...montantCompte} as userProps ); //
    const [token, setToken] = useState(sessionStorage.getItem('site') || "");
    const [requestStatus, setRequestatus] = useState("")
    const [loginState, setLoginState] = useState(false) 

    const [isnetworkError, setNetworkError] = useState(false)
    const [myTokenInfo, setMyTokenInfo] = useState({} || null)
    const isAuthenticated = !!token

    const  loginAction =  async (data:FormData) : Promise<any> => {
        setLoginState(true)
        //setRequestatus()
        setNetworkError(false)
        try {
            const response = await fetch('https://ventejus.newvision.cm/login',{
                method: 'POST',
                body: data,
            })

            const res:{access_token:string} = await response.json()

            if (response.ok){
                sessionStorage.setItem("site", res.access_token);
                setToken(res.access_token)

                const myDecodeToken = { ...decodeToken(res.access_token) as userProps }
                const isMyTokenExpired:boolean|null = isExpired(res.access_token)

                setMyTokenInfo({...myTokenInfo,myDecodeToken,isMyTokenExpired} ) 
                setUser({...decodeToken(res.access_token)} as userProps)
                
                if( myDecodeToken.role[0].nomRole == "Administrateur" || myDecodeToken.role[0].nomRole == "Client" ){
                    return navigate('/') 
                }
                if ( myDecodeToken.role[0].nomRole == "Administrateur" || myDecodeToken.role[0].nomRole == "Livreur" ){
                    return navigate('/command-list')
                }
                

            } else {
                if(response.status === 422) { throw new Error('Erreur 422') }
                if(response.status === 400) { throw new Error('Erreur 400') }
                if(response.status === 403) { throw new Error('Erreur 403') }

                throw new Error(String(response.status))
            }  
        }
        catch(error:any){
            if(isNetworkError(error)){setNetworkError(true)}
            setLoginState(false)
            
            console.log('Fetch', error)
            setRequestatus(error.message)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('site')
        sessionStorage.removeItem('montant')
        setMyTokenInfo({})
        return navigate('/login')//<Navigate to={'/login'}/>
      };

    return <AuthContext.Provider value={{ myTokenInfo, isAuthenticated,loginState, user, requestStatus , isnetworkError, token, setUser, loginAction, logOut }}>{children}</AuthContext.Provider>
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
    return context
}

export default useAuth
