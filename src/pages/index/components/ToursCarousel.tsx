import * as images from "../../../assets/images/Images";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { Button } from "../../../components/Button/Button";
const sliderData = [
  {
    id: 1,
    title: "Volcan Arenal Hike",
    price: "$100",
    urlImage: images.rioCeleste01,
    description: "detalles",
  },
  {
    id: 1,
    title: "Rio Celeste Hike",
    price: "$70",
    urlImage: images.rioCeleste01,
    description: "detalles",
  },
  {
    id: 1,
    title: "Hanging Bridges",
    price: "$50",
    urlImage: images.rioCeleste01,
    description: "detalles",
  },
  {
    id: 1,
    title: "Fortuna Waterfall",
    price: "$80",
    urlImage: images.rioCeleste01,
    description: "detalles",
  },
];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default function ToursCarousel() {

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="container-carousel">
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div className="tour-carousel-card">
              <div className="card-top">
                <img src={item.urlImage} alt={item.title} />
                <h2>{item.title}</h2>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <p className="card-description">{item.description}</p>
                <Button
                  text="See more.."
                  redirection=""
                  className="tour-carousel-bottom"
                ></Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

