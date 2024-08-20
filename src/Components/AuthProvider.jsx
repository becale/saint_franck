import { createContext, Suspense, useContext, useEffect, useMemo, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt"
import isNetworkError from "is-network-error";


const AuthContext = createContext();

export const  AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(sessionStorage.getItem('site') || "");
    const [requestStatus, setRequestatus] = useState()
    const [loginState, setLoginState] = useState(false) 
    const [statutRequette, setStatutRequette] = useState('')
    const [isnetworkError, setNetworkError] = useState('')

    const isAuthenticated = !!token

    const myDecodeToken = decodeToken(token || null)
    const isMyTokenExpired = isExpired(token || null) 

    const myTokenInfo = {
        'myDecodeToken' : myDecodeToken,
        'isMyTokenExpired': isMyTokenExpired
    }

    //console.log(myDecodeToken.role[0].nomRole)

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
                setToken(res.access_token)
                sessionStorage.setItem("site", res.access_token);

                if ( myTokenInfo.myDecodeToken.role[0].nomRole == "Administrateur" || myTokenInfo.myDecodeToken.role[0].nomRole == "Client" ){
                    navigate('/')
                }
                if ( myTokenInfo.myDecodeToken.role[0].nomRole == "Administrateur" || myTokenInfo.myDecodeToken.role[0].nomRole == "Livreur" ){
                    navigate('/command-list')
                }
                

            } else {
                //navigate('/')
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
        /*setUser(null);
        setToken("");
        sessionStorage.removeItem("site");
        navigate("/login");*/
      };

    return <AuthContext.Provider value={{myTokenInfo, isAuthenticated,loginState, user, requestStatus,isnetworkError, token, loginAction, logOut}}>{children}</AuthContext.Provider>
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
    return context
}
