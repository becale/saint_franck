import React from "react";
import { useToast } from "@chakra-ui/react";

const ToastMessage =  () => {

    const toast = useToast()

    toast({
        title: "Hello, Toast!",
        description: "This is a simple toast message.",
        status: "success",
        duration: 3000, // Display duration in milliseconds
        isClosable: true, // Allow users to close the toast
    })

    

}