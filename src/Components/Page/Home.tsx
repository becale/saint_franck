
import { Footer } from "../Footer";
import { Main } from "../Main";
import {Header} from "../Header";
import {useAuth} from '../AuthProvider'
import { useEffect } from "react";

export default function Home() {

    const {logOut} = useAuth()
    useEffect(()=>{
    const idSetTimeout = setTimeout(()=>{
        logOut();
        window.location.reload()
    }, 7*60*1000)

    return  ()=>{
        clearTimeout(idSetTimeout)
    }
  })

    
    return(
        
        <>  
            <Header></Header>
            <Main></Main>
            <Footer></Footer>         
        </>
    )
}


