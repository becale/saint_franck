
import { Footer } from "../Footer";
import { Main } from "../Main";
import {Header} from "../Header";
import {useAuth, AuthProvider} from '../AuthProvider'
import { Navigate, useNavigate } from "react-router-dom";
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import MyCommandList from "./CommandPdf";
import { useEffect } from "react";

export default function Home() {

    const {logOut} = useAuth()
    /*useEffect(()=>{
    const idSetTimeout = setTimeout(()=>{
        logOut();
        window.location.reload()
    }, 60000)

    return  ()=>{
        clearTimeout(idSetTimeout)
    }
  })*/

    
    return(
        
        <>  
            <Header></Header>
            <Main></Main>
            <Footer></Footer>         
        </>
    )
}


