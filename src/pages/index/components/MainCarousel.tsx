import Carousel from "react-bootstrap/Carousel";
import * as images from "../../../assets/images/Images";

export const MainCarousel = () => {

  const dataCarousel = [{
    urlImage: images.volcanArenal01,
    titleAnimate: "Volcan Arenal",
    title: "La Fortuna is",
    scroller: ["Cool", "Nature", "Relaxing", "Adventure"],
    buttonInfo: "See more...",
  },
  {
    urlImage: images.lagoArenal01,
    titleAnimate: "Lago Arenal",
    title: "La Fortuna is",
    scroller: ["Cool", "Nature", "Relaxing", "Adventure"],
    buttonInfo: "See more...",
  },
  {
    urlImage: images.rioCeleste01,
    titleAnimate: "Rio Celeste",
    title: "La Fortuna is",
    scroller: ["Cool", "Nature", "Relaxing", "Adventure"],
    buttonInfo: "See more...",
  }]

  return (
    <Carousel>

      {
        dataCarousel.map((item) => (
          <Carousel.Item key={item.urlImage} interval={5000}>
            <img
              className="carousel-img d-block w-100"
              src={item.urlImage}
              alt={item.titleAnimate}
            />
            <Carousel.Caption>
              <h3 className="carousel-h3 animate-charcter">{item.titleAnimate}</h3>
              <div className="cardCarousel">
                <h1> 
                  {item.title}
                  <div className="scroller">
                    <span>
                      {
                        item.scroller.map((item, index) => (
                          <div key={index}>
                          {item}
                          <br />
                          </div> 
                        ))
                      } 
                    </span>
                  </div>
                </h1>
              </div>
              <button className="carousel-button">{item.buttonInfo}</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      } 
    </Carousel>
  );
};
