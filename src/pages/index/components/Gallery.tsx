import { useState } from "react";
import { ModalImages } from "../../../components/Modal/ModalImages";
import {
  galleryAll,
  galleryMamals,
  galleryFrogs,
  galleryBirds,
  gallerySnakes,
  galleryInsects,
  navGallery,
} from "../data/data";
import { LoadImages } from "./LoadImages";
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
  //esta informacion se usa con el type de la data
  for (let i = 0; i < galleryAll.length; i++) {
    galleryAll[i].openModal = openModal;
  }
  for (let i = 0; i < galleryMamals.length; i++) {
    galleryMamals[i].openModal = openModal;
  }
  for (let i = 0; i < galleryFrogs.length; i++) {
    galleryFrogs[i].openModal = openModal;
  }
  for (let i = 0; i < galleryBirds.length; i++) {
    galleryBirds[i].openModal = openModal;
  }
  for (let i = 0; i < gallerySnakes.length; i++) {
    gallerySnakes[i].openModal = openModal;
  }
  for (let i = 0; i < galleryInsects.length; i++) {
    galleryInsects[i].openModal = openModal;
  }

  return (
    <div>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
      <div  className="container gallery__info">
        <h2 className="tituloGallery">La Fortuna's Biodiversity</h2>
        <p>
        La Fortuna is the place where mother nature lets you see the children of the forest, including monkeys, frogs,      
        sloths, iguanas, lizards, alligators and beautiful birds that offer a 
        melody of great satisfaction to the heart
        </p>
      </div>
      </AnimationOnScroll>
      {/* Navegacion para la seccion de galeria */}
      <nav className="containerNavBarGallery navbar navbar-expand-lg">
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
          {navImages === 1 ? <LoadImages {...galleryMamals} /> : null}
          {navImages === 2 ? <LoadImages {...galleryFrogs} /> : null}
          {navImages === 3 ? <LoadImages {...galleryBirds} /> : null}
          {navImages === 4 ? <LoadImages {...gallerySnakes} /> : null}
          {navImages === 5 ? <LoadImages {...galleryInsects} /> : null}
        </div>
      </section>

      <ModalImages urlImage={url} modalActive={modal} nombre={active}/>
 
    </div>
  );
};
