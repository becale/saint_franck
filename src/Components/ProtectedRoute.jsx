import React, { Children, useEffect } from "react";
import {Navigate, Outlet, useNavigate, Route} from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Home from "./Page/Home";
import Login from "./Page/Login"




export const ProtectedRouteClient = ({Children}) => {
    
    const {isAuthenticated, user, token} = useAuth()
    const navigate = useNavigate()

    //console.log('USEROOO', isExpired, user.role[0].nomRole )

    if(token){
        if( ((!user.isExpired && user.role[0].nomRole == "Client")  || (!user.isExpired && user.role[0].nomRole == "Administrateur" ) ) == true){
            return  ( <Outlet />  )
        }else{
            return  ( <Navigate to={'/login'} /> )
        }
    }else{
        return  ( <Navigate to={'/login'} /> )
    }
    
    //return ( ( /*!!isAuthenticated*/ (user.isExpired )  ) ?   (<Navigate to='/login' />): <Outlet />  )  //&& !!user.isExpired

    //return ( ( !!isAuthenticated /*(user.isExpired )*/  ) ?   (<Outlet /> ): <Navigate to='/login' /> )  //&& !!user.isExpired

}


export const ProtectedRouteLivreur = ({Children}) => {
    
    const {isAuthenticated, user, token} = useAuth()

    console.log('USEROOO', user)

    if(token){
        if( ((!user.isExpired && user.role[0].nomRole == "Livreur")  || (!user.isExpired && user.role[0].nomRole == "Administrateur" ) ) == true){
            return  ( <Outlet />  )
        }else{
            return  ( <Navigate to={'/login'} /> )
        }
    }
    else{
        return  ( <Navigate to={'/login'} /> )
    }
    
    //return ( ( /*!!isAuthenticated*/ (user.isExpired )  ) ?   (<Navigate to='/login' />): <Outlet />  )  //&& !!user.isExpired

    //return ( ( !!isAuthenticated /*(user.isExpired )*/  ) ?   (<Outlet /> ): <Navigate to='/login' /> )  //&& !!user.isExpired
}