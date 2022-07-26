import * as images from "../../../assets/images/Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiDollar } from "react-icons/bi";
import { Button } from "../../../components/Button/Button";
import * as icons from "../../../assets/icons/icons";
import { NavLink } from "react-router-dom";

/*this sliderData is created to store the slider data them with a map we go over the array positions*/
const sliderData = [
  {
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

/*Now we create the function that contain the bottoms to change between cards */
const SlickArrowRight = ({
  currentSlide,
  slideCount,
  ...props
}: {
  currentSlide?: number;
  slideCount?: number;
}) => <img src={icons.rightArrow} alt="prevArrow" {...props} />;

const SlickArrowLeft = ({
  currentSlide,
  slideCount,
  ...props
}: {
  currentSlide?: number;
  slideCount?: number;
}) => <img src={icons.leftArrow} alt="nextArrow" {...props} />;
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
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nesciunt
        quaerat ad! Sequi assumenda doloremque autem nihil aut totam atque
        fugiat minima, accusamus dolore recusandae ab quos molestias non
        architecto.
      </p>
      <Slider {...settings}>
        {sliderData.map((item) => (
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
              <NavLink to={"/tours"}>
              <a href="#" className="btn-flip" data-back="Have Fun" data-front="se more..."></a>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
