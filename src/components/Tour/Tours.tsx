import { useEffect, useState } from 'react'

import styles from '../../styles/components/Tours/Tours.module.scss'
import { GiBackwardTime } from 'react-icons/gi'
import { BsCardList, BsCalendar4Event, BsChatText } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { IoLogoUsd } from 'react-icons/io'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Button } from '../Button/Button'
import { dataTours } from './data'
import { BibliotecaImagenes } from './components/BibliotecaImagenes'

type tour = {
  backgroundImg?: string,
  tituloPrincipalImg?: string,
  tituloSecondarioImg?: string,
  tituloPrincipal?: string,
  textoPrincipal?: string[],
  tituloCards?: string,
  titleLeft?: string,
  textTitleLeft?: string,
  textleft?: string[],
  titleRight?: string,
  hour?: string,
  description?: string,
  time?: string,
  price?: string,
  shop?: string,
  bibliotecaImg?: string[]
}

export const Tours = () => {

  //este useEffect se usa para cargar la pagina que esta en el
  //pathname o que pueda estar ahi, pero solo cuando se carga este componente asi se hace la pagina mas reutilizable
  //revisa los valores del objeto, y si existe el nombre del objeto entra en el if y revisa el switch con el caso que sucedio para cargar el objeto hacia la pagina
  const rutaActual = window.location.pathname;
  const [tourBase, setTourBase] = useState<tour>()

  var cantidad = Object.getOwnPropertyNames(dataTours).length
  useEffect(() => {
    for (let i = 0; i < cantidad; i++) {
      if (rutaActual.includes(Object.getOwnPropertyNames(dataTours)[i])) {
        switch (Object.getOwnPropertyNames(dataTours)[i]) {
          case 'RioCeleste': setTourBase(dataTours.RioCeleste);
            break;
          case 'ArenalVolcano': setTourBase(dataTours.ArenalVolcano);
            break;
          case 'FortunaWaterfall': setTourBase(dataTours.FortunaWaterfall);
            break;
          case 'HangingBridges': setTourBase(dataTours.HangingBridges);
            break;
          case 'CombinationTours': setTourBase(dataTours.CombinationTours);
            break;
          case 'Rafting': setTourBase(dataTours.Rafting);
            break;
          case 'Safari': setTourBase(dataTours.Safari);
            break; 
        }
      }
    }

  }, [rutaActual, tourBase])

  const arrayRight = [tourBase?.time, tourBase?.description, tourBase?.hour, tourBase?.price, tourBase?.shop]
  const iconos = [
    <GiBackwardTime />,
    <BsCardList />,
    <BiTimeFive />,
    <IoLogoUsd />,
    <RiShoppingBasketLine />,
  ]

  return (
    (tourBase !== undefined) ?
      (
        <div className={`${styles.padre} wow animate__animated animate__fadeIn`}>

          <div
            className={styles.sample_header}
            style={{ 'backgroundImage': `url(${tourBase?.backgroundImg})` }}
          >
            <div className={styles.sample_header_section}>
              <div className={styles.sample_header_text}>
                <h1 className='wow animate__animated animate__fadeIn'>{tourBase?.tituloPrincipalImg}</h1>
                <h2 className='wow animate__animated animate__fadeIn'>{tourBase?.tituloSecondarioImg}</h2>
              </div>
            </div>
          </div>

          <div className={styles.sample_section_wrap}>
            <div className={`${styles.sample_section} wow animate__animated animate__fadeInRight`}>

              <h1>{tourBase?.tituloPrincipal}</h1>
              {
                tourBase?.textoPrincipal != undefined
                &&
                tourBase?.textoPrincipal.map(item => (
                  <p key={`${item.split(' ').length}.${item.length}`}
                  >{item}</p>
                ))
              }

            </div>

            <div className={styles.sectionInfo}>
              <h1>{tourBase?.tituloCards}</h1>
              {/* section left */}
              <div className={styles.sectionInfo__principal}>
                <div className={`${styles.sectionInfo__principal_left}`}>

                  <div className={`${styles.headerCard}`}>
                    <BsChatText />
                    {tourBase?.titleLeft}
                  </div>

                  <div className={`${styles.textCard}  wow animate__animated animate__fadeInLeft`}>
                    <h1>{tourBase?.textTitleLeft}</h1>

                    {
                      tourBase?.textleft != undefined
                      &&
                      tourBase?.textleft.map(item => (
                        <p
                          key={`${item.split(' ').length}.${item.length}`}
                        >{item}</p>
                      ))
                    }
                  </div>

                </div>

                {/* seccion de la zona derecha */}
                <div className={styles.sectionInfo__principal_right}>

                  <div className={`${styles.headerCard}`}>
                    <AiOutlineInfoCircle />
                    {tourBase?.titleRight}
                  </div>

                  {
                    iconos.map((item, Index) => {

                      return (
                        <div
                          key={Index}
                          className={`${styles.textCard} ${styles.division} wow animate__animated animate__fadeInRight`}>
                          {item}
                          <p>{arrayRight[Index]}</p>
                        </div>
                      )
                    })
                  }
                  <div className={`${styles.textCard} ${styles.division} wow animate__animated animate__fadeInRight`}>
                    <BsCalendar4Event />
                    <Button className={styles.buttonCard} redirection={`ContactUs/${tourBase?.tituloPrincipalImg}`} text="Contact" scrollTop={true} />
                  </div>
                </div>
              </div>
            </div>{/*Fin de las secciones*/}

            {
              tourBase?.bibliotecaImg != undefined ?
                <BibliotecaImagenes img={tourBase?.bibliotecaImg != undefined ? tourBase?.bibliotecaImg : []} />
                : undefined
            }
          </div>
        </div>)
      :
      <div></div> 
  )    
}