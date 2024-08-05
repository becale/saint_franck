import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";


export const Anonymous = ({Children , ...rest}) => {

    const {isAuthenticated} = useAuth()

    return !!isAuthenticated ? <Navigate to="/" /> : <Outlet /> 
}

export default Anonymous