import * as images from "../../../assets/images/Images";
import { ImLocation2 } from "react-icons/im";
import { GiGraveFlowers } from "react-icons/gi";
import { FaMountain, FaWifi } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";
import { formatCurrency } from "../../../utilities/formatCurrency";

const DescriptionCard = () => {
  return (
    <div className="container">
      <div className="col-lg-12 col-md-12 mt-5">
        <div className="card card-bordered">
          <div className="card-body">
            <div className="title card-header">
              <h4 className="text-danger">{formatCurrency(45.96)} per night </h4>
              <div className="description mt-2">
                <h4>some description here</h4>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.                  
                </p>
              </div>
            </div> 

            <div>
              <div className="description mt-5">
                <h3>Description</h3>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, quia? Laborum, maxime perspiciatis! Aut iusto
                  voluptatem repellat provident, perspiciatis eum est a vero
                </p>
              </div>
              <div>
                <h1>House Facilities</h1>
                <div className="row">
                  <div className="house-facilites">
                    <div className="house-facilites-span-div">
                      <span>
                        <GiGraveFlowers />
                      </span>
                    </div>
                    <div>
                      <p className="text-center">Beautiful gardens</p>
                    </div>
                  </div>
                  <div className="house-facilites">
                    <div className="house-facilites-span-div">
                      <span className="">
                        <FaMountain />
                      </span>
                    </div>
                    <div>
                      <p className="text-center">Mountain views</p>
                    </div>
                  </div>
                  <div className="house-facilites">
                    <div className="house-facilites-span-div">
                      <span className="">
                        <TbToolsKitchen2 />
                      </span>
                    </div>
                    <div>
                      <p className="text-center">Kitchen Accessories</p>
                    </div>
                  </div>
                  <div className="house-facilites">
                    <div className="house-facilites-span-div">
                      <span className="">
                        <FaWifi />
                      </span>
                    </div>
                    <div>
                      <p className="text-center">WiFi</p>
                    </div>
                  </div>
                  <div className="house-facilites">
                    <div className="house-facilites-span-div">
                      <span className="">
                        <AiFillCar />
                      </span>
                    </div>
                    <div>
                      <p className="text-center">Parking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="btn-flip" data-back="Get in touch" data-front="Get in touch" />    
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default DescriptionCard;
