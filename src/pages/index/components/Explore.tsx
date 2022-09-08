import { GiMountaintop, GiOffshorePlatform, GiSuspensionBridge } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md"
import { BsFillHouseDoorFill } from "react-icons/bs";


const sliderData = [
  {
    title: "Hikings",
    urlImage: <GiMountaintop />,
  },
  {
    title: "Airbnb house",
    urlImage: <BsFillHouseDoorFill />, 
  },
  {
    title: "Hanging Bridges",
    urlImage: <GiSuspensionBridge />,
  }, 
  {
    title: "Family Tours",
    urlImage: <MdFamilyRestroom />,
  }, {
    title: "Zipline",
    urlImage: <GiOffshorePlatform />,
  },
];

const animate = ["animate__fadeInDown", "animate__fadeInLeft","animate__fadeInRight","animate__fadeInUp","animate__fadeInBottomLeft","animate__fadeInBottomRight"]; 
export default function Explore() {
  return (
    <div className="container" id="explore">
      <div className="explore__container">
               <h1 className="explore__container--title wow animate__animated animate__fadeIn">Explore</h1>
 <p className="wow animate__animated animate__fadeIn">
          Te gustaria conocer la fortuna? has llegado al mejor lugar, donde podras encontrar la guia para todos tus gustos y necesidades,
          te ofrecemos una guia personalizada durante tu estadia en este maravilloso lugar. 
        </p>
        <div className="explore__container--inner">
          {
          sliderData.map((item, index) => {
            return (
                           <div id={item.title.replace(/ /g,"")} key={index} className={` wow animate__animated ${animate[index]} explore__container--inner-card`}>
                <span className="exploreIconSize">{item.urlImage}</span>
                <h2>{item.title}</h2>
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  );
}
