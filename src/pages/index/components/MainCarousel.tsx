import Carousel from "react-bootstrap/Carousel";
import * as images from "../../../assets/images/Images";

export const MainCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="carousel-img d-block w-100"
          src={images.volcanArenal01}
          alt="Volcan Arenal"
        />
        <Carousel.Caption>
          <h3 className="carousel-h3 animate-charcter">Volcan Arenal</h3>
          <div className="card">
            <h1>
              La Fortuna is
              <div className="scroller">
                <span>
                  Cool
                  <br />
                  Nature
                  <br />
                  Relaxing
                  <br />
                  Adventure
                </span>
              </div>
            </h1>
          </div>
          <button className="carousel-button">See more...</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="carousel-img d-block w-100"
          src={images.lagoArenal01}
          alt="Lago Arenal"
        />
        <Carousel.Caption>
          <h3 className="carousel-h3 animate-charcter">Lago Arenal</h3>
          <div className="card">
            <h1>
              La Fortuna is
              <div className="scroller">
                <span>
                  Cool
                  <br />
                  Nature
                  <br />
                  Relaxing
                  <br />
                  Adventure
                </span>
              </div>
            </h1>
          </div>
          <button className="carousel-button">See more...</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="carousel-img d-block w-100"
          src={images.rioCeleste01}
          alt="Rio Celeste"
        />
        <Carousel.Caption>
          <h3 className="carousel-h3 animate-charcter">Rio Celeste</h3>
          <div className="card">
            <h1>
              La Fortuna is
              <div className="scroller">
                <span>
                  Cool
                  <br />
                  Nature
                  <br />
                  Relaxing
                  <br />
                  Adventure
                </span>
              </div>
            </h1>
          </div>
          <button className="carousel-button">See more...</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
