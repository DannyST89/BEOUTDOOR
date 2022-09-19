import {
  GiMountaintop,
  GiOffshorePlatform,
  GiSuspensionBridge,
} from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
  },
  {
    title: "Zipline",
    urlImage: <GiOffshorePlatform />,
  },
];

const animate = [
  "animate__fadeInDown",
  "animate__fadeInLeft",
  "animate__fadeInRight",
  "animate__fadeInUp",
  "animate__fadeInBottomLeft",
  "animate__fadeInBottomRight",
];
export default function Explore() {
  return (
    <div className="container" >
      <div id='exploreIndexScroll' className="explore__container">

        <AnimationOnScroll initiallyVisible={true}>
          <h1 className="explore__container--title">
            Explore
          </h1>
        </AnimationOnScroll>

        <AnimationOnScroll initiallyVisible={true}>
          <p className="">
            Would you like to know <strong>La Fortuna</strong>? you have arrived at the best
            place, where you can find the answer for all your needs, we
            offer you a personalized guide during your stay in this wonderful
            place
          </p>
        </AnimationOnScroll>

        <div className="explore__container--inner">
          {sliderData.map((item, index) => {
            return (
              <AnimationOnScroll key={index} animateIn={`${animate[index]}`}>
                <div
                  id={item.title.replace(/ /g, "")}
                  key={index}
                  className={`explore__container--inner-card`}
                >
                  <span className="exploreIconSize">{item.urlImage}</span>
                  <h2>{item.title}</h2>
                </div>
              </AnimationOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}
