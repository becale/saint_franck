
import { Footer } from "../Footer";
import { Main } from "../Main";
import {Header} from "../Header";
import {useAuth, AuthProvider} from '../AuthProvider'
import { Navigate, useNavigate } from "react-router-dom";
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import MyCommandList from "./CommandPdf";
import { useEffect } from "react";

export default function Home() {
    const {myTokenInfo} = useAuth()
    const navigate = useNavigate()

   // useEffect(()=>{},[myTokenInfo.isMyTokenExpired])
    
    return(
        
        <>  
            {/*{ 
            myTokenInfo.myDecodeToken ? navigate('/')
            : 
            <>*/}
                <Header></Header>
                <Main></Main>
                {/*<PDFDownloadLink document={<MyCommandList />} fileName="Commande.pdf">
                    {({  url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download now!'
                    }
                </PDFDownloadLink>*/}
                <Footer></Footer>
            {/*</>
            }*/}
        </>
    )
}


