import * as images from "../../../assets/images/Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiDollar, BiMap, BiTimeFive } from "react-icons/bi";
import "../../../styles/components/index/_ToursCarousel.scss";
import React from "react";
import  "../../../styles/components/index/_ToursCarousel.scss"; 
import { BsArrowRightShort } from "react-icons/bs";
/*this sliderData is created to store the slider data them with a map we go over the array positions*/
const sliderData = [
  {
    id: 1,
    title: "Volcan Arenal Hike",
    price: " 65",
    info: "You want to learn about volcanoes, this tour has it all",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.volcanArenal01,
	hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 4 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    place: " La Fortuna",
  },
  {
    id: 2,
    title: "Rio Celeste Hike",
    price: " 90",
    info: "Celestial waterfall and magic ligth blue river, it is a walk for those who love good walking",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.rioCeleste02,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 8 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    place: " Katira",
  },
  {
    id: 3,
    title: "Hanging Bridges",
    price: " 80",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.hangingBridges,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 4 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    place: " La Fortuna",
  },
  {
    id: 4,
    title: "Fortuna Waterfall",
    price: " 40",
    info: "Get to know one of the most spectacular waterfalls in the territory of Costa Rica",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.catarata_fortuna,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 3 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    place: " La Fortuna",
  },
  {
    id: 5,
    title: "Safari Float and Wild Life Arenal",
    price: " 80",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.safariFloatWildLifeArenal,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 5 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    place: " La Fortuna",
  },
  {
    id: 6,
    title: "Rafting",
    price: " 80",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.rafting2,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 6 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    place: " La Fortuna",
  },
  {
    id: 6,
    title: "Tubing Rio Celeste",
    price: " 130",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.tubing3,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 6 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    place: " Katira",
  },
];

export default function ToursCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <div className="slide-container">
      <Slider {...settings}>
        {React.Children.toArray(
          sliderData.map((item) => (
            <div>
              <div className="tour-carousel-card-padre">
                <div className="tour-carousel-card">
                  <div className="img-container">
                    <img src={item.urlImage} alt="" />
                  </div>

                  <div className="details-container">
                    <div className="title">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="details-info">
                      <span className="details-price">
                        {item.dollarIcon}
                        {item.price}
                      </span>
                      <span className="details-hour">
                        {item.hoursIcon}
                        {item.hours}
                      </span>
                      <span className="details-place">
                        {item.placeIcon}
                        {item.place}
                      </span>
                    </div>
                    <span className="details-about">{item.info}</span>
                    <div className="container__btn">
                      <a className="btn__carousel__tours">
                        READ MORE <span>{<BsArrowRightShort style={{ color: "#FEC01B", fontSize: "1.5rem" }} />}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}
