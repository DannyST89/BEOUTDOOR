import { useState } from 'react';

//Primero se envia un valor inicial

//forma de useForm
/*
    const [formValues ,handleInputChange] = useForm({
    email: 'nando@gmail.com',
    password: '123456'
    })

*/ 
export const useForm = ( initialState = {} ) => {
    
    //el use state es una opcion que trae el mismo react para hacer cambios hacia constantes
    const [values, setValues] = useState(initialState);

    //reseetamos el formulario enviandole el valor inicial que se envio al inicio
    const reset = (newFormState = initialState) => {
        //usamos el metodo de useState para darle el valor a los datos
        setValues( newFormState );
    }


    const handleInputChange = ({ target }:any) => {

        //los input deben tener nombre para poder hacer un select de los dato\
        //
        setValues({
            //el valor que tiene los datos los devolvemos
            ...values,
            //cada input con el mismo nombre que las variables en el objeto del
            //coloca los mismos valores
            [ target.name ]: target.value
        });

    }
    //esto es lo que devuelve
    return [ values, handleInputChange, reset ];

}