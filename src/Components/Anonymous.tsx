import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useState } from "react";
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
    const [isExp, setisExpired] = useState( isExpired( sessionStorageValue ) )

    const {token, user} = useAuth()
    const USER : userProps = user as userProps


    if (token) {
        //setisExpired(isExpired( sessionStorageValue ))

        if(USER.role[0].nomRole == "Client"){
            if( ( (!isExp && USER.role[0].nomRole == "Client")  || (!isExp && String(USER.role[0].nomRole) == "Administrateur") ) == true){
                //console.log('Home')
                return  ( <Navigate to={'/'} /> )
            } 
        
            if( ( (!isExp && USER.role[0].nomRole == "Client")  && (!isExp && String(USER.role[0].nomRole) == "Administrateur") ) == false){
                //console.log('LOGClient')
                return  ( <Outlet />  )
            }
        }
        
        if(USER.role[0].nomRole == "Livreur"){
            if( ( (!isExp && USER.role[0].nomRole == "Livreur")  || (!isExp && String(USER.role[0].nomRole) == "Administrateur") ) == true){
                //console.log('Commande')
                return  ( <Navigate to={'/command-list'} /> )
            } 
        
            if( ( (!isExp && USER.role[0].nomRole == "Livreur")  && (!isExp && String(USER.role[0].nomRole) == "Administrateur") ) == false){
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