import * as images from "../../../assets/images/Images";
import * as icons from "../../../assets/icons/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiDollar, BiMap, BiTimeFive } from "react-icons/bi";
import React from "react";
import  "../../../styles/components/index/_ToursCarousel.scss";
import { Button } from "../../../components/Button/Button";
/*this sliderData is created to store the slider data them with a map we go over the array positions*/
const sliderData = [
  {
    id: 1,
    title: "Volcan Arenal Hike",
    price: "100",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.volcanArenal01,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 4 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }}/>,
    place: " La Fortuna"
  },
  {
    id: 2,
    title: "Rio Celeste Hike",
    price: "100",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.rioCeleste02,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize:"1.5rem" }} />,
    hours: " 8 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }}/>,
    place: " Katira"
  },
  {
    id: 3,
    title: "Hanging Bridges",
    price: "80",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize:"1.5rem" }} />,
    urlImage: images.hangingBridges,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 4 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }}/>,
    place: " La Fortuna"
  },
  {
    id: 4,
    title: "Fortuna Waterfall",
    price: "70",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem"}} />,
    urlImage: images.rioCeleste01,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 4 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }}/>,
    place: " La Fortuna"
  },
  {
    id: 5,
    title: "Safari Float and Wild Life Arenal",
    price: "80",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    urlImage: images.safariFloatWildLifeArenal,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 5 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }}/>,
    place: " La Fortuna"
  },
  {
    id: 6,
    title: "Rafting",
    price: "80",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{color: "#FEC01B", fontSize: "1.5rem"}} />,
    urlImage: images.rafting2,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 6 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }}/>,
    place: " La Fortuna"
  }, {
    id: 6,
    title: "Tubing Rio Celeste",
    price: "80",
    info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sint",
    dollarIcon: <BiDollar style={{color: "#FEC01B", fontSize: "1.5rem"}} />,
    urlImage: images.tubing3,
    hoursIcon: <BiTimeFive style={{ color: "#FEC01B", fontSize: "1.5rem" }} />,
    hours: " 6 hours",
    placeIcon: <BiMap style={{ color: "#FEC01B", fontSize: "1.5rem" }}/>,
    place: " Rio Celeste"
  }
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
                    <Button
                      redirection={""}
                      text={"See More..."}
                      className="carousel-button"
                      height="2.5rem"
                      width="8rem"
                    />
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
