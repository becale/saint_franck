import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";


export const Anonymous = ({Children , ...rest}) => {

    const {isAuthenticated, myTokenInfo} = useAuth()

    return ( (/*!!isAuthenticated*/ myTokenInfo.isMyTokenExpired) ? <Outlet /> : <Navigate to="/" /> )
}

export default Anonymous