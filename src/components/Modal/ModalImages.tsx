import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

type dataImage = {
    urlImage: string;
    modalActive: boolean;
    nombre: string
}
export const ModalImages = ({ urlImage,modalActive,nombre }: dataImage) => { 

    const [modal, setModal] = useState(modalActive);

    const toggle = () => setModal(!modal);

    useEffect(() => {

        if (urlImage != '') {
            setModal(true);
        }
 
    }, [urlImage,modalActive])


    return (
        <>
            {/* modal para el uso de la galeria para verla la imagen mas completa */}
            <Modal
                size="xl"
                centered
                isOpen={modal}
                toggle={toggle}
                className="modal-contentGallery"
            >
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody >
                    <div onClick={() => { setModal(false) }} className="modalImage">
                        <img src={urlImage} alt={nombre} />
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}
