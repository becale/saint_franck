
import { Footer } from "../Footer";
import { Main } from "../Main";
import {Header} from "../Header";

import { Suspense, useEffect } from "react";

import { useAuth } from "../AuthProvider";


const  Home  = ( ) => {

const user = useAuth()

console.log(user)

useEffect((()=>{
    
}), [])

    return(
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}


export default Home