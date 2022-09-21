import styles from "../../../styles/components/index/_Hero.module.scss";
import { frog06 } from "../../../assets/images/Images";
import { Button } from "../../../components/Button/Button";
import { BsWhatsapp } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["img-container"]}>
        <img src={frog06} alt="Frog nature Costa Rica Arenal tours" />
      </div>
      <div className={styles["info-container"]}>
        <h1>Be outDoors with us</h1>

        <p>Discover la fortuna a city where the adventures never ends</p>
        <Button
          className={"button__hero"}
          redirection={"ContactUs"}
          text={"GET IN TOUCH"}
        />
        <Button
          className={"button__hero__flat"}
          redirection={""}
          scrollId={"exploreIndexScroll"}
          scrollTop={true}
          text={"READ MORE"}
        />
        <a
          href="https://api.whatsapp.com/send?phone=50685415859&text=Hi,%20i%20will%20like%20to%20know%20more%20about%20your%20services."
          className="Whatsapp__floating"
          target="_blank"
        >
         <BsWhatsapp/>
        </a>
      </div>
    </div>
  );
};
