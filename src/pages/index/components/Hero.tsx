import styles from "../../../styles/components/index/_Hero.module.scss";
import * as images from "../../../assets/images/Images";
import { Button } from "../../../components/Button/Button";

export const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["img-container"]}>
        <img
          src={images.frog06}
          alt="Frog nature Costa Rica Arenal tours"
        />
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
          scrollId={'exploreIndexScroll'}
          scrollTop={true}
          text={"READ MORE"}
        /> 
      </div>
    </div>
  );
};
