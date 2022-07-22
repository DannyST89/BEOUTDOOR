import * as images from "../../../assets/images/Images";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ToursCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <div className="container">
        <div className="mainText">
          <h1>Your are not sure what to do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non
            atque adipisci est, recusandae aperiam, ullam minima quos nostrum
            animi voluptas sequi. At repellendus fuga reiciendis accusantium,
            dolor suscipit repellat?
          </p>
        </div>
        <Slider {...settings}>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p className="slider-text">Rio Celeste Hike</p>
            <span>1</span>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.rana} alt="" />
            </h3>
            <p className="slider-text">Arenal Volcano Hike</p>
            <span>1</span>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p className="slider-text">La Fortuna WaterFall</p>
            <span>1</span>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p className="slider-text">Hanging Bridges</p>
            <span>1</span>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p className="slider-text">Cobination Tour</p>
            <span>1</span>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p className="slider-text">hello world</p>
            <span>1</span>
            <button>See more...</button>
          </div>
        </Slider>
      </div>
    );
  }
}
