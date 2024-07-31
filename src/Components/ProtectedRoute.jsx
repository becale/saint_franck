import React, { useEffect } from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Home from "./Page/Home";
import Login from "./Page/Login"


export const ProtectedRoute = () => {
    {/*const user = useAuth();
    if(!user.token) return <Navigate to="/login" />;
    return <Outlet />*/}

    const user = useAuth()
    const navigate = useNavigate()

    /*useEffect( ( ()=>{
        console.log(user)

        if(user==null) {

            navigate('/login', {replace:true} )
        }
    }), [user, navigate])*/

    if (user !== null) navigate('/login', {relative: true})

    return <Outlet /> //(user === null) ? <Navigate to ="/login" replace="true" /> : <Outlet/> 

}

export default ProtectedRoute