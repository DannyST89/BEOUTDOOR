import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import {
  galleryLizard,
  galleryAll,
  gallerySnake,
  navGallery,
} from "../data/data";
import { LoadImages } from "./LoadImages";

export const Gallery = () => {
  const [navImages, setNavImages] = useState(0);

  const [active, setActive] = useState("All");

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [url, setUrl] = useState("");

  const openModal = (url: string) => {
    setUrl(url);
    toggle();
  };

  //Aqui se meten el arreglo de imagenes metiendole el metodo para que
  //se pueda abrir el modal, se hace aqui porque aqui se encuentra el modal,
  //y no en el componente LoadImages, cuando se envia la data no se puede colocar
  //porque es informacion extra que no se puede manejar desde la data
  for (let i = 0; i < galleryAll.length; i++) {
    galleryAll[i].openModal = openModal;
  }
  for (let i = 0; i < gallerySnake.length; i++) {
    gallerySnake[i].openModal = openModal;
  }
  for (let i = 0; i < galleryLizard.length; i++) {
    galleryLizard[i].openModal = openModal;
  }

  return (
    <div>
      <div  className="container gallery__info">
        <h1 className="tituloGallery">La Fortuna's Biodiversity</h1>
        <p>
        La Fortuna is the place where mother nature lets you see the children of the forest as monkeys, frogs      
        sloths, iguanas, lizards, alligators and beautiful birds that offer a 
        melody of great satisfaction to the heart
        </p>
      </div>
      {/* Navegacion para la seccion de galeria */}
      <nav className="container navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav navbarGallery">
              {navGallery.map((item, index) => (
                <li
                  key={item}
                  className="nav-item"
                  onClick={() => setNavImages(index)}
                >
                  <a
                    className={
                      active === item ? "aGallery nav-link" : "nav-link"
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* seccion de las imagenes carga que se selecciono de la navegacion */}
      <section>
        <div className="backgroundGallery">
          {navImages === 0 ? <LoadImages {...galleryAll} /> : null}
          {navImages === 1 ? <LoadImages {...gallerySnake} /> : null}
          {navImages === 2 ? <LoadImages {...galleryLizard} /> : null}
        </div>
      </section>

      {/* modal para el uso de la galeria para verla la imagen mas completa */}
      <Modal
        size="xl"
        centered
        isOpen={modal}
        toggle={toggle}
        className="modal-contentGallery"
      >
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <div className="modalImage">
            <img src={url} alt="" />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};
