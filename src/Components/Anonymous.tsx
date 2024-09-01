import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
//import { useState } from "react";
import { isExpired } from "react-jwt"


interface userProps {
    contact: string,
    exp: number,
    id:number,
    lieuLivraison: string,
    montantCompte: string,
    pseudo:string,
    role: {
        id:number,
        nomRole:string
    }[],
    statut: boolean
}

export const Anonymous = () => {
    const sessionStorageValue = String(sessionStorage.getItem('site'))

    const {token, user} = useAuth()
    const USER : userProps = user as userProps


    if (token) {

        if(USER.role[0].nomRole == "Client" || USER.role[0].nomRole == "Administrateur"){
            if( ( (!(isExpired(sessionStorageValue)) && USER.role[0].nomRole == "Client")  || (!(isExpired( sessionStorageValue )) && String(USER.role[0].nomRole) == "Administrateur") ) == true){
                //console.log('Home')
                return  ( <Navigate to={'/'} /> )
            } 
        
            if( ( (!(isExpired( sessionStorageValue )) && USER.role[0].nomRole == "Client")  && (!(isExpired( sessionStorageValue )) && String(USER.role[0].nomRole) == "Administrateur") ) == false){
                //console.log('LOGClient')
                return  ( <Outlet />  )
            }
        }
        
        if(USER.role[0].nomRole == "Livreur" || USER.role[0].nomRole == "Administrateur"){
            if( ( (!(isExpired( sessionStorageValue )) && USER.role[0].nomRole == "Livreur")  || (!(isExpired( sessionStorageValue )) && String(USER.role[0].nomRole) == "Administrateur") ) == true){
                //console.log('Commande')
                return  ( <Navigate to={'/command-list'} /> )
            } 
        
            if( ( (!(isExpired( sessionStorageValue )) && USER.role[0].nomRole == "Livreur")  && (!(isExpired( sessionStorageValue )) && String(USER.role[0].nomRole) == "Administrateur") ) == false){
                //console.log('LOGLivreur')
                return  ( <Outlet />  )
            }
        } 
    }
    else{
        //console.log('LOG2')
        return  ( < Outlet/> )
    }
}


export default Anonymous