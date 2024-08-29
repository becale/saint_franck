
import { Box, Heading,  } from "@chakra-ui/react"


export function Header(){
    return(
        <Box height={'25%'} paddingTop={'65px'} >
            <Heading as="h1"  fontFamily={'irish Grover'} textAlign={'center'} padding={'18px'}>
                Wellcome To Juice's Order Platform
            </Heading>
        </Box> 
    )
}

