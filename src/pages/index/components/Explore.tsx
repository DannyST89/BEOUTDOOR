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

export default function Explore() {
  return (
    <div className="container">
      <div className="explore__container">
        <h1 className="explore__container--title">Explore</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, alias
          aspernatur. Odit harum praesentium odio recusandae error quasi
          nesciunt eos ad! Dolorum ipsum voluptatibus fugit quis animi explicabo
          quod labore.
        </p>
        <div className="explore__container--inner">
          {
          sliderData.map((item, index) => {
            return (
              <div id={item.title.replace(/ /g,"")} key={index} className="explore__container--inner-card">
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