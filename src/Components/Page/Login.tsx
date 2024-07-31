
import React from "react"

import  * as Yup from 'yup'

import {FormControl,FormLabel, Button,VStack, Box, Center, Input, Heading, InputGroup, InputRightElement} from '@chakra-ui/react'

import { useFormik } from "formik"
import {useAuth} from "../AuthProvider"


export  default function Login()  {

    const auth  = useAuth()

    const formik = useFormik({
        initialValues:{
            pseudo:'',
            password:'',
        },
        validationSchema: Yup.object({
            pseudo: Yup.string().required('Champ obligatoire').min(6,'Le pseudonyme doit contenir au minimum 6 caractères'),
            password: Yup.string().required('Champ obligatoire').min(8,'Le mot de passe doit contenir au minimum 8 caractères')
        }),
        onSubmit: (values , {resetForm}) => {
            auth.loginAction(values)
            resetForm()
        } 
    })

    return(
        <>
            <form onSubmit= {formik.handleSubmit}>
                <Box paddingLeft={'26px'} paddingRight={'26px'} paddingTop={'281px'}>
                        <Box as={VStack} height={'400px'} minW={'372px'} backgroundColor={"rgba(239,188,160,75%)"} >
                            <Box paddingLeft={'12px'} paddingRight={'12px'} paddingTop={'21px'}>
                                <Heading as='h1'>
                                    Connectez-vous!
                                </Heading>
                            </Box>

                            <Box marginTop={'23px'}>
                                <FormControl height={'61px'} marginBottom={'30px'} >
                                    <FormLabel>Pseudonyme</FormLabel>
                                    <Input 
                                        id="pseudo" 
                                        type="text" 
                                        color={'white'} 
                                        bgColor={'rgba(84,75,75,75%)'} 
                                        borderRadius={'10px'} 
                                        border={'none'} 
                                        focusBorderColor='white' 
                                        fontWeight={'bold'}
                                        {...formik.getFieldProps('pseudo')}
                                    >
                                    </Input>
                                    {formik.touched.password && formik.errors.pseudo ? (
                                            <Box className="stylebutton" fontSize={'11px'}>{formik.errors.pseudo}</Box>
                                        ): null}
                                </FormControl>

                                <FormControl height={'61px'} marginBottom={'30px'}>
                                    <FormLabel size={'bolder'}>Mot de passe</FormLabel>
                                    {<Input type="password" id="password" color={'white'} bgColor={'rgba(84,75,75,75%)'} borderRadius={'10px'} border={'none'} focusBorderColor='white' fontWeight={'bold'}
                                        {...formik.getFieldProps('password')}
                                    >
                                    </Input>}
                                    {formik.touched.password && formik.errors.password ? (
                                            <Box className="stylebutton" fontSize={'11px'}>{formik.errors.password}</Box>
                                        ): null}
                                </FormControl>

                                <Center mt={'60px'}>
                                    <Button type="submit"
                                        width={'280px'} borderRadius={'25px'} bgColor={'rgba(52,42,42,100%)'} color={'white'} border={'1px white solid'}
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

                <Box textAlign={'center'}  borderRadius={"10px"} border={"1px black solid"} bgColor={'rgba(232,178,178,30%)'} paddingTop={'10px'} mt={'212px'}>
                    Provided by @Saint
                </Box>
            </form>
        </>
    )
}



function PasswordInput( props:any) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => {setShow(!show); }

    {}
  
    return (
      <InputGroup size='md'>
        <Input
          id='password'
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          color={'white'} bgColor={'rgba(84,75,75,75%)'}
          borderRadius={'10px'}
          border={'none'}
          focusBorderColor='white'
          {...props.getFieldProps}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }