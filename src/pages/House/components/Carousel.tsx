import Carousel from "react-bootstrap/Carousel";
import * as images from "../../../assets/images/Images";

export const CarouselHome = () => {

    const dataCarousel = [{
        urlImage: images.volcanArenal01,
        titleAnimate: "Volcan Arenal",
        title: "La Fortuna is",
        scroller: ["Cool", "Relaxing", "Adventure", "Amazing"],
        buttonInfo: "See more...",
    },
    {
        urlImage: images.lagoArenal01,
        titleAnimate: "Lago Arenal",
        title: "La Fortuna is",
        scroller: ["Cool", "Relaxing", "Adventure", "Amazing"],
        buttonInfo: "See more...",
    },
    {
        urlImage: images.rioCeleste01,
        titleAnimate: "Rio Celeste",
        title: "La Fortuna is",
        scroller: ["Cool", "Relaxing", "Adventure", "Amazing"],
        buttonInfo: "See more...",
    }]

    return (
        <div className="container">
            <div className="carousel">
                <div className="carousel__image">
                    <img className="carousel__image--img" src={dataCarousel[0].urlImage} alt="img" />
                </div>
                <div className="carousel__imageSmall">
                    <button className="" onClick={()=>{}}> {'<='} </button>
                    <div className="carousel__imageSmall--card">
                        <div className="carousel__imageSmall--card-img">imagen1</div>
                        <div className="carousel__imageSmall--card-img">imagen2</div>
                        <div className="carousel__imageSmall--card-img">imagen3</div>
                        <div className="carousel__imageSmall--card-img">imagen4</div>
                        <div className="carousel__imageSmall--card-img">imagen5</div>
                        <div className="carousel__imageSmall--card-img">imagen6</div>
                    </div>
                    <button> {'=>'} </button>
                </div>
            </div>
        </div>
    )
}
