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

    //----------------------------------------------

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    const [checked, setchecked] = useState(false)

    if (checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }


    //toggleSwitch != undefined && toggleSwitch.addEventListener('change', switchTheme, false);


    const name = document.getElementById('name') as HTMLElement;
    const email = document.getElementById('email') as HTMLElement;
    const message = document.getElementById('message') as HTMLElement;
    const contactForm = document.getElementById('contact-form') as HTMLElement;
    const errorElement = document.getElementById('error') as HTMLElement;
    const successMsg = document.getElementById('success-msg') as HTMLElement;
    const submitBtn = document.getElementById('submit') as HTMLButtonElement;

    const validate = (e: any) => {
        e.preventDefault();

        if (e.name.value.length < 3) {
            e.errorElement.innerHTML = 'Your name should be at least 3 characters long.';
            return false;
        }

        if (!(e.email.value.includes('.') && (e.mail.value.includes('@')))) {
            e.errorElement.innerHTML = 'Please enter a valid email address.';
            return false;
        }

        if (!emailIsValid(e.email.value)) {
            e.errorElement.innerHTML = 'Please enter a valid email address.';
            return false;
        }

        if (e.message.value.length < 15) {
            e.errorElement.innerHTML = 'Please write a longer message.';
            return false;
        }

        e.errorElement.innerHTML = '';
        e.successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.';

        e.preventDefault();
        setTimeout(function () {
            e.successMsg.innerHTML = '';
            e.document.getElementById('contact-form').reset();
        }, 6000);

        return true;

    }

    const emailIsValid = (email: any) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    //submitBtn.addEventListener('click', validate); 


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
                                required
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
                                required
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
                                required
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
                                required
                            />

                            <button type="submit" id="submit" name="submit">Send</button>
                        </form>
                        <div id="error"></div>
                        <div id="success-msg"></div>
                    </div>
                </div>
            </div>

        </div >
    )
}
