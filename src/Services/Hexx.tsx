import { useContext } from "react";
import { AuthContext } from "./AuthContext";


export default function Hexx({children}){

    const level = useContext(AuthContext)

    return(
        <>
        </>
    )
}