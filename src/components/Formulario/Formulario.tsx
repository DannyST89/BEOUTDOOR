import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import emailjs from '@emailjs/browser';
import { useState } from 'react';  

const Result = () => {
    return (
        <p>Your Message has been succefully sent</p>
    )
}

export const Formulario = () => {  
 
    const [result, showResult] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_me15gui', 'template_2szv0zx', e.target, 'eC4OmJ2eUhxjv88cY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        showResult(true);
    };


    const onSubmit = async (e: any) => {
        e.preventDefault();
        const { name, email, message } = e.target;
 
    } 

    return (
        <div className='container mt-5'>

            <form onSubmit={sendEmail}>

                <FormGroup>
                    <Label for="fullName">
                        Full Name
                    </Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                    />
                </FormGroup>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">
                                Numero de Telefono
                            </Label>
                            <Input
                                id="numberPhone"
                                name="numberPhone"
                                placeholder="Number Phone"
                                type="text"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="mensaje">
                        Mensaje
                    </Label>
                    <Input
                        id="mensaje"
                        name="message"
                        placeholder="Message"
                    />
                </FormGroup>
                <Button >
                    Sign in
                </Button>

                {/* <div>{result ? <Result/> : null}</div> */}

                <input type="hidden" name="_next" value="http://localhost:3000/" />
                <input type="hidden" name="_cc" value="another@email.com" />
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>
    )
}
