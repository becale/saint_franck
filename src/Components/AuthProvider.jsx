import { createContext, Suspense, useContext, useEffect, useMemo, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import isNetworkError from "is-network-error";
import { isExpired, decodeToken } from "react-jwt"


const AuthContext = createContext();

export const  AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState( 
        null  || { ...decodeToken(sessionStorage.getItem('site')) , ...{isExpired : isExpired(sessionStorage.getItem('site')) } } 
    );
    const [token, setToken] = useState(sessionStorage.getItem('site') || "");
    const [requestStatus, setRequestatus] = useState()
    const [loginState, setLoginState] = useState(false) 
    const [statutRequette, setStatutRequette] = useState('')
    const [isnetworkError, setNetworkError] = useState('')
    const [myTokenInfo, setMyTokenInfo] = useState({} || null)
    const isAuthenticated = !!token



    const  loginAction =  async (data) => {
        setLoginState(true)
        setRequestatus()
        setNetworkError(false)
        try {
            const response = await fetch('https://ventejus.newvision.cm/login',{
                method: 'POST',
                body: data,
            })

            const res = await response.json()

            if (response.ok){
                sessionStorage.setItem("site", res.access_token);
                setToken(res.access_token)
                

                const myDecodeToken = decodeToken(res.access_token || null)
                const isMyTokenExpired = isExpired(res.access_token || null)
                setMyTokenInfo({...myTokenInfo,myDecodeToken,isMyTokenExpired} ) 
                setUser({...myDecodeToken})
                
                console.log(user)

                if( myDecodeToken.role[0].nomRole == "Administrateur" || myDecodeToken.role[0].nomRole == "Client" ){
                    return navigate('/') //navigate('/')
                }
                if ( myDecodeToken.role[0].nomRole == "Administrateur" || myDecodeToken.role[0].nomRole == "Livreur" ){
                    return navigate('/command-list') //<Navigate to={'/command-list'} /> //
                }
                

            } else {
                if(response.status === '422') { throw new Error('Erreur 422') }
                if(response.status === '400') { throw new Error('Erreur 400') }
                if(response.status === '403') { throw new Error('Erreur 403') }

                throw new Error(response.status)
            }  
        }
        catch(error){
            if(isNetworkError(error)){setNetworkError(true)}
            setLoginState(false)
            
            console.log('Fetch', error)
            setRequestatus(error.message)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('site')
        setMyTokenInfo({})
        return <Navigate to={'/login'}/>
      };

    return <AuthContext.Provider value={{myTokenInfo, isAuthenticated,loginState, user, requestStatus,isnetworkError, token,setUser, loginAction, logOut}}>{children}</AuthContext.Provider>
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
    return context
}

export default useAuth
