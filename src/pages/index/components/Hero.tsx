import styles from "../../../styles/components/index/_Hero.module.scss";
import * as images from "../../../assets/images/Images";

import { useRef, useState } from "react";
import { Scroll } from "../../../components/scroll/Scroll";
import { Button } from "../../../components/Button/Button";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["img-container"]}>
        <img
          srcSet={`${images.frog1} 300w, ${images.frog2} 768w, ${images.frog3} 1280w`}
          alt="frog nature Costa Rica Arenal tours"
        />
      </div>
      <div className={styles["info-container"]}>
        <h1>Be outDoors with us</h1>
        <h2>Discover la fortuna</h2>
        <Button
          redirection={""}
          icon={{
            height: "3rem",
            width: "3rem",
            className: "scroll-down",
            src:"../../../assets/icons/arrow-down.png"
          }}
        />
      </div>
    </div>
  );
};
