import * as images from "../../../assets/images/Images";
import Slider from "react-slick";
import React, { useState } from "react";

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

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
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
            <h2 className="containerHouse__h2">Airbnb</h2>
            <div className="carouselHouse">
                <div className="carouselHouse__image">
                    <img className="carouselHouse__image-img animate__animated animate__fadeIn" src={urlImage} alt="img" />
                </div>
            </div>

            <div className="">
                <Slider {...settings} className='carouselHouseSlider'>
                    {
                        React.Children.toArray(
                            sliderData.map((item) => (
                                <div className="">
                                    <div onClick={() => { setUrlImage(item) }} className="carouselHouse__imageSmall">
                                        <img className="carouselHouse__imageSmall-img " src={item} alt='Image House' />
                                    </div>
                                </div>
                            ))
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}
