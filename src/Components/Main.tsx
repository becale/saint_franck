import * as React from 'react';
import { Box, Button, Center, Text, Square, Image, useDisclosure, Select, Flex, Radio, RadioGroup, Heading, VStack } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react"; //, useToast
import { useEffect, useState } from "react";
import Slider  from "react-slick";
import  * as Yup from 'yup';
import { FormControl, FormLabel, Input, Checkbox } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/src/index.css"
import { useField, Field, Formik, Form, useFormik } from "formik";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { isExpired, decodeToken } from "react-jwt"

import {useAuth , AuthProvider} from "./AuthProvider"

import toast, { Toaster } from 'react-hot-toast';








export const Main = () =>{
    const {isAuthenticated, token, myTokenInfo, logOut} = useAuth()
    const [listeJus, setListeJus] = useState({})

    const fetchDataGetListeJus =  async () => {
            try{
                const response = await fetch('https://ventejus.newvision.cm/jus',{
                    method : 'GET',
                    headers : {
                        'content-type' : "application/json",
                        'Authorization' :  token
                    }
                    
                })
    
                const res = await response.json()
        
                if(response.ok){
                    setListeJus(res)
                    setStatutRequeteListeJus(true)
                }
                else{
                    if(response.status === 422) { throw new Error('Erreur 422') }
                    if(response.status === 400) { throw new Error('Erreur 400') }
                    if(response.status === 403) { throw new Error('Erreur 403') }
    
                    //throw new Error(response.status)
                }
            }catch(error){
                console.log('Fetch ListeJus', error)
            }
    }
    useEffect(() =>{
        fetchDataGetListeJus()
    }, [])
    

    const notify = () => toast('Here is your toast.')
    const [isListeJus, setStatutRequeteListeJus] = useState(false)
    

    
    return(
        <Box height={'70%'} paddingLeft={'25px'} paddingRight={'25px'}>
            <Box width={'300px'} margin={'0 auto'} backgroundColor={"rgba(239,188,160,60%)"} paddingTop={'10px'} borderRadius={'25px'} border={'0.5px solid black'}>
                <SimpleSlider></SimpleSlider>
            </Box>
            <Center  margin={'0 auto'} marginTop={'80px'} >
                <ModalForm listeJus = {listeJus}> </ModalForm>
            </Center>
        </Box>
    )
}
export default Main



export function ModalForm(listeJus : [], {...props}) {
    const [commandOverlay, setCommandOverlay] = useState(false)
    const {isAuthenticated, myTokenInfo} = useAuth()
    const { isOpen, onOpen, onClose  } = useDisclosure()

    return (
      <>
        
        { 
            (listeJus.listeJus.length > 0) ?
            
            <Button width={'280px'} borderRadius={'25px'} bgColor={'rgba(52,42,42,100%)'} color={'white'} border={'1px white solid'} onClick={onOpen}
            _hover={{
            border: "1px solid black",
            bg: 'lightyellow',
            color:'black',
            
            }}
            >
                Passez votre commande
            </Button>
            :
            <Button width={'280px'} borderRadius={'25px'} bgColor={'rgba(52,42,42,100%)'} color={'white'} border={'1px white solid'} onClick={onOpen}
                _hover={{
                border: "1px solid black",
                bg: 'lightyellow',
                color:'black',
                
                }}
                isDisabled
            >
                Patientez un instant...
            </Button>
        }
        
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay  
            bgImage={["url('src/assets/backimg.png')", "url('src/assets/backimgmd.png')", "url('src/assets/backimglg.png')" ]} 
            backgroundRepeat={['no-repeat', 'no-repeat', 'no-repeat']} 
            backgroundPosition={['center', 'center', 'center' ]}
          />
          {(commandOverlay == true) ? <SpinerOverlay /> : ''}
        
          <ModalContent width={'300px'}  height={'800px'} bgColor={'rgba(289,188,160,75%)'} border={'black solid 0.5px'} borderRadius={'25px'}>
            <ModalHeader><Heading textAlign={'center'} as='h3'>Finalisez votre commande</Heading></ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <OrderForm lockWindow={onClose} openWindow={onOpen} listeJus = {listeJus} setCommandOverlay={setCommandOverlay} ></OrderForm>
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

function OrderForm(props:any){

    const [responseValue, setResponseValue] = useState('')
    const [toastPostCommandId, setToastPostCommandId] = useState(undefined)
    const {token, myTokenInfo, setUser,user} = useAuth()

    type formData = {
        utilisateurId : number,
        jusId : number,
        quantite: number,
        dateLivraison : String,
        periodeLivraison : String,
        lieuLivraison: String
    }

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

    const getJusId = (listeJus, saveur:string) : number => {
        let justable = []

        for(let i in listeJus){
            justable.push(listeJus[i].id)
            justable.push(listeJus[i].saveur)
        }
        console.log(saveur)
        console.log(justable)
        if(listeJus.length < 0) return -20
        return ((justable.indexOf(saveur) > 0) ? justable[justable.indexOf(saveur)-1] : -10)
    }
    
    const formatFormData = (values) => {
        const jusId = getJusId(props.listeJus.listeJus, values.parfum)

        let livraison
        if (values.adresse == "" || values.adressedefaut == true ) { livraison = user.lieuLivraison }
        if (values.adressedefaut == false) {livraison = user.lieuLivraison}
        if (values.adresse !== "") { livraison = values.adresse }
        if (values.adresse !== "" && values.adressedefaut == true) {livraison = `${user.lieuLivraison} ${values.adresse}`}
        

        
        const data : formData =  {
            utilisateurId : user.id, 
            jusId : jusId, 
            quantite : values.quantite, 
            dateLivraison : values.date,
            periodeLivraison : values.periode,
            lieuLivraison : livraison
        }
        return data
    }

    const fetchDataPostCommand = async (data) => {

        props.setCommandOverlay(true)

        try{
            const response = await fetch('https://ventejus.newvision.cm/commande', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                    'Authorization': token
                },
                body : JSON.stringify(data)
            })

            const res  = await response.json()

            if(response.ok){

                toast.success('Votre Commande a été réalisée avec Succès', {
                    id: toastPostCommandId,
                    duration: 6000
                })
                props.lockWindow()
                props.setCommandOverlay(false)
                
                const montantcomtpte = {
                    montantCompte : String(res.client.montant)
                }
                setUser( {...user, ...montantcomtpte} )

            }else{
                toast.error('Une erreur est survenue, Votre commande a échoué', {
                    id: toastPostCommandId,
                    duration: 6000
                })
                if(response.status === 422) { throw new Error('Erreur 422') }
                if(response.status === 400) { throw new Error('Erreur 400') }
                if(response.status === 403) { throw new Error('Erreur 403') }
            }
        }catch(error){
            props.lockWindow()
            props.setCommandOverlay(false)
            toast.error('Erreur réseau, votre commande a échoué', {
                    id: toastPostCommandId,
                    duration : 6000
                })
            console.log('Fetch Data Post Commande', error)
        }
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
        
                onSubmit={ (values, {resetForm} ) => {
                    const toastPostCommand = toast.promise(fetchDataPostCommand(formatFormData(values)), {
                        loading:"En attente de Réponse...",
                        success: 'Réponse Obtenue',
                        error: 'Erreur réseau'
                    },{
                        style: {
                            minWidth : '250px'
                        }
                    })

                    setToastPostCommandId(toastPostCommand)
                    resetForm();
                }}

            >
        
            { (formik) => (
                
                <Form>
        
                    <FormControl  height={'60px'} marginBottom={'25px'}>
                    <FormLabel>Parfum</FormLabel>
                    <SelectJuice label='Jus'name='parfum'></SelectJuice>
                    </FormControl>
        
                    <FormControl  height={'50px'} marginBottom={'45px'}  >
                        <FormLabel>Quantité</FormLabel>
                        <Field component={NumberInput} >
                        </Field>
                        <Box className="stylebutton"></Box>
                    </FormControl>
        
                    <FormControl   marginBottom={'15px'}>
                        <ToggleInput name="adresse"></ToggleInput>
                    </FormControl>
        
                    <FormControl  height={'50px'} marginBottom={'40px'}>
                        <FormLabel>Date de livraison</FormLabel>
                        <InputDate label={'date'}></InputDate>
                    </FormControl>
        
                    <FormControl  height={'50px'} marginBottom={'25px'}>
                        <FormLabel>De préférence</FormLabel>
                        <RadioGroupOf2 label='preference'></RadioGroupOf2>
                    </FormControl>
        
                    <Center as={VStack } pt={'15px'} spacing={'20px'}>

                        <Box textAlign={'center'}>Vous disposez actuellement de  <br /><span className="styleamount">{/*myTokenInfo.myDecodeToken.montantCompte*/}{user.montantCompte} </span> crédit(s)</Box>

                        <Heading size={'lg'}>Total : <span className="styleamount">{formik.values.quantite}</span> Crédit(s)</Heading>

                    </Center>
        
                    <Center mt={'30px'}>

                        {( formik.values.parfum == '' || formik.values.quantite == '' || formik.values.date == '' || formik.values.periode == '' || (Number(user.montantCompte)<=0) || ( (Number(user.montantCompte) < Number(formik.values.quantite))) )?
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
                            { ( (user.montantCompte <= 0 ) || ( Number(user.montantCompte) < Number(formik.values.quantite) ) )? "Solde insuffisant" : 'Commander'}
                            </Button>
                        :
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
                        }
                        
                    </Center>
                </Form>
            )}
        
            </Formik> 
        ))
        
    )
}











function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight : true,
      row:2,
      autoplay:true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    //console.log(listeJus.listeJus)

    /*let sliderListeJus = []

    if(listeJus.listeJus.length > 0){
        sliderListeJus = listeJus.listeJus.map((jus, index) =>{
        return(
            <Box width={'100%'} height={'100%'} key={index} >
                <Square mb={'15px'}>
                    <Image
                        boxSize={'180px'}
                        objectFit={'cover'}
                        src="/src/assets/anan.png" 
                        alt="Jus de fruits"
                        boxShadow={'2px 2px 3px 6px rgba(0,0,5,0.6)'}
                        borderRadius={'25px'}
                    />
                </Square>
                <Center mb={'15px'}>
                <Text>"La saveur spéciale d'Ananas frais! `${jus.saveur}`"</Text>
                </Center>
                <Center mb={'20px'}>
                <Text fontSize={'lg'} fontWeight={'bold'} fontFamily={'cursive'} color={'red'}>
                  1 Crédit
                </Text>
                </Center>
            </Box>
        )

    })}

    console.log(sliderListeJus)*/

    return (
      <Slider {...settings} >

        {/*
            (listeJus.listeJus.length > 0) ?

        {sliderListeJus}
        :*/}
        <Box width={'100%'} height={'100%'} >
          <Square mb={'15px'}>
              <Image
                  boxSize={'180px'}
                  objectFit={'cover'}
                  src="/src/assets/anan.png" 
                  alt="Jus de fruits"
                  boxShadow={'2px 2px 3px 6px rgba(0,0,5,0.6)'}
                  borderRadius={'25px'}
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

        <Box width={'100%'} height={'100%'} >
          <Square mb={'15px'}>
              <Image
                  boxSize={'180px'}
                  objectFit={'cover'}
                  src="/src/assets/anan.png" 
                  alt="Jus de fruits"
                  boxShadow={'2px 2px 3px 6px rgba(0,0,5,0.6)'}
                  borderRadius={'25px'}
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
                    <Box pr={'100px'} pt={'5px'}> 
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

const SpinerOverlay = () => {
    return(
        <Box as={Center}
            w={'100%'}
            m={'0'}
            position={'absolute'} 
            zIndex={10000}  
            left={'50%'} 
            top={'50%'}
            transform={'translate(-50%, -50%)'}
            backgroundColor={'rgba(0,0,1,0.4)'} 
            paddingLeft={'auto'}
            paddingRight={'auto'}

            height={'100%'}
        > 
            <Box width={'60px'} height={'50px'} margin={'auto'} borderRadius={'50%'}>
                <Image src="src/assets/loadimg.gif" width={'100%'} borderRadius={'25%'}/>
            </Box>
        </Box>
    )
}