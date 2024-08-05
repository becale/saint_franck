import { createContext, Suspense, useContext, useEffect, useMemo, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Home from './Page/Home'
import { isExpired, decodeToken } from "react-jwt"


const AuthContext = createContext();

export const  AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('site') || "");
    const [requestStatus, setRequestatus] = useState()
    const [loginState, setLoginState] = useState(false) 
    const [statutRequette, setStatutRequette] = useState('')

    const myDecodeToken = decodeToken(token || null)
    const isMyTokenExpired = isExpired(token || null) 
    const myTokenInfo = {
        'myDecodeToken' : myDecodeToken,
        'isMyTokenExpired': isMyTokenExpired
    }


    const navigate = useNavigate()
    const  loginAction =  async (data) => {

        setLoginState(true)
        setRequestatus()

        try {
            const response = await fetch('https://ventejus.newvision.cm/login',{
                method: 'POST',
                body: data,
            })

            const res = await response.json()

            if (response.ok){

                setToken(res.access_token)
                localStorage.setItem("site", res.access_token);
                navigate('/')

            } else {

                navigate('/login')

                if(response.status === '422') { throw new Error('Erreur 422') }
                if(response.status === '400') { throw new Error('Erreur 400') }
                if(response.status === '403') { throw new Error('Erreur 403') }

                throw new Error(response.status)
            }  
        }
        catch(error){
            setLoginState(false)
            console.log('Fetch', error)
            setRequestatus(error.message)
        }
    }

    const logOut = () => {
        /*setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");*/
      };

    const isAuthenticated = !!token
    
    return <AuthContext.Provider value={{myTokenInfo, isAuthenticated,loginState, user, requestStatus, token, loginAction, logOut}}>{children}</AuthContext.Provider>
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
    return context
}
