
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
import { ReactElement } from "react";

 

export const Command = () => {
    return(
        <Box pt={'65px'} height={'932px'} pl={'13px'} pr={'13px'}>
            <Heading textAlign={'center'}>Liste des Commandes <br />non livrées</Heading>

            <Box padding={'20px'}pl={'10px'} pr={'10px'} backgroundColor={"rgba(239,188,160,80%)"}>

                <TableOfCommand></TableOfCommand>

                <Center mt={'20px'}>
                    <Button width={'280px'} borderRadius={'25px'} bgColor={'rgba(52,42,42,100%)'} color={'white'} border={'1px white solid'}
                        _hover={{
                        border: "1px solid black",
                        bg: 'lightyellow',
                        color:'black',
                        }}
                    >
                        Imprimmer les commandes
                    </Button>
                </Center>
            </Box>

            <Box mt="110px" textAlign={'center'} height={'5%'} borderRadius={"10px"} border={"1px black solid"} bgColor={'rgba(232,178,178,30%)'} paddingTop={'10px'} >
                Provided by @Saint
            </Box>
        </Box>
    )
    {/*<Main></Main>*/}
}
export default Command


const TableOfCommand = () => {

    
    return(
        <TableContainer  maxW={'100%'} height={'535px'} overflowY={'scroll'} borderRadius={'10px'} border={'1px  solid black'}>
            <Table size={'sm'}  variant={'striped'} borderRadius={'10px'}>
                <Thead>
                    <Tr>
                        <Th width={"5%"}>ID</Th>
                        <Th width={"50%"} textAlign={'center'}>DETAILS COMMANDE</Th>
                        <Th width={"45%"} textAlign={'center'}>ACTIONS</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionModalButton/>} />
                    <TableLine id='10' command="2 ananas pour Zap2 à Ekounou" action={< ActionButton/>} />
                </Tbody>
            </Table>
        </TableContainer>
    )
}

 type TableLineProps = {
    id: string,
    command: string,
    action?: ReactElement
 }
const TableLine = ( {id , command, action} : TableLineProps, {...props}) =>{

    return(
        <Tr>
            <Td>{id}</Td>
            <Td textAlign={'center'}>{command}</Td>
            <Td>{action}</Td>
        </Tr>
    )
}

const ActionButton = () => {
    return(
        <Box>
            <Button width={'100%'}>
                <CheckIcon />
            </Button>
        </Box>
    )
}

const ActionModalButton = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        {/*<Button onClick={onOpen}>Open Modal</Button>*/}
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

            <ModalCloseButton />

            <ModalBody pb={6}>
              Etes vous certain que la commande X, a été effectuée avec succès ?
              NB: Confirmation irrévocable 
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Confirmer
              </Button>
              <Button onClick={onClose}>Annuler</Button>
            </ModalFooter>

          </ModalContent>
        </Modal>
      </>
    )
}