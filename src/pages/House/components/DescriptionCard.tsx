import * as images from "../../../assets/images/Images";
import { ImLocation2 } from "react-icons/im";
import { GiGraveFlowers } from "react-icons/gi";
import { FaMountain, FaWifi } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";


const DescriptionCard = () => {

  const icons = [{
    icon: <GiGraveFlowers />,
    text: "Beautiful gardens"
  }, {
    icon: <FaMountain />,
    text: "Mountain views"
  },
  {
    icon: <TbToolsKitchen2 />,
    text: "Kitchen Accessories"
  },
  {
    icon: <FaWifi />,
    text: "WiFi"
  },
  {
    icon: <AiFillCar />,
    text: "Parking"
  }
  ]

  return (
    <div className="containerCardHouse">
      <div className="col-lg-12 col-md-12 mt-5">
        <div className="card card-bordered">
          <div className="card-body">
            <div>
              <h4 className="card-text mt-2 mb-4">
                <span> {<ImLocation2 />} </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
            </div>

            <hr />

            <div className="descripcion">

              <div className="descripcion__right">
                <div className="descripcion__title">
                  <h2>Description</h2>
                </div>
                <div className="descripcion__texto">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, quia? Laborum, maxime perspiciatis! Aut iusto
                    voluptatem repellat provident, perspiciatis eum est a vero
                  </p>
                  <h4 className="text-danger">USD $69.96 per night </h4>
                </div>
              </div>

              <div className="descripcion__left">
                <h2 className="descripcion__title">House Facilities</h2>
                <div className="descripcion__icon house-facilites">
                  {
                    icons.map(icon => (
                      <div key={icon.text} className="house-facilites-span-div">
                        <span>
                          {icon.icon}
                        </span>
                        <p className="text-center">{icon.text}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <hr />

            <a href="#" className="btn-flip descripcion__button" data-back="Have Fun" data-front="see/ more..."></a>

          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default DescriptionCard;
