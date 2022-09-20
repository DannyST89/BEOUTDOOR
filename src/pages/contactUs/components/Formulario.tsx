import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import "../../../styles/components/contactUs/_Formulario.scss";
import Swal from "sweetalert2";
import { ContactInfo } from "./ContactInfo";
import * as images from "../../../assets/images/Images";
import { AnimationOnScroll } from 'react-animation-on-scroll';

type message = {
  message: string;
}

export const Formulario = ({ message }: message) => {
  //botonCheck para cambiar del theme de la pagina
  const [checked, setchecked] = useState(false);

  if (checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  } //fin if checked

  const [result, showResult] = useState(false);

  const sendEmail = (e: any) => {
    emailjs
      .sendForm(
        "service_me15gui",
        "template_2szv0zx",
        e.target,
        "eC4OmJ2eUhxjv88cY"
      )
      .then(
        (result) => {
          console.log(result.text);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);

          Swal.fire({
            position: "center",
            icon: "error",
            title: "A ocurrido un error inesperado, inentelo de nuevo",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  const comprobarErrores = (target: any) => {
    const { name, telephone, email, message } = target;

    var cantidadErrores = 0;
    // setTimeout(function () {

    // }, 3000);

    if (name.value.length < 3) {
      name.className = "form-control is-invalid errorInput";
      name.setAttribute("data-bs-toggle", "tooltip");
      name.setAttribute("title", "NOMBRE MUY CORTO");
      name.placeholder = "El nombre debe ser mayor de 3 caracteres";
      name.focus();
      cantidadErrores++;
    } else {
      name.className = "form-control";
      name.removeAttribute("data-bs-toggle");
      name.removeAttribute("title");
      name.placeholder = "Your Full Name";
    }

    if (telephone.value.length < 8 || isNaN(parseInt(telephone.value))) {
      telephone.className = "form-control is-invalid errorInput";
      telephone.setAttribute("data-bs-toggle", "tooltip");
      telephone.setAttribute("title", "DEBEN SER NUMEROS");
      telephone.placeholder = "Deben ser solo numeros y mayor a 7 caracteres";
      telephone.focus();
      cantidadErrores++;
    } else {
      telephone.className = "form-control";
      telephone.removeAttribute("data-bs-toggle");
      telephone.removeAttribute("title");
      telephone.placeholder = "Your Telephone Number";
    }

    if (!email.value.includes("@") && !email.value.includes(".")) {
      email.className = "form-control is-invalid errorInput";
      email.setAttribute("data-bs-toggle", "tooltip");
      email.setAttribute("title", "DEBE SER UN CORREO ELECTRONICO VALIDO");
      email.placeholder = "El email debe ser un correo electronico valido";
      email.focus();
      cantidadErrores++;
    } else {
      email.className = "form-control";
      email.removeAttribute("data-bs-toggle");
      email.removeAttribute("title");
      email.placeholder = "Your Email";
    }

    if (cantidadErrores != 0) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { name, telephone, email, message } = e.target;

    if (!comprobarErrores(e.target)) {
      //sendEmail(e);
    }
  };



  return (
    <div className="">
      <div className={`contact-container`} id={`${checked && "darkThemeForm"}`}>
        <div className="backgroundForm">
          <div className="left-col">
            
          </div>

          <div className="right-col">
             
              <div className="theme-switch-wrapper animate__animated animate__fadeIn">
                <Label className="theme-switch" for="checkbox">
                  <Input
                    className="inputForm"
                    checked={checked}
                    onChange={() => {
                      setchecked(!checked);
                    }}
                    type="checkbox"
                    id="checkbox"
                    title="backgroundColor"
                  />
                  <div className="slider round"></div>
                </Label>
                <div className="description">Dark Mode</div>
              </div>
             


            <h1 className="h1Form animate__animated animate__fadeInDown">Contact us</h1>
            <p className="textForm animate__animated animate__fadeInDown">
              Planning to visit La Fortuna soon? Get insider tips on where to go,
              things to do and find best deals for your next adventure.
            </p>

            <form onSubmit={onSubmit} id="contact-form" method="post">
              <Label className="labelForm animate__animated animate__fadeInLeft" for="name">
                Full name
              </Label>
              <Input
                className="inputForm animate__animated animate__fadeInUp"
                rows={6}
                placeholder="Your Full Name"
                id="name"
                name="name"
                type="text"
              />

              <Label className="labelForm animate__animated animate__fadeInLeft" for="telephone">
                Telephone
              </Label>
              <Input
                className="inputForm"
                rows={6}
                placeholder="Your Telephone Number"
                id="telephone"
                name="telephone"
                type="tel"
              />

              <Label className="labelForm animate__animated animate__fadeInLeft" for="email">
                Email
              </Label>
              <Input
                className="inputForm"
                rows={6}
                placeholder="Your Email Address"
                id="email"
                name="email"
                type="email"
              />

              <Label className="labelForm animate__animated animate__fadeInLeft" for="message">
                Message
              </Label>
              <Input
                className="inputForm textAreaForm"
                rows={5}
                placeholder="Your Message"
                id="message"
                name="message"
                type="textarea"
                value={message}
                onChange={() => { }}
              />

              <button
                className="btnForm btn-flip animate__animated animate__fadeInUp"
                type="submit"
                id="submit"
                name="submit"
              >
                Send
              </button>
            </form>

            <ContactInfo />

          </div>
        </div>
      </div>
    </div>
  );
};
