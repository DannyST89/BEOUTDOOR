import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import "../../../styles/components/index/_ToursCarousel.scss";
import React from "react";
import "../../../styles/components/index/_ToursCarousel.scss";

import { sliderData } from "../data/data"; 

export default function ToursCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    //focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 6000,
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
      <h2  className=" wow animate__animated animate__fadeIn">Popular Tours</h2>
      <p>Choose what you are the most passionate about and be part of it,<span>ARE YOU READY?</span></p>

      <Slider {...settings}>
        {React.Children.toArray(
          sliderData.map((item) => {

            var direction = '';

            if(item.title.includes('Safari')){
              direction = 'Safari'
            }else if(item.title.includes('Tubing')){
              direction = 'CombinationTours'
            }else{
              direction = item.title.replace(/\s+/g, '')
            }
            return (
            <div className=" wow animate__animated animate__fadeIn">
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
                      <a
                        href={direction} className="btn__carousel__tours" 
                      >
                        READ MORE
                        </a> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )})
        )}
      </Slider>
    </div>
  );
}
