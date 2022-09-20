import {
    house1,
    house4,
    house6,
    house7,
    house8,
    house9,
    house10,
} from "../../../assets/images/Images";
import Slider from "react-slick";
import React, { useState } from "react";
import DescriptionCard from "./DescriptionCard";
import { ModalImages } from "../../../components/Modal/ModalImages";

const sliderData = [
    house1,
    house4, 
    house6,
    house7,
    house8,
    house9,
    house10,
];

export const CarouselHome = () => {


    const [url, setUrl] = useState('')

    const [urlImage, setUrlImage] = useState(sliderData[0]);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const openModal = (url: string) => {
        setUrlImage(url);
        setUrl(url)
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
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                },
            },
        ],
    };


    return (
        <div className="containerHouse">
            {/* <h2 className="containerHouse__h2">Airbnb</h2> */}
            <div className="carouselHouse">
                <div onClick={() => { openModal(urlImage) }} className="carouselHouse__image  wow animate__animated animate__fadeIn">
                    <img className="carouselHouse__image-img animate__animated animate__fadeIn" src={urlImage} alt="img" />
                </div>
            </div>

            <div className="">
                <Slider {...settings} className='carouselHouseSlider  wow animate__animated animate__fadeIn'>
                    {
                        React.Children.toArray(
                            sliderData.map((item) => (
                                <div className="carouselSliderPadre">
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
            <ModalImages urlImage={url} modalActive={modal} nombre={url} />

            {/* aqui se coloca para cuando se haga el responsive aparezca
            la informacion importante antes que el aside 
            tambien es un complemtento de este componentente*/}
            <DescriptionCard />


        </div>
    )
}
