//import { useState } from "react";
import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./AuthProvider";
//import { isExpired } from "react-jwt"


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


export const ProtectedRouteClient = () => {

    //const sessionStorageValue = String(sessionStorage.getItem('site'))
    //const [isExp, setisExpired] = useState( isExpired( sessionStorageValue ) )

    const { user, token, isExp} = useAuth() //, setisExpired
    const USER : userProps = user as userProps

    if(token){
        //setisExpired(isExpired(sessionStorageValue))

        if( ((!isExp && USER.role[0].nomRole == "Client")  || (!isExp && USER.role[0].nomRole == "Administrateur" ) ) == true){
            return  ( <Outlet />  )
        }else{
            return  ( <Navigate to={'/login'} /> )
        }
    }else{
        return  ( <Navigate to={'/login'} /> )
    }
}



export const ProtectedRouteLivreur = () => {

    //const sessionStorageValue = String(sessionStorage.getItem('site'))
    //const [isExp, setisExpired] = useState( isExpired( sessionStorageValue ) )

    const { user, token, isExp} = useAuth() //, setisExpired
    const USER : userProps = user as userProps

    if(token){
        //setisExpired(isExpired(sessionStorageValue))

        if( ((!isExp && USER.role[0].nomRole == "Livreur")  || (!isExp && USER.role[0].nomRole == "Administrateur" ) ) == true){
            return  ( <Outlet />  )
        }else{
            return  ( <Navigate to={'/login'} /> )
        }
    }
    else{
        return  ( <Navigate to={'/login'} /> )
    }
    
}