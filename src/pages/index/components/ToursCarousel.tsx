import * as images from "../../../assets/images/Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { Button } from "../../../components/Button/Button";
import * as icons from "../../../assets/icons/icons";

/*this sliderData is created to store the slider data them with a map we go over the array positions*/
const sliderData = [
  {
    title: "Volcan Arenal Hike",
    price: "100",
    dollarIcon: <AiFillDollarCircle style={{ color: "#FFFFFF", fontSize: "2rem" }} />
   ,
    urlImage: images.volcanArenal01,
    description: "detalles",
  },
  {
    title: "Rio Celeste Hike",
    price: "100",
    dollarIcon: <AiFillDollarCircle style={{ color: "#FFFFFF", fontSize: "2rem" }} />,
    urlImage: images.rioCeleste02,
    description: "detalles",
  },
  {
    title: "Hanging Bridges",
    price: "80",
    dollarIcon: <AiFillDollarCircle style={{ color: "#FFFFFF", fontSize: "2rem" }} />
    ,
    urlImage: images.hangingBridges,
    description: "detalles",
  },
  {
    title: "Fortuna Waterfall",
    price: "70",
    dollarIcon: <AiFillDollarCircle style={{ color: "#FFFFFF", fontSize: "2rem" }} />
    ,
    urlImage: images.rioCeleste01,
    description: "detalles",
  },
  {
    title: "Fortuna Waterfall",
    price: "80",
    dollarIcon: <AiFillDollarCircle style={{ color: "#FFFFFF", fontSize: "2rem" }} />
    ,
    urlImage: images.rioCeleste01,
    description: "detalles",
  },
  {
    title: "Fortuna Waterfall",
    price: "80",
    dollarIcon: <AiFillDollarCircle style={{ color: "#FFFFFF", fontSize: "2rem" }} />
    ,
    urlImage: images.rioCeleste01,
    description: "detalles",
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
    <div className="container">
      <Slider {...settings}>
        {sliderData.map((item) => (
          <div className="tour-carousel-card">
            <div className="card-top">
            <h1>{item.title}</h1>
              <img src={item.urlImage} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>
                {item.dollarIcon}
                {item.price}
              </h3>
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
