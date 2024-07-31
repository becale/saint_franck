
import { Box,  } from '@chakra-ui/react'

import './App.css'
import  Home  from './Components/Page/Home' 
import Login from './Components/Page/Login'
import { Routes, Route } from 'react-router-dom'

import ProtectedRoute from "./Components/ProtectedRoute"

import { Command } from './Components/Page/Command'

import Com from './src/Services/Com'


function App() {

  return (
    <Box className='App' 
        height={'932px'}   
        bgImage={["url('src/assets/backimg.png')", "url('src/assets/backimgmd.png')", "url('src/assets/backimglg.png')" ]} 
        backgroundRepeat={['no-repeat', 'no-repeat', 'no-repeat']} 
        backgroundPosition={['center', 'center', 'center' ]}
      >
        <Routes>

          <Route element={ <ProtectedRoute/> } >
            <Route  path='/' element={<Home />} />
          </Route>

          <Route path='/login' element={<Login/>}/>
          <Route path='/command-list' element={<Command />} />

          <Route path='/hom' element={}/>
          
        </Routes>
    </Box>
  )
}

export default App
