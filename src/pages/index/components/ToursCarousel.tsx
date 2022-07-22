import * as images from "../../../assets/images/Images";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type sliderData = {
    urlImaga: images.volcanareanl;
};
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
        <h2>Pause On Hover</h2>
        <Slider {...settings}>
          <div>
            <h3>
              <img src={images.rana} alt="" />
            </h3>
            <p>Rio Celeste Hike</p>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p>Arenal Volcano Hike</p>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p>La Fortuna WaterFall</p>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p>Hanging Bridges</p>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p>Cobination Tour</p>
            <button>See more...</button>
          </div>
          <div>
            <h3>
              <img src={images.volcanArenal01} alt="" />
            </h3>
            <p>hello world</p>
            <button>See more...</button>
          </div>
        </Slider>
      </div>
    );
  }
}
