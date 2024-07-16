
import { Box, Heading,  } from "@chakra-ui/react"


export function Header(){

    return(
        <Box height={'25%'} paddingTop={'65px'} >
            <Heading as="h1" size={'2xl'} fontFamily={'irish Grover'} textAlign={'center'}>
                Wellcome To Juicy Order Platform
            </Heading>
        </Box> 
    )
}

