
import { Main } from "../Main";
import {Footer} from '../Footer';
import  {CheckIcon } from "@chakra-ui/icons";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Heading,
    HStack,
    Button,
    Center
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";
import {useAuth , AuthProvider} from "../AuthProvider"
import MyCommandList from "./CommandPdf";
import toast, { Toaster } from 'react-hot-toast';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
 


export const Command = () => {

    const {logOut, token} = useAuth()
    const[listeCommande, setListeCommande] = useState([])
    const [apiResponse, setApiResponse] = useState(null)

    const handleSetListCommande = (newList : []) =>{
        setListeCommande(newList);
    }

    const fetchGetListeCommand = async () => { 
        try{
            const response = await fetch('https://ventejus.newvision.cm/commande', {
                method: 'GET',
                headers : {
                    "Content-type" : 'application/json',
                    Authorization : token
                }
            })

            const res = await response.json()

            if(response.ok){
                console.log(res.commandes)
                let data = res.commandes
                setListeCommande(data)
            }else{

                if(response.status === 422) { throw new Error('Erreur 422') }
                if(response.status === 400) { throw new Error('Erreur 400') }
                if(response.status === 403) { throw new Error('Erreur 403') }

                throw new Error(String(response.status))
            }
            
        }catch(error){
            console.log("Get Liste Commande", error);
            console.log('LISTE COMMANDE', listeCommande)
        }

    }

    useEffect(()=>{
        fetchGetListeCommand()
    }, [])


    return(
        <>
        <Box pt={'65px'} height={'932px'} pl={'13px'} pr={'13px'}>
            <Heading textAlign={'center'}>Liste des Commandes <br />non livrées</Heading>

            <Box padding={'20px'}pl={'10px'} pr={'10px'} borderRadius={'20px'} border={"1px solid black"} backgroundColor={"rgba(239,188,160,80%)"}>

                <TableOfCommand listeCommande = {listeCommande} handleSetListCommande={handleSetListCommande} />
                <Center mt={'20px'}>
                    <Button width={'280px'} borderRadius={'25px'} bgColor={'rgba(52,42,42,100%)'} color={'white'} border={'1px white solid'}
                        _hover={{
                        border: "1px solid black",
                        bg: 'lightyellow',
                        color:'black',
                        }}
                    >
                        <PDFDownloadLink document={<MyCommandList listeCommande={listeCommande} />} 
                        fileName="Test.pdf"  
                        >
                            {({loading, error}) => 
                                loading? 'Chargement du document...': 'Imprimmer les commandes'
                            }      
                        </PDFDownloadLink>
                    </Button>
                </Center>
            </Box>

            <Box mt="110px" textAlign={'center'} height={'5%'} borderRadius={"10px"} border={"1px black solid"} bgColor={'rgba(232,178,178,30%)'} paddingTop={'10px'} >
                Provided by @Saint
            </Box>
        </Box>
        
        <Toaster 
            position="bottom-center"
        />
        </>
    )
}
export default Command


type TableLineProps = {
    id: string,
    command: string,
    action?: ReactElement
 }
const TableLine = ( {id , command, action} : TableLineProps, {...props}) =>{

    return(
        <Tr key={id}>
            <Td key={id+1}>{id}</Td>
            <Td key={id+2} textAlign={'center'} fontSize={'12px'}>{command}</Td>
            <Td key={id+3}>{action}</Td>
        </Tr>
    )
}



const TableOfCommand = (props:any ) => {

    {/*const {myTokenInfo, token} = useAuth()
    const[listeCommande, setListeCommande] = useState([])*/}
    const [apiResponse, setApiResponse] = useState(null)
    const listeCom = props.listeCommande//listeCommande.listeCommande 
    console.log(listeCom)
    const handleSetListCom = props.handleSetListCommande//handleSetListCommande.handleSetListCommande
    {/*const handleSetListCommande = (newList : []) =>{
        setListeCommande(newList);
    }

    const fetchGetListeCommand = async () => { 
        try{
            const response = await fetch('https://ventejus.newvision.cm/commande', {
                method: 'GET',
                headers : {
                    "Content-type" : 'application/json',
                    Authorization : token
                }
            })

            const res = await response.json()

            if(response.ok){
                console.log(res.commandes)
                let data = res.commandes
                setListeCommande(data)
            }else{

                if(response.status === 422) { throw new Error('Erreur 422') }
                if(response.status === 400) { throw new Error('Erreur 400') }
                if(response.status === 403) { throw new Error('Erreur 403') }

                throw new Error(String(response.status))
            }
            
        }catch(error){
            console.log("Get Liste Commande", error);
        }

    }*/}


    const rows = listeCom.map( (commande, index) => { 
    return(
        <TableLine 
            key={commande.commandeId}
            id = {commande.commandeId}
            command = {`${commande.quantite}-${commande.jus.saveur}(s)-pour-${commande.client.pseudo}-vers-${commande.lieuLivraison} `}
            action={< ActionModalButton command={commande} setComm={handleSetListCom} listeCom ={listeCom} />}
        />
    )

    })
 
    return(
        <TableContainer  maxW={'100%'} height={'535px'} overflowY={'scroll'} borderRadius={'10px'} border={'1px  solid white'}>
            <Table size={'sm'}  variant={'striped'} borderRadius={'10px'}>
                <Thead>
                    <Tr>
                        <Th width={"5%"} fontSize={'13px'} color={'brown'}  >ID</Th>
                        <Th width={"50%"}  fontSize={'13px'} color={'brown'} textAlign={'center'}>DETAILS COMMANDE</Th>
                        <Th width={"45%"}  fontSize={'13px'} color={'brown'} textAlign={'center'}>ACTIONS</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {listeCom.length > 0 && rows}

                    {listeCom.length < 0 && (
                            <Tr>
                                <Td>  </Td>
                                <Td colSpan={3} textAlign={'center'}>Donnée en cours de chargement ...  </Td>
                                <Td> </Td>
                            </Tr>
                        )
                    }

                    {listeCom.length == 0 && (
                            <>
                                <Tr>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                                <Tr>
                                    <Td></Td>
                                    <Td ></Td>
                                    <Td></Td>
                                </Tr>
                                <Tr>
                                    <Td></Td>
                                    <Td colSpan={3} textAlign={'center'}>Pas de commandes actuellement..</Td>
                                    <Td></Td>
                                </Tr>
                            </>
                        )
                    }  
                </Tbody>
            </Table>
        </TableContainer>
    )
}


const ActionModalButton = (props : any ) => {
    const [toastPutCommandId, setToastPutCommandId] = useState(undefined)

    const [statusPutRequest, setStatusPutRequest] = useState('normal')

    const { isOpen, onOpen, onClose } = useDisclosure()
    const {myTokenInfo, token} = useAuth()

    const command = props.command
    const setCommand = props.setComm
    const listeCom = props.listeCom

    
    const fetchPostUpdateCommandStatus = async () => {
        setStatusPutRequest('pending')
        const dataSubmit = {
            commandeId: command.commandeId,
            statut: true
        }
        try{
            const response = await fetch('https://ventejus.newvision.cm/commande', {
                method: 'PUT',
                headers:{
                    'content-type': 'application/json',
                    Authorization : token
                },
                body : JSON.stringify(dataSubmit)
            })
            const res = await response.json()

            if(response.ok){
                setStatusPutRequest('OK')
                toast.success("La commande a été validée avec succès", {
                    id: toastPutCommandId,
                    duration: 6000
                })

                const newFilterListCommand =  listeCom.filter((commande)=>(commande.commandeId !== dataSubmit.commandeId ))
                console.log("TEST set",setCommand)
                setCommand(newFilterListCommand)
            }
            else{
                setStatusPutRequest('normal')
            }

        }catch(error){
            setStatusPutRequest('normal')
            console.log(error)
            toast.error("Une erreur est survenue, l'action a échoué", {
                id: toastPutCommandId,
                duration: 6000
            })

        }  
    }

    useEffect(()=>{},[
        statusPutRequest
    ])

    
  
    return (
      <>
        <Box>
            <Button 
                width={'100%'}
                onClick={onOpen}
            >
                <CheckIcon />
            </Button>
        </Box>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent  ml={'15px'} mr={'15px'}>
            <ModalHeader>Confirmer la livraison</ModalHeader>

            { (statusPutRequest == "pending") && <ModalCloseButton isDisabled/>}
            { (statusPutRequest == "OK") && <ModalCloseButton />}
            { (statusPutRequest == "normal") && <ModalCloseButton />}

            <ModalBody pb={6}>
              <p>Etes vous certain que la commande avec l'id <span>{command.commandeId}</span>, a été livrée avec succès ? </p>
              <span>NB:</span> Confirmation irrévocable !
            </ModalBody>
  
            <ModalFooter>

                { 
                    (statusPutRequest == "normal") && (
                        (<>
                            <Button colorScheme='blue' mr={3}
                                type="submit"
                                onClick={ () => {
                                    const toastPutCommand = toast.promise(fetchPostUpdateCommandStatus(), {
                                        loading:"En attente de Réponse...",
                                        success: 'Réponse Obtenue',
                                        error: 'Erreur réseau'
                                    },{
                                        style: {
                                            minWidth : '250px'
                                        }
                                    })
    
                                    setToastPutCommandId(toastPutCommand)
                                }
                            }
                            >
                                Confirmer
                            </Button>
    
                            <Button onClick={onClose}>Annuler</Button>
                        </>)
                    )
                    //statusPutRequest ?
                }    

                {
                    (statusPutRequest == "pending") && (
                        (<>
                            <Button colorScheme='blue' mr={3}
                                type="submit"
                                onClick={ () => {
                                    const toastPutCommand = toast.promise(fetchPostUpdateCommandStatus(), {
                                        loading:"En attente de Réponse...",
                                        success: 'Réponse Obtenue',
                                        error: 'Erreur réseau'
                                    },{
                                        style: {
                                            minWidth : '250px'
                                        }
                                    })
    
                                    setToastPutCommandId(toastPutCommand)
                                }
                            }
                            isLoading
                            >
                                Confirmer
                            </Button>
                            <Button 
                                onClick={onClose}
                                isLoading
                            >
                                Annuler
                            </Button>
                        </>)
                    )
                }

                {
                    (statusPutRequest == 'OK')&&(
                        (<>
                            <Button colorScheme='blue' mr={3}
                                type="submit"
                                onClick={ () => {
                                    const toastPutCommand = toast.promise(fetchPostUpdateCommandStatus(), {
                                        loading:"En attente de Réponse...",
                                        success: 'Réponse Obtenue',
                                        error: 'Erreur réseau'
                                    },{
                                        style: {
                                            minWidth : '250px'
                                        }
                                    })
    
                                    setToastPutCommandId(toastPutCommand)
                                }
                            }
                            disabled
                            >
                                Confirmer
                            </Button>
                            <Button 
                                onClick={onClose}
                                disabled
                            >
                                Annuler
                            </Button>
                        </>)
                    )
                }
                
            </ModalFooter>

          </ModalContent>
        </Modal>
      </>
    )
}