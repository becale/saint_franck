
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

import toast, { Toaster } from 'react-hot-toast';

function App() {

  /*const {isAuthenticated} = useAuth()
  console.log(isAuthenticated)*/

  return (
    <>
        <Box className='App' 
            height={'932px'}   
            bgImage={["url('src/assets/backimg.png')", "url('src/assets/backimgmd.png')", "url('src/assets/backimglg.png')" ]} 
            backgroundRepeat={['no-repeat', 'no-repeat', 'no-repeat']} 
            backgroundPosition={['center', 'center', 'center' ]}
          >
            
            <Routes>
              
              <Route path="/command-list/pdf" element={<MyCommandList/>} />

              <Route element={ <Anonymous /> }>
                <Route path='/login' element={<Login/> }/>
              </Route>

              
              <Route element={ <ProtectedRoute/> } >
                <Route  path='/' element={<Home />} />
              </Route>

              <Route element={ <ProtectedRoute/> }>
                
              </Route>

              <Route path='/command-list' element={<Command />} />
              
            </Routes>

            <Toaster />
        </Box>
    </>
  )
}

export default App
