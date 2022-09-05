import * as images from "../../../assets/images/Images";
import * as icons from "../../../assets/icons/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiDollar, BiMap, BiTimeFive } from "react-icons/bi";
import React from "react";
import styles from "../../../styles/components/index/_ToursCarousel.module.scss";
import { Button } from "../../../components/Button/Button";
/*this sliderData is created to store the slider data them with a map we go over the array positions*/
const sliderData = [
  {
    id: 1,
    title: "Volcan Arenal Hike",
    price: "100",
    dollarIcon: <BiDollar style={{ color: "#97999B", fontSize: "1.5rem" }} />,
    urlImage: images.volcanArenal01,
    hoursIcon: <BiTimeFive style={{ color: "#97999B", fontSize: "1.5rem" }} />,
    hours: " 4 hours",
    placeIcon: <BiMap style={{ color: "#726F6F", fontSize: "1.5rem" }}/>,
    place: "La Fortuna"
  },
  {
    id: 2,
    title: "Rio Celeste Hike",
    price: "100",
    dollarIcon: <BiDollar style={{ color: "#97999B", fontSize: "1.5rem" }} />,
    urlImage: images.rioCeleste02,
    hoursIcon: <BiTimeFive style={{ color: "#97999B", fontSize:"1.5rem" }} />,
    hours: " 8 hours",
    placeIcon: <BiMap style={{ color: "#97999B", fontSize: "1.5rem" }}/>,
    place: "Katira"
  },
  {
    id: 3,
    title: "Hanging Bridges",
    price: "80",
    dollarIcon: <BiDollar style={{ color: "#97999B", fontSize:"1.5rem" }} />,
    urlImage: images.hangingBridges,
    hoursIcon: <BiTimeFive style={{ color: "#97999B", fontSize: "1.5rem" }} />,
    hours: " 4 hours",
    placeIcon: <BiMap style={{ color: "#97999B", fontSize: "1.5rem" }}/>,
    place: "La Fortuna"
  },
  {
    id: 4,
    title: "Fortuna Waterfall",
    price: "70",
    dollarIcon: <BiDollar style={{ color: "#000", fontSize: "1.5rem"}} />,
    urlImage: images.rioCeleste01,
    hoursIcon: <BiTimeFive style={{ color: "#000", fontSize: "1.5rem" }} />,
    hours: " 4 hours",
    placeIcon: <BiMap style={{ color: "#000", fontSize: "1.5rem" }}/>,
    place: "La Fortuna"
  },
  {
    id: 5,
    title: "Safari Float and Wild Life Arenal",
    price: "80",
    dollarIcon: <BiDollar style={{ color: "#000", fontSize: "1.5rem" }} />,
    urlImage: images.safariFloatWildLifeArenal,
    hoursIcon: <BiTimeFive style={{ color: "#000", fontSize: "1.5rem" }} />,
    hours: " 5 hours",
    placeIcon: <BiMap style={{ color: "#000", fontSize: "1.5rem" }}/>,
    place: "La Fortuna"
  },
  {
    id: 6,
    title: "Rafting",
    price: "80",
    dollarIcon: <BiDollar style={{color: "#000", fontSize: "1.5rem"}} />,
    urlImage: images.rafting2,
    hoursIcon: <BiTimeFive style={{ color: "#000", fontSize: "1.5rem" }} />,
    hours: " 6 hours",
    placeIcon: <BiMap style={{ color: "#000", fontSize: "1.5rem" }}/>,
    place: "La Fortuna"
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
    autoplaySpeed: 2000,
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
        breakpoint: 700,
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
    <div className={styles["slide-container"]}>
      <Slider {...settings} className={styles.sliderSlick}>
        {React.Children.toArray(
          sliderData.map((item) => (
            <div>
              <div className={styles["tour-carousel-card-padre"]}>

                <div className={styles["tour-carousel-card"]}>

                  <div className={styles["img-container"]}>
                    <img src={item.urlImage} alt="" />
                  </div>

                  <div className={styles["details-container"]}>
                    <div className={styles["title"]}>
                      <h2>{item.title}</h2>
                    </div>
                    <div className={styles["details-info"]}>
                      <span className={styles["details-price"]}>
                      From {item.dollarIcon}
                        {item.price}
                      </span>                    
                      <span className={styles["details-hour"]}>
                        {item.hoursIcon}
                        {item.hours}
                      </span>
                      <span className={styles["details-place"]}>
                        {item.placeIcon}
                        {item.place}
                      </span>
                    </div>
                    <Button
                      redirection={""}
                      text={"See More..."}
                      className="carousel-button"
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
