import { Box, Button, Center, Text, Square, Image, useDisclosure, HStack, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Flex, Radio, RadioGroup, Heading, VStack } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from "@chakra-ui/react";
import { useState } from "react";
import Slider  from "react-slick";

import { Formik } from "formik";

import { FormControl, FormLabel, FormErrorMessage, Input, Checkbox, IconButton } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ToggleInput(){
    const [isOpen, setIsOpen] = useState(false)

    function toggle(){
        setIsOpen((isOpen) => !isOpen)
    }
    return(
        <VStack>
            <Flex>
                <Checkbox mr={'115px'}>Par défaut</Checkbox>
                <Button onClick={toggle}>{isOpen?'Annuler':'Ajouter'}</Button>
            </Flex>
            {isOpen && <Input></Input> }
        </VStack>
    )
}


export function ModalForm() {

    const { isOpen, onOpen, onClose  } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}
        width={'280px'} height={'38px'} bgColor={'rgba(52,42,42,1)'} color={'white'} borderRadius={'25px'} border={'white 0.5px solid'}>
            Passez votre commande
        </Button>
        
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent width={'350px'} height={'700px'}>
            <ModalHeader>Finalisez votre commande</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Form  onClose={onClose} ></Form>
            </ModalBody>
  
            {/*<ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>*/}
          </ModalContent>
        </Modal>
      </>
    )
  }




export function Form( props: any ){

    {/*<Formik
            initialValues={{
                parfum:'',
                quantite:'',
                lieu_livraison:'',
                date_livraison:'',
                periode_livraison:''
            }}
            onSubmit={ async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2))
            }}  
        >
    </Formik>*/}

    return(
        <form action="">
            <FormControl isRequired>
                <FormLabel>Parfum</FormLabel>
                <Select placeholder="Choisisser un parfum">
                    <option>Ananas</option>
                    <option>Mangue</option>
                    <option>Baobab</option>
                    <option>Gingembre</option>
                </Select>
                <FormErrorMessage></FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Quantité</FormLabel>
                <NumberInput min={1}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <FormErrorMessage></FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Lieu de livraison</FormLabel>
                <ToggleInput></ToggleInput>
                <FormErrorMessage></FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Date de livraison</FormLabel>
                <Input type="datetime-local"></Input>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>De préférence</FormLabel>
                <RadioGroup>
                    <Flex justifyContent={'space-between'}>
                        <Radio value="matinee">Matinée</Radio>
                        <Radio value="apres-midi">Après-Midi</Radio>
                    </Flex>
                </RadioGroup>
                
            </FormControl>

            <Center as={VStack } pt={'30px'} spacing={'20px'}>
                <Text>Vous disposez actuellement de  X crédits</Text>

                <Heading>Total :  5 Crédits</Heading>
            </Center>
            
            <Center mt={'80px'}>
                <Button onClick={props.onClose}
                    width={'280px'} height={'38px'} bgColor={'rgba(52,42,42,1)'} color={'white'} borderRadius={'25px'} border={'white 0.5px solid'}
                >
                    Commander
                </Button>
            </Center>

        </form>
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

            <Center /*width={'280px'}*/ margin={'0 auto'} marginTop={'80px'} >
                {/*<Button width={'280px'} height={'38px'} bgColor={'rgba(52,42,42,1)'} color={'white'} borderRadius={'25px'} border={'white 0.5px solid'}>
                    Passez votre commande
                </Button>*/}
                <ModalForm></ModalForm>
            </Center>
        </Box>

    )
}