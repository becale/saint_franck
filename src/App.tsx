import * as React from 'react'

import { Box, ChakraProvider, VStack } from '@chakra-ui/react'

import './App.css'
import { Home } from './Components/Page/Home'
import { Command } from './Components/Page/Command'

function App() {
  

  return (
    <Box className='App' 
        height={'930px'}   
        bgImage={["url('src/assets/backimg.png')", "url('src/assets/backimgmd.png')", "url('src/assets/backimglg.png')" ]} 
        backgroundRepeat={['no-repeat', 'no-repeat', 'no-repeat']} 
        backgroundPosition={['center', 'center', 'center' ]}
      >
      <Home></Home>

    </Box>
  )
}

export default App
