import { useEffect, useState, useMemo } from 'react'

import styles from '../../styles/components/Tours/Tours.module.scss'
import { dataTours } from './data'
import { BibliotecaImagenes } from './components/BibliotecaImagenes'
import { TextCards } from './components/TextCards'

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
          case 'RioCeleste': setTourBase({ ...dataTours.RioCeleste });
            break;
          case 'ArenalVolcano': setTourBase({ ...dataTours.ArenalVolcano });
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

  }, [rutaActual])

  return (
    <div className={`${styles.padre}`}>

      {/* imagen principal con titulos */}
      <div className={styles.Padre_sample_header} >
        <div
          className={styles.sample_header}
          //style={{ 'backgroundImage': `url(${tourBase?.backgroundImg})` }}
        >
          <img src={`${tourBase?.backgroundImg}`} alt={tourBase?.tituloPrincipal} />
          <div className={styles.sample_header_section}>
            <div className={styles.sample_header_text}>
              <h1 className='wow animate__animated animate__fadeIn'>{tourBase?.tituloPrincipalImg}</h1>
              <h2 className='wow animate__animated animate__fadeIn'>{tourBase?.tituloSecondarioImg}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* fin imagen principal */}

      {/* base central de la informacion */}
      <div className={styles.sample_section_wrap}>
        <div className={`${styles.sample_section}  wow animate__animated animate__fadeInRight`}>

          <h1>{tourBase?.tituloPrincipal}</h1>
          {
            tourBase?.textoPrincipal != undefined
            &&
            tourBase?.textoPrincipal.map((item,index) => (
              <p key={`${item.split(' ').length}.${item.length}${index}`}
              >{item}</p>
            ))
          }

        </div>

        
        <TextCards  {...tourBase} />   
        
        <BibliotecaImagenes img={tourBase?.bibliotecaImg != undefined ? tourBase?.bibliotecaImg : []} />
        
            
      </div>{/* fin de base de informacion central */}

    </div>
  )
}