
import { Box,  } from '@chakra-ui/react'
import { Suspense } from 'react'

import './App.css'
import  Home  from './Components/Page/Home' 
import Login from './Components/Page/Login'
import { Routes, Route } from 'react-router-dom'

import ProtectedRoute from './Components/ProtectedRoute'
import Anonymous from './Components/Anonymous'

import { Command } from './Components/Page/Command'
import { useEffect } from 'react'


function App() {

  {/*useEffect((()=>{
    const token = localStorage.getItem('site')
    
    setTimeout(()=>{
      if (token) {localStorage.removeItem('site')}
    }, 500)
  }), [])*/}

  return (
    <Box className='App' 
        height={'932px'}   
        bgImage={["url('src/assets/backimg.png')", "url('src/assets/backimgmd.png')", "url('src/assets/backimglg.png')" ]} 
        backgroundRepeat={['no-repeat', 'no-repeat', 'no-repeat']} 
        backgroundPosition={['center', 'center', 'center' ]}
      >
        <Routes>

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
    </Box>
  )
}

export default App
