
import { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import styles from '../../../styles/components/Tours/_BibliotecaImg.module.scss'
import { ModalImages } from '../../Modal/ModalImages';

type images = {
    img: string[]
}

export const BibliotecaImagenes = ({ img }: images) => {
  
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [url, setUrl] = useState("")

    const openModal = (url: string) => {
        setUrl(url);
        toggle();
    }

    const animate = ["animate__fadeInDown", "animate__fadeInLeft","animate__fadeInRight","animate__fadeInUp","animate__fadeInBottomLeft","animate__fadeInBottomRight"]; 

    return (
        <div>
            <h1 className={styles.titulo}>Gallery Images</h1>
            <div className={styles.galeriaTours}>
                {
                    img.map((item,index) => (
                        <div key={index} className={`${styles.cardImage} animate__animated ${animate[index]}`}>
                            <img onClick={() => { openModal(item) }} src={item} />
                        </div>
                    ))
                }
            </div>

            {/* modal para el uso de la galeria para verla la imagen mas completa */}
           <ModalImages urlImage={url} modalActive={modal}/>
        </div>
    )
}
