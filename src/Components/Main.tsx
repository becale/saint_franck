import { Box, Button, Center, Text, Square, Image, useDisclosure, Select, Flex, Radio, RadioGroup, Heading, VStack, SelectField } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react";
import { useState } from "react";
import Slider  from "react-slick";
import  * as Yup from 'yup'
import { FormControl, FormLabel, Input, Checkbox } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/index.css"
import {useField, Field, Formik, Form, useFormik , connect, getIn, FormikProvider, FormikProps} from "formik";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { color } from "framer-motion";
import { isExpired, decodeToken } from "react-jwt"
import {useAuth} from "./AuthProvider"







export function ModalForm() {

    const {token} = useAuth()

    const myDecodeToken = decodeToken(token || null)
    const isMyTokenExpired = isExpired(token || null) 

    const myTokenInfo = {
        'myDecodeToken' : myDecodeToken,
        'isMyTokenExpired': isMyTokenExpired
    }

    console.log(myTokenInfo)

    const { isOpen, onOpen, onClose  } = useDisclosure()
  
    return (
      <>
        <Button width={'280px'} borderRadius={'25px'} bgColor={'rgba(52,42,42,100%)'} color={'white'} border={'1px white solid'} onClick={onOpen}
            _hover={{
            border: "1px solid black",
            bg: 'lightyellow',
            color:'black',
            }}
        >
            Passez votre commande
        </Button>
        
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay  
            bgImage={["url('src/assets/backimg.png')", "url('src/assets/backimgmd.png')", "url('src/assets/backimglg.png')" ]} 
            backgroundRepeat={['no-repeat', 'no-repeat', 'no-repeat']} 
            backgroundPosition={['center', 'center', 'center' ]}
          />
          <ModalContent width={'350px'} height={'765px'} bgColor={'rgba(289,188,160,75%)'}>
            <ModalHeader><Heading textAlign={'center'} as='h3'>Finalisez votre commande</Heading></ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <OrderForm  onClose={onClose} ></OrderForm>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }


interface Values{
    parfum : string,
    quantite: string,
    adressedefaut:string,
    adresse:string,
    date:string,
    periode:string,
}

export function OrderForm(props:any){

    const formik = useFormik({

        initialValues : {
            parfum:'',
            quantite: '',
            adressedefaut:'',
            adresse:'',
            date:'',
            periode:'',
        },

        validationSchema : Yup.object({
            parfum: Yup.string(),//.required('Ce champ est obligatoire'),
            quantite: Yup.number(),//.required('Ce champ est obligatoire').min(1,('Choisir au moins 1 produit')),
            adressedefaut: Yup.string(),
            adresse: Yup.string().min(10,'Minimum 10 caractères'),
            date: Yup.date(),//.required('Ce champ est obligatoire'),
            periode: Yup.string(),//.required('Ce champ est obligatoire'),
            }), 
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const handleCheckButton = (e) => {
        e.target.value = !e.target.value
    }


    return(
        ((
            <Formik 
                initialValues ={{
                    parfum:'',
                    quantite: '',
                    adressedefaut:'false',
                    adresse:'',
                    date:'',
                    periode:'',
                }}
        
                validationSchema = {Yup.object({
                parfum: Yup.string().required('Ce champ est obligatoire'),
                quantite: Yup.number().required('Ce champ est obligatoire').min(1,('Choisir au moins 1 produit')),
                adressedefaut: Yup.string(),
                adresse: Yup.string().min(10,'Minimum 10 caractères'),
                date: Yup.date().required('Ce champ est obligatoire'),
                periode: Yup.string().required('Ce champ est obligatoire'),
                })}
        
                onSubmit={(values, {resetForm} ) => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                }}
            >
        
            { (formik) => (
                <Form>
        
                    <FormControl  height={'60px'} marginBottom={'25px'}>
                    <FormLabel>Parfum</FormLabel>
                    <SelectJuice label='Jus'name='parfum'></SelectJuice>
                    </FormControl>
        
                    <FormControl  height={'50px'} marginBottom={'25px'}  >
                        <FormLabel>Quantité</FormLabel>
                        <Field component={NumberInput} >
                        </Field>
                        <Box className="stylebutton"></Box>
                    </FormControl>
        
                    <FormControl   marginBottom={'25px'}>
                        <ToggleInput name="adresse"></ToggleInput>
                    </FormControl>
        
                    <FormControl  height={'50px'} marginBottom={'25px'}>
                        <FormLabel>Date de livraison</FormLabel>
                        <InputDate label={'date'}></InputDate>
                    </FormControl>
        
                    <FormControl  height={'50px'} marginBottom={'25px'}>
                        <FormLabel>De préférence</FormLabel>
                        <RadioGroupOf2 label='preference'></RadioGroupOf2>
                    </FormControl>
        
                    <Center as={VStack } pt={'30px'} spacing={'20px'}>

                        <Text>Vous disposez actuellement de  <span className="styleamount">X</span> crédit(s)</Text>
                        <Heading size={'lg'}>Total :  <span className="styleamount">{formik.values.quantite}</span> Crédit(s)</Heading>

                    </Center>
        
                    <Center mt={'30px'}>

                        {(formik.values.parfum == '' || formik.values.quantite == '' || formik.values.date == '' || formik.values.periode == '')?
                            <Button 
                            isDisabled  
                            
                            type="submit"
        
                            width={'280px'} 
                            borderRadius={'25px'} 
                            bgColor={'rgba(52,42,42,100%)'} 
                            color={'white'} 
                            border={'1px white solid'}
        
                            _hover={{
                                border: "1px solid black",
                                bg: 'lightyellow',
                                color:'black',
                            }}  
                        >
                            Commander
                            </Button>
                        :
                            <Button 
                        disabled  
                        
                        type="submit"
    
                        width={'280px'} 
                        borderRadius={'25px'} 
                        bgColor={'rgba(52,42,42,100%)'} 
                        color={'white'} 
                        border={'1px white solid'}
    
                        _hover={{
                            border: "1px solid black",
                            bg: 'lightyellow',
                            color:'black',
                        }}  
                    >
                        Commander
                            </Button>
                        }
                    </Center>
                </Form>
        
            )}
        
            </Formik> 
        ))
        
    )
}



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight : true,
    row:2
  };
  return (
    <Slider {...settings} >
      <Box width={'100%'} height={'100%'} >
        <Square mb={'15px'}>
            <img src="/src/assets/anan.png" width={'200px'} height={'200px'}/>
        </Square>
        <Center mb={'15px'}>
            <Text>La saveur spéciale d'Ananas frais!</Text>
        </Center>
        <Center mb={'20px'}>
            <Text fontSize={'lg'} fontWeight={'bold'} fontFamily={'cursive'} color={'red'}>
                1 Crédit
            </Text>
        </Center>
      </Box>
      
      <Box width={'100%'} height={'100%'} >
        <Square mb={'15px'} borderRadius={'15px'}>
            <Image
                boxSize={'200px'}
                objectFit={'cover'}
                src="/src/assets/anan.png" 
                alt="Jus de fruits"
                boxShadow={'md'}
            />    
        </Square>
        <Center mb={'15px'}>
            <Text>La saveur spéciale d'Ananas frais!</Text>
        </Center>
        <Center mb={'20px'}>
            <Text fontSize={'lg'} fontWeight={'bold'} fontFamily={'cursive'} color={'red'}>
                1 Crédit
            </Text>
        </Center>
      </Box>
    </Slider>
  );
}

export function Main (){
    return(
        <Box height={'70%'} padding={'10px'}>
            <Box width={'350px'} margin={'0 auto'} backgroundColor={"rgba(239,188,160,60%)"} paddingTop={'10px'}>
                <SimpleSlider></SimpleSlider>
            </Box>

            <Center  margin={'0 auto'} marginTop={'80px'} >
                <ModalForm></ModalForm>
            </Center>
        </Box>

    )
}





  const SelectJuice = ({ label, ...props}) => {

    const [field, meta] = useField(props)

    return(
        <>
            <Select
                bgColor={'rgba(84,75,75,75%)'}
                borderRadius={'10px'}
                borderColor={'rgba(84,75,75,75%)'}

                placeholder='Selectionner un parfum'
                {...field} {...props}
            >
                <option>Ananas</option>
                <option>Mangue</option>
                <option>Baobab</option>
                <option>Gingembre</option>
            </Select>
            {meta.touched && meta.error ? (
            <div className="styleError">{meta.error}</div>
            ) : null}
        </>
    )
  }
  const NumberInput = ({label, ...props}) =>{

    const [field, meta] = useField({name:'quantite'})

    return(
        <>
            <Input
                id="quantite"
                color={'white'} 
                bg={'rgba(84,75,75,75%)'} 
                borderRadius={'10px'} 
                borderColor={'rgba(84,75,75,75%)'}  
                _focus={{border:"1px solid white"}} 
                boxShadow={'0'}
                
                {...field}  
            />
            {meta.touched && meta.error ? (
            <div className="styleError">{meta.error}</div>
            ) : null}
        </>
    )
  }
  const InputDate = ({label, ...props}) => {
    
    const [field, meta] = useField({name:'date'})

    return(
        <>
           <Input 
                type="date" 
                color={'white'} 
                bgColor={'rgba(84,75,75,75%)'} 
                borderRadius={'10px'} 
                border={'none'} 
                focusBorderColor="white" 
                borderColor={'rgba(84,75,75,75%)'} 
                _hover={{border:"1px solid white"}}

                {...field} {...props}
            >
            </Input> 
            {meta.touched && meta.error ? (
            <div className="styleError">{meta.error}</div>
            ) : null}
        </>
    )
  }
  const RadioGroupOf2 = ({label, ...props}) => {
    
    const [field, meta] = useField({name:'periode',type:'radio'})

    return(
        <>
            <RadioGroup>
                <Flex justifyContent={'space-between'}>
                    <Radio
                        colorScheme={'green'}  
                        {...field}
                        value="matinee"
                    >
                        Matinée
                    </Radio> 
                    <Radio 
                        colorScheme={'orange'}
                        {...field}
                        value="apres-midi"
                    >
                        Après-Midi
                    </Radio>
                </Flex>
            </RadioGroup>
            {meta.touched && meta.error ? (
            <div className="styleError">{meta.error}</div>
            ) : null}
        </>
    )
  }

  const ToggleInput = ( props ) => {

    /*const [checked, setIsChecked] = useState({checked: "checked" })
    const handleOnclick = () => {
        setIsChecked({checked:""})
    }*/

    const [field, meta, ] = useField({name:'adresse'})

    const toggle = () => {
        setIsOpen((isOpen) => !isOpen)
    }
    const [isOpen, setIsOpen] = useState(false)
    const ButtonAddMin = ( (!isOpen)?<AddIcon />:<MinusIcon /> )

    return(
        <>
            <FormLabel>Lieu de livraison</FormLabel>
            <VStack>
                <Flex>
                    <Box pr={'150px'} pt={'10px'}> 
                        <Checkbox 
                            checked
                            {...field}
                            name="adressedefaut"
                        >
                            Par défaut
                        </Checkbox>
                        
                    </Box>
                    <Button onClick={toggle} aria-label='Call Segun' > {ButtonAddMin} </Button> 
                </Flex>
                {isOpen && <Input className="place"
                            color={'white'} 
                            bgColor={'rgba(84,75,75,75%)'} 
                            borderRadius={'10px'} 
                            border={'none'} 
                            focusBorderColor="white" 
                            placeholder="Ekounou-Carrefour +237697989850"

                            {...field}
                        /> 
                }
                {meta.touched && meta.error ? (
                    <div className="styleError">{meta.error}</div>
                ) : null}
            </VStack>
        </>
    )
}
  



 {/**
     ((

        
    <Formik 
        initialValues ={{
            parfum:'',
            quantite: '',
            adressedefaut:'false',
            adresse:'',
            date:'',
            periode:'',
        }}

        validationSchema = {Yup.object({
        parfum: Yup.string().required('Ce champ est obligatoire'),
        quantite: Yup.number().required('Ce champ est obligatoire').min(1,('Choisir au moins 1 produit')),
        adressedefaut: Yup.string(),
        adresse: Yup.string().min(10,'Minimum 10 caractères'),
        date: Yup.date().required('Ce champ est obligatoire'),
        periode: Yup.string().required('Ce champ est obligatoire'),
        })}

        onSubmit={(values, {resetForm} ) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        }}
    >

    { () => (
        <Form>

            <FormControl  height={'60px'} marginBottom={'25px'}>
            <FormLabel>Parfum</FormLabel>
            <SelectJuice label='Jus'name='parfum'></SelectJuice>
            </FormControl>

            <FormControl  height={'50px'} marginBottom={'25px'}  >
                <FormLabel>Quantité</FormLabel>
                <Field component={NumberInput} >
                </Field>
                <Box className="stylebutton"></Box>
            </FormControl>

            <FormControl   marginBottom={'25px'}>
                <ToggleInput name="adresse"></ToggleInput>
            </FormControl>

            <FormControl  height={'50px'} marginBottom={'25px'}>
                <FormLabel>Date de livraison</FormLabel>
                <InputDate label={'date'}></InputDate>
            </FormControl>

            <FormControl  height={'50px'} marginBottom={'25px'}>
                <FormLabel>De préférence</FormLabel>
                <RadioGroupOf2 label='preference'></RadioGroupOf2>
            </FormControl>

            <Center as={VStack } pt={'30px'} spacing={'20px'}>
                <Text>Vous disposez actuellement de  <span className="styleamount">X</span> crédit(s)</Text>
                
                <Heading size={'lg'}>Total :  <span className="styleamount"></span> Crédit(s)</Heading>
            </Center>

            <Center mt={'30px'}>
                <Button 
                    disabled  
                    
                    type="submit"

                    width={'280px'} 
                    borderRadius={'25px'} 
                    bgColor={'rgba(52,42,42,100%)'} 
                    color={'white'} 
                    border={'1px white solid'}

                    _hover={{
                        border: "1px solid black",
                        bg: 'lightyellow',
                        color:'black',
                    }}  
                >
                    Commander
                </Button>
            </Center>
        </Form>

    )}

    </Formik> 
))
     */}




{/*<Formik
           initialValues ={{
                parfum:'',
                quantite: '',

                adressedefaut:'',

                adresse:'',
                date:'',
                periode:'',
            }}

            validationSchema = {Yup.object({
            parfum: Yup.string().required('Ce champ est obligatoire'),
            quantite: Yup.number().required('Ce champ est obligatoire').min(1,('Choisir au moins 1 produit')),
            adressedefaut: Yup.string(),
            adresse: Yup.string().min(10,'Minimum 10 caractères'),
            date: Yup.date().required('Ce champ est obligatoire'),
            periode: Yup.string().required('Ce champ est obligatoire'),
            })}

            onSubmit={(values, {resetForm} ) => {
                alert(JSON.stringify(values, null, 2));
                resetForm();
            }}
        >
            <form onSubmit={formik.handleSubmit}>
                <FormControl  height={'60px'} marginBottom={'25px'}>
                <FormLabel>Parfum</FormLabel>
                    <Select 
                        bgColor={'rgba(84,75,75,75%)'}
                        borderRadius={'10px'}
                        borderColor={'rgba(84,75,75,75%)'}
                        placeholder='Selectionner un parfum'
                        name="parfum"
                        onChange={formik.handleChange}
                        value={formik.values.parfum}
                    >
                        <option>Ananas</option>
                        <option>Mangue</option>
                        <option>Baobab</option>
                        <option>Gingembre</option>
                    </Select>
                </FormControl>

                <FormControl  height={'60px'} marginBottom={'25px'}>
                <FormLabel>Quantité</FormLabel>
                    <Input
                        name="quantite"
                        color={'white'} 
                        bg={'rgba(84,75,75,75%)'} 
                        borderRadius={'10px'} 
                        borderColor={'rgba(84,75,75,75%)'}  
                        _focus={{border:"1px solid white"}} 
                        boxShadow={'0'}

                        onChange={formik.handleChange}
                        value={formik.values.quantite}
                    />
                </FormControl>

                <FormControl  height={'60px'} marginBottom={'25px'}>
                <FormLabel>Date de livraison</FormLabel>
                <Input 
                    type="date" 
                    name="date"
                    color={'white'} 
                    bgColor={'rgba(84,75,75,75%)'} 
                    borderRadius={'10px'} 
                    border={'none'} 
                    focusBorderColor="white" 
                    borderColor={'rgba(84,75,75,75%)'} 
                    _hover={{border:"1px solid white"}}

                    onChange={formik.handleChange}
                    value={formik.values.date}
                />
                </FormControl>

                <FormControl  height={'60px'} marginBottom={'60px'}>
                    
                    <ToggleInput ></ToggleInput>
                </FormControl>
                    
                <FormControl  height={'60px'} marginBottom={'25px'}>
                <FormLabel>Période</FormLabel>
                    <RadioGroup>
                        <Flex justifyContent={'space-between'}>
                            <Radio
                                name="periode"
                                colorScheme={'green'} 
                                onChange={formik.handleChange}
                                value={formik.values.periode}
                                value="matinee"
                            >
                                Matinée
                            </Radio> 
                            <Radio 
                                name="periode"
                                colorScheme={'orange'}
                                value="apres-midi"
                                onChange={formik.handleChange}
                            >
                                Après-Midi
                            </Radio>
                        </Flex>
                    </RadioGroup>
                </FormControl>

                <Center as={VStack } pt={'30px'} spacing={'20px'}>
                    <Text>Vous disposez actuellement de  <span className="styleamount">X</span> crédit(s)</Text>
                    
                    <Heading size={'lg'}>Total :  <span className="styleamount">{formik.values.quantite}</span> Crédit(s)</Heading>
                </Center>

                <Center mt={'30px'}>
                    <Button 
                        type="submit"
                        width={'280px'} 
                        borderRadius={'25px'} 
                        bgColor={'rgba(52,42,42,100%)'} 
                        color={'white'} 
                        border={'1px white solid'}

                        _hover={{
                            border: "1px solid black",
                            bg: 'lightyellow',
                            color:'black',
                        }}  
                    >
                        Commander
                    </Button>
                </Center>
            </form>

        </Formik>*/}