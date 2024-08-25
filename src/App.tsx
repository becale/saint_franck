
import { Box,  } from '@chakra-ui/react'
import { Suspense } from 'react'

import './App.css'
import  Home  from './Components/Page/Home' 
import Login from './Components/Page/Login'
import { Routes, Route, Link } from 'react-router-dom'

import ProtectedRoute from './Components/ProtectedRoute'
import Anonymous from './Components/Anonymous'

import { Command } from './Components/Page/Command'
import { useEffect } from 'react'

import MyCommandList from './Components/Page/CommandPdf'
import { PDFViewer, usePDF  } from '@react-pdf/renderer'

import { BrowserRouter } from 'react-router-dom'
import  {AuthProvider, useAuth} from "./Components/AuthProvider"
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const listeCommande = [
    {
      commandeId: 15,
      dateCommande: "2024-08-24T10:11:33",
      dateLivraison: "2024-08-26T00:00:00",
    },
  ]

  return (
    <>
        <Box className='App' 
            height={'95vh'}   //932px
            minHeight={'932px'}
            bgImage={["url('src/assets/backimg.png')", "url('src/assets/backimgmd.png')", "url('src/assets/backimglg.png')" ]} 
            backgroundRepeat={['no-repeat', 'no-repeat', 'no-repeat']} 
            backgroundPosition={['center', 'center', 'center' ]}
          >
            
            <Routes>
              
              <Route path="/command-list/pdf" element={
                  <PDFViewer style={{ width: "100%", height: "800px" }}>
                    <MyCommandList  listeCommande={listeCommande}/>
                  </PDFViewer>
                } 
              />

              <Route element={ <Anonymous /> }>
                <Route path='/login' element={<Login/> }/>
              </Route>

              
              <Route element={ <ProtectedRoute/> } >
                <Route  path='/' element={<Home />} />
              </Route>

              <Route element={ <ProtectedRoute/> }>
                <Route path='/command-list' element={<Command />} />
              </Route>

            </Routes>

            <Toaster />
        </Box>
    </>
  )
}

export default App
