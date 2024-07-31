import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import {useAuth , AuthProvider} from "./Components/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
      <BrowserRouter>
        <AuthProvider>
          <ChakraProvider>

            <App />

          </ChakraProvider>
        </AuthProvider>
      </BrowserRouter>
    
  </React.StrictMode>,
)

