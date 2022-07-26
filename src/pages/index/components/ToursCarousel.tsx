import * as images from "../../../assets/images/Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiDollar } from "react-icons/bi";
import { Button } from "../../../components/Button/Button";
import * as icons from "../../../assets/icons/icons";
import { NavLink } from "react-router-dom";
import React from "react";

/*this sliderData is created to store the slider data them with a map we go over the array positions*/
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


export default function ToursCarousel() {
  const settings = {
    dots: true,
    infinite: true,
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
    <div className="container mt-5">
      <h1 className="tour-carousel-main-title" >Popular Tours</h1>
      <Slider {...settings}>
        {
          React.Children.toArray(
          sliderData.map((item) => (
            <div className="tour-carousel-card">
              <div className="card-top">
                <h1>{item.title}</h1>
                <img src={item.urlImage} alt={item.title} className="card-top-img"/>
                <h1>{item.priceDetails}</h1>
              </div>
              <div className="card-bottom">
                <h3 className="card-bottom-price">
                  <span className="card-bottom-price-span">{item.dollarIcon}{item.price}</span>                   
                </h3>
                <p className="card-description">{item.description}</p>               
                <a href="tour" className="btn-flip" data-back="Have Fun" data-front="se more..."></a>                
              </div>
            </div>
          ))
          )
        }
      </Slider>
    </div>
  );
}
