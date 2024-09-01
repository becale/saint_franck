
import React from "react"

import {FormControl,FormLabel, Button,VStack, Box, Center, Input, Heading, InputGroup, InputRightElement} from '@chakra-ui/react'



export  default function Authentication()  {

    return(
        <>
           <Box paddingLeft={'26px'} paddingRight={'26px'} paddingTop={'281px'}>
                <Box as={VStack} height={'400px'} minW={'372px'} backgroundColor={"rgba(239,188,160,75%)"} >
                    <Box paddingLeft={'12px'} paddingRight={'12px'} paddingTop={'21px'}>
                        <Heading as='h1' textAlign={'center'}>
                            Authentifiez la Transaction!
                        </Heading>
                    </Box>

                    <Box marginTop={'23px'}>
                        <FormControl height={'61px'} marginBottom={'30px'} >
                            <FormLabel>Pseudonyme</FormLabel>
                            <Input type="text" color={'white'} bgColor={'rgba(84,75,75,75%)'} borderRadius={'10px'} border={'none'} focusBorderColor='white'></Input>

                        </FormControl>

                        <FormControl height={'61px'} marginBottom={'30px'}>
                            <FormLabel size={'bolder'}>Mot de passe</FormLabel>
                            <PasswordInput ></PasswordInput>
                            {/*<Input type="password" color={'white'} bgColor={'rgba(84,75,75,75%)'}></Input>*/}
                        </FormControl>

                        <Center mt={'60px'}>
                            <Button width={'280px'} borderRadius={'25px'} bgColor={'rgba(52,42,42,100%)'} color={'white'} border={'1px white solid'}
                                _hover={{
                                    border: "1px solid black",
                                    bg: 'lightyellow',
                                    color:'black',
                                }}
                            >
                                Se Connecter
                            </Button>
                        </Center>

                    </Box>
                </Box>
           </Box>

           <Box textAlign={'center'} height={'5%'} borderRadius={"10px"} border={"1px black solid"} bgColor={'rgba(232,178,178,30%)'} paddingTop={'10px'} mt={'202px'}>
            Provided by @Saint
            </Box>
        </>
    )
}



function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          color={'white'} bgColor={'rgba(84,75,75,75%)'}
          borderRadius={'10px'}
          border={'none'}
          focusBorderColor='white'
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }