
import { Box,  } from '@chakra-ui/react'
import './App.css'
import  Home  from './Components/Page/Home' 
import Login from './Components/Page/Login'
import { Routes, Route} from 'react-router-dom'

import {ProtectedRouteClient , ProtectedRouteLivreur} from './Components/ProtectedRoute'
import Anonymous from './Components/Anonymous'
import { Command } from './Components/Page/Command'
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react'
import {useAuth} from './Components/AuthProvider'

function App() {
  

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
              
              {/*<Route path="/command-list/pdf" element={
                    <MyCommandList />
                } 
              />*/}

              <Route element={ <Anonymous /> }>
                <Route path='/login' element={<Login/> }/>
              </Route>
              
              
              <Route element={ <ProtectedRouteClient/> } >
                <Route  path='/' element={<Home />} />
              </Route>

              <Route element={ <ProtectedRouteLivreur/> }>
                <Route path='/command-list' element={<Command />} />
              </Route>

            </Routes>

            <Toaster />
        </Box>
    </>
  )
}

export default App
