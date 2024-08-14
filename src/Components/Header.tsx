
import { Box, Heading,  } from "@chakra-ui/react"
import {useAuth} from './AuthProvider'

export function Header(){
    const {isAuthenticated} = useAuth()
    console.log(isAuthenticated)
    return(
        <Box height={'25%'} paddingTop={'65px'} >
            <Heading as="h1"  fontFamily={'irish Grover'} textAlign={'center'}>
                Wellcome To Juice's Order Platform
            </Heading>
        </Box> 
    )
}

