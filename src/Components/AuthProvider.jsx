import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Home from './Page/Home'
//import  useLo

const AuthContext = createContext();

export const  AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('site') || "");

    const navigate = useNavigate()
    
    /*const fetchData =  fetch('')
    useEffect(
        
    )*/
    const goodUser = {
        pseudo: 'admin123',
        password: 'admin123',
        role: ""
    }

    

    const  loginAction =  async (data) => {

        if (data.pseudo === "admin123" && data.password ==="admin123"){

            setUser(data)
            
            navigate('/')

            return

        }else{
            navigate('/login')
        }
        
    }

    /*const loginAction = async (data) => {
        try{
            const response = await fetch('', {
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body: data
            });
            const res = await response.json();
            if (res.data){
                setUser(res.data.user);
                setToken(res.token);
                localStorage.setItem("site", res.token);
                navigate('/home')
                return;
            }
            throw new Error(res.message);
        } catch(err) {
            console.error(err);
        }
    }*/
    const logOut = () => {
        /*setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");*/
      };

    const AuthenticateAtcion = async (data) => {

    }

    return <AuthContext.Provider value={{user, token, loginAction, logOut}}>{children}</AuthContext.Provider>
};



export const useAuth = () => {
    return useContext(AuthContext)
}
