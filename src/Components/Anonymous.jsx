import React from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { isExpired, decodeToken } from "react-jwt"


export const Anonymous = ({Children , ...rest}) => {
    const navigate = useNavigate()
    const {isAuthenticated, token, user} = useAuth()

    if (token) {
        if(user.role[0].nomRole == "Client"){
            if( ( (!user.isExpired && user.role[0].nomRole == "Client")  || (!user.isExpired && user.role[0].nomRole == "Administrateur") ) == true){
                console.log('Home')
                return  ( <Navigate to={'/'} /> )
            } 
        
            if( ( (!user.isExpired && user.role[0].nomRole == "Client")  && (!user.isExpired && user.role[0].nomRole == "Administrateur") ) == false){
                console.log('LOGClient')
                return  ( <Outlet />  )
            }
        }
        
        if(user.role[0].nomRole == "Livreur"){
            if( ( (!user.isExpired && user.role[0].nomRole == "Livreur")  || (!user.isExpired && user.role[0].nomRole == "Administrateur") ) == true){
                console.log('Commande')
                return  ( <Navigate to={'/command-list'} /> )
            } 
        
            if( ( (!user.isExpired && user.role[0].nomRole == "Livreur")  && (!user.isExpired && user.role[0].nomRole == "Administrateur") ) == false){
                console.log('LOGLivreur')
                return  ( <Outlet />  )
            }
        } 
    }
    else{
        console.log('LOG2')
        return  ( < Outlet/> )
    }
}


export const AnonymousLivreur = ({Children , ...rest}) => {

    const {isAuthenticated, myTokenInfo, user} = useAuth()

    return ( (!!isAuthenticated /*myTokenInfo.isMyTokenExpired*/) ? <Navigate to="/" /> : <Outlet /> )
}


export default Anonymous