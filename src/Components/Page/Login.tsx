
import React from "react"

import { Box } from "framer-motion"

import  * as Yup from 'yup'

import {FormControl,FormLabel,FormErrorMessage,FormHelperText,} from '@chakra-ui/react'

import { Field, Form, Formik , useFormik} from "formik";

export  default function Login()  {

    const formik = useFormik({
        initialValues:{
            pseudo: '',
            password: '',
        },
        validationSchema:{
            pseudo: Yup.string().required('Ce champ est requis'),
            password: Yup.string().required('Ce champ est requis')
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        } 


    })

    return(
        <>
        <Form>

        </Form>
        </>
    )
}