import React, { Children, useEffect } from "react";
import {Navigate, Outlet, useNavigate, Route} from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Home from "./Page/Home";
import Login from "./Page/Login"


export const ProtectedRoute = ({Children , ...rest}) => {

    const {isAuthenticated} = useAuth()

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute