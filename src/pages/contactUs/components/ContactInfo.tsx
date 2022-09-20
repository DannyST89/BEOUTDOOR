import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

export const ContactInfo = () => {
    return (
        <div className='contactInfoPadre'>
            <h1 className='h1FormInfo animate__animated animate__fadeInDown'>Informacion De Contacto</h1>
            <div className='contactInfo'>

                <div className="contactInfo__section animate__animated animate__fadeInUp">
                    <BsWhatsapp size={'40px'} color={'black'} />
                    <p className='contactInfo__section-text'>

                        Whatsapp: <a
                            href="https://api.whatsapp.com/send?phone=50688488848&text=Hola,%20Me%20Gustaria%20Pedir%20Informacion%20Sobre%20Tu%20Negocio"
                            target={'_blank'}>
                            +506 88488848
                        </a>
                    </p>
                </div>

                <div className="contactInfo__section animate__animated animate__fadeInUp">
                    <MdOutlineEmail size={'40px'} color={'black'}/>
                    <p className='contactInfo__section-text'>
                        Email: <a href="mailto:correo@correo.com" >email@gmail.com</a>
                    </p>

                </div>

            </div>

        </div>
    )
}
