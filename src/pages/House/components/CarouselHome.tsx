import * as images from "../../../assets/images/Images";
import Slider from "react-slick";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import DescriptionCard from "./DescriptionCard";

const sliderData = [
    images.house1,
    //images.house2,
    //images.house3,
    images.house4,
    //images.house5,
    images.house6,
    images.house7,
    images.house8,
    images.house9,
    images.house10,
];

export const CarouselHome = () => {


    const [urlImage, setUrlImage] = useState(sliderData[0]);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const openModal = (url: string) => {
        setUrlImage(url);
        toggle();
    }

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };


    return (
        <div className="containerHouse">
            {/* <h2 className="containerHouse__h2">Airbnb</h2> */}
            <div className="carouselHouse">
                <div onClick={() => { openModal(urlImage) }} className="carouselHouse__image">
                    <img className="carouselHouse__image-img animate__animated animate__fadeIn" src={urlImage} alt="img" />
                </div>
            </div>

            <div className="">
                <Slider {...settings} className='carouselHouseSlider'>
                    {
                        React.Children.toArray(
                            sliderData.map((item) => (
                                <div className="">
                                    <div
                                        onClick={() => { setUrlImage(item) }} className="carouselHouseSlider__imageSmall">
                                        <img className="carouselHouseSlider__imageSmall-img" src={item} alt='Image House' />
                                    </div>
                                </div>
                            ))
                        )
                    }
                </Slider>
            </div>

            {/* modal para el uso de la galeria para verla la imagen mas completa */}
            <Modal size="xl" centered isOpen={modal} toggle={toggle} className="modal-contentGallery">
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <div className="modalImage">
                        <img src={urlImage} alt="" />
                    </div>
                </ModalBody>
            </Modal>

            {/* aqui se coloca para cuando se haga el responsive aparezca
            la informacion importante antes que el aside 
            tambien es un complemtento de este componentente*/}
            <DescriptionCard />


        </div>
    )
}
