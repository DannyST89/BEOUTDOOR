
import { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import styles from '../../../styles/components/Tours/_BibliotecaImg.module.scss'

type images = {
    img: string[]
}

export const BibliotecaImagenes = ({ img }: images) => {

    //console.log(img);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [url, setUrl] = useState("")

    const openModal = (url: string) => {
        setUrl(url);
        toggle();
    }

    return (
        <div>
            <h1 className={styles.titulo}>Gallery Images</h1>
            <div className={styles.galeriaTours}>
                {
                    img.map((item,index) => (
                        <div key={index} className={styles.cardImage}>
                            <img onClick={() => { openModal(item) }} src={item} />
                        </div>
                    ))
                }
            </div>

            {/* modal para el uso de la galeria para verla la imagen mas completa */}
            <Modal size="xl" centered isOpen={modal} toggle={toggle} className="modal-contentGallery">
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <div className="modalImage">
                        <img src={url} alt="" />
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
