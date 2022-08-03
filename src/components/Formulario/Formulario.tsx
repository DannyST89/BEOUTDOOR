import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import Swal from 'sweetalert2'

type propsMessage = {
    error: string[]
}

const Result = () => {

    const messageSent = Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Message sent successfully',
        showConfirmButton: false,
        timer: 1500
    })

    return (
        { messageSent }
    )
}

export const Formulario = () => {

    const [messageError, setMessageError] = useState<string[]>([""]);

    //botonCheck para cambiar del theme de la pagina
    const [checked, setchecked] = useState(false)

    if (checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }//fin if checked



    const [result, showResult] = useState(false);

    const [messageSend, setMessageSend] = useState(false)

    const sendEmail = (e: any) => {

        emailjs.sendForm('service_me15gui', 'template_2szv0zx', e.target, 'eC4OmJ2eUhxjv88cY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        showResult(true);
    };

    const comprobarErrores = (target: any) => {

        const { name, telephone, email, message } = target;

        // setTimeout(function () {

        // }, 3000);

        if (name.value.length < 3) {
            name.className = "form-control is-invalid errorInput";
            name.setAttribute('data-bs-toggle', 'tooltip');
            name.setAttribute('title', "NOMBRE MUY CORTO");
            name.placeholder = "El nombre debe ser mayor de 3 caracteres";
            name.focus();
        } else {
            name.className = "form-control";
            name.removeAttribute('data-bs-toggle');
            name.removeAttribute('title');
            name.placeholder = "Your Full Name"
        }

        if (telephone.value.length < 8 || isNaN(parseInt(telephone.value))) {
            telephone.className = "form-control is-invalid errorInput";
            telephone.setAttribute('data-bs-toggle', 'tooltip');
            telephone.setAttribute('title', "DEBEN SER NUMEROS");
            telephone.placeholder = "Deben ser solo numeros y mayor a 7 caracteres";
            telephone.focus();
        } else {
            telephone.className = "form-control";
            telephone.removeAttribute('data-bs-toggle');
            telephone.removeAttribute('title');
            telephone.placeholder = "Your Telephone Number"
            

            //datos de prueba
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Message sent successfully',
                showConfirmButton: false,
                timer: 1500
            });
            target.reset();

        }

        if (!email.value.includes("@") && !email.value.includes(".")) {
            email.className = "form-control is-invalid errorInput";
            email.setAttribute('data-bs-toggle', 'tooltip');
            email.setAttribute('title', "DEBE SER UN CORREO ELECTRONICO VALIDO");
            email.placeholder = "El email debe ser un correo electronico valido";
            email.focus();
        } else {
            email.className = "form-control";
            email.removeAttribute('data-bs-toggle');
            email.removeAttribute('title');
            email.placeholder = "Your Email"  
        }

        
    }


    const onSubmit = async (e: any) => {
        e.preventDefault();
        const { name, telephone, email, message } = e.target;

        comprobarErrores(e.target); 

         
    }



    return (
        <div className=''>


            <div className={`contact-container`} id={`${checked && "darkThemeForm"}`}>
                <div className='backgroundForm'>

                    <div className="left-col">
                        <img className="logo" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png" />
                    </div>


                    <div className="right-col">
                        <div className="theme-switch-wrapper">
                            <Label className="theme-switch" for="checkbox">
                                <Input checked={checked} onChange={() => { setchecked(!checked) }} type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </Label>
                            <div className="description">Dark Mode</div>
                        </div>

                        <h1>Contact us</h1>
                        <p>Planning to visit Indonesia soon? Get insider tips on where to go, things to do and find best deals for your next adventure.</p>

                        <form onSubmit={onSubmit} id="contact-form" method="post">

                            <Label for="name">
                                Full name
                            </Label>
                            <Input
                                rows={6}
                                placeholder="Your Full Name"
                                id="name"
                                name="name"
                                type="text"
                            />

                            <Label for="telephone">
                                Telephone
                            </Label>
                            <Input
                                rows={6}
                                placeholder="Your Telephone Number"
                                id="telephone"
                                name="telephone"
                                type="tel"
                            />

                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                rows={6}
                                placeholder="Your Email Address"
                                id="email"
                                name="email"
                                type="email"
                            />

                            <Label for="message">
                                Message
                            </Label>
                            <Input
                                rows={5}
                                placeholder="Your Message"
                                id="message"
                                name="message"
                                type="textarea"
                            />

                            <button className='btn-flip' type="submit" id="submit" name="submit">Send</button>
                        </form> 
                    </div>
                </div>
            </div>
        </div >
    )
}
