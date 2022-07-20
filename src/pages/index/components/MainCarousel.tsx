import Carousel from "react-bootstrap/Carousel";
import * as images from "../../../assets/images/Images";

export const MainCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={images.volcanArenal01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Volcan Arenal</h3>
          <button>See more...</button>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={images.lagoArenal01}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Lago Arenal</h3>
          <button>See more...</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={images.rioCeleste01}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Rio Celeste</h3>
          <button>See more...</button>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
