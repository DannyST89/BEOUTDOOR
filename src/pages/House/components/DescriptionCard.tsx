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
    <div className="containerCardHouse  wow animate__animated animate__fadeInLeft">
      <div className="col-lg-12 col-md-12 mt-5">
        <div className="card card-bordered">
          <div className="card-body">
            <div>
              <h2 className="card-text-house mt-2 mb-4">
                Casa Sunrise.
              </h2>
            </div>

            <hr />

            <div className="descripcion">

              <div className="descripcion__right">
                <div className="descripcion__title">
                  <h2>Description</h2>
                </div>
                <div className="descripcion__texto">
                  <p>
                  Vacation House "Casa Sunrise " La Fortuna, Costa Rica awaits you                  
                  and your family to our private house with the best location ever,
                  10 minutes away from La Fortuna Downtown, 20 min from the Arenal
                  Volcano National Park, 5 minutes away from Rio Fortuna. Confortable
                  fully equipped house, arenal volcano view from all property, safe 
                  neighborhood, close to severals hot spot and activities to do in
                  the surrounding of the Arenal Volcano, Hotsprings, rivers and so much more.
                  </p>
                  <h2>Price</h2>
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
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default DescriptionCard;
