import * as images from "../../../assets/images/Images";
import Slider from "react-slick";
import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";


const sliderData = [
    {
        id: 1,
        title: "Volcan Arenal Hike",
        priceDetails: "Price per person",
        price: "100",
        dollarIcon: (
            <BiDollar style={{ color: "#FFFFFF", fontSize: "1rem" }} />
        ),
        urlImage: images.volcanArenal01,
        description: "description for the arenal volcan hike very short",
    },
    {
        id: 2,
        title: "Rio Celeste Hike",
        priceDetails: "Price per person",
        price: "100",
        dollarIcon: (
            <BiDollar style={{ color: "#FFFFFF", fontSize: "1rem" }} />
        ),
        urlImage: images.rioCeleste02,
        description: "description for the arenal volcan hike very short",
    },
    {
        id: 3,
        title: "Hanging Bridges",
        priceDetails: "Price per person",
        price: "80",
        dollarIcon: (
            <BiDollar style={{ color: "#FFFFFF", fontSize: "1rem" }} />
        ),
        urlImage: images.hangingBridges,
        description: "description for the arenal volcan hike very short",
    },
    {
        id: 4,
        title: "Fortuna Waterfall",
        priceDetails: "Price per person",
        price: "70",
        dollarIcon: (
            <BiDollar style={{ color: "#FFFFFF", fontSize: "1rem" }} />
        ),
        urlImage: images.rioCeleste01,
        description: "description for the arenal volcan hike very short",
    },
    {
        id: 5,
        title: "Safari Float and Wild Life Arenal",
        priceDetails: "Price per person",
        price: "80",
        dollarIcon: (
            <BiDollar style={{ color: "#FFFFFF", fontSize: "1rem" }} />
        ),
        urlImage: images.safariFloatWildLifeArenal,
        description: "description for the arenal volcan hike very short",
    },
    {
        id: 6,
        title: "Rafting",
        priceDetails: "Price per person",
        price: "80",
        dollarIcon: (
            <BiDollar style={{ color: "#FFFFFF", fontSize: "1rem" }} />
        ),
        urlImage: images.rafting2,
        description: "description for the arenal volcan hike very short",
    },
];

export const CarouselHome = () => {


    const [urlImage, setUrlImage] = useState(sliderData[0].urlImage);

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
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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

                <Slider {...settings} className='carouselHouse'>
                    {
                        React.Children.toArray(
                            sliderData.map((item) => (
                                <div className="">
                                    <div onClick={() => { setUrlImage(item.urlImage) }} className="carouselHouse__imageSmall">
                                        <img className="carouselHouse__imageSmall-img " src={item.urlImage} alt={item.title} />
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
