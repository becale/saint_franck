import React, { Children, useEffect } from "react";
import {Navigate, Outlet, useNavigate, Route} from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Home from "./Page/Home";
import Login from "./Page/Login"




export const ProtectedRoute = ({Children}) => {
    
    const {isAuthenticated, myTokenInfo} = useAuth()

    //|| (myTokenInfo.isMyTokenExpired && myTokenInfo.myDecodeToken.role[0].nomRole == "Client")

    return ( ( /*!!isAuthenticated*/ (myTokenInfo.isMyTokenExpired )  ) ?   <Navigate to='/login' />: <Outlet />  )  //&& !!myTokenInfo.isMyTokenExpired
}

export default ProtectedRoute