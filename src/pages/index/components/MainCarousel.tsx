import styles from "../../../styles/components/index/_MainCarousel.module.scss";
import * as images from "../../../assets/images/Images";
import video from "../../../assets/videos/video.mp4";

import { useRef, useState } from "react";
import { Scroll } from "../../../components/scroll/Scroll";

export const MainCarousel = () => {
  
  const scrollDown = useRef(null)
  return (
    <div className={styles["main"]}>
      <div className={styles["overlay"]}></div>
      <img src={images.rana2} ></img>
      <div className={styles["content"]}>
        <h1 className={styles["content-title"]}>Be Outdoors with us</h1>
        <p className={styles["content-p"]}>Discover La Fortuna</p>
        <button className={styles["btn"]}> Get in Touch</button>
        <Scroll />
      </div>
    </div>
  );
};
