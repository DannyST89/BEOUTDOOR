import * as images from "../../../assets/images/Images";
import { ImLocation2 } from "react-icons/im";
import { GiGraveFlowers } from "react-icons/gi";
import { FaMountain, FaWifi } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";


const DescriptionCard = () => {
  return (
    <div className="containerCardHouse">
      <div className="col-lg-12 col-md-12 mt-5">
        <div className="card card-bordered">
          <div className="card-body">
            <div className="title card-header">
              <h4 className="text-danger">USD $69.96 per night </h4>
            </div>
            <div>
              <h4 className="card-text mt-4 mb-4">
                <span> {<ImLocation2 />} </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                nesciunt sit perferendis harum adipisci, aperiam incidunt
              </h4>
            </div>
            <hr />
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
            <a href="tour" className="btn-flip" data-back="Have Fun" data-front="se more..."></a>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default DescriptionCard;
