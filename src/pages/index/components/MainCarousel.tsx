import styles from "../../../styles/components/index/_MainCarousel.module.scss";
import * as images from "../../../assets/images/Images";




export const MainCarousel = () => {
  
  return (
    <div className={styles["main"]}>
      <div className={styles["overlay"]}></div>
      <img src={images.hangingBridges} ></img>
      <div className={styles["content"]}>
        <h1 className={styles["content-title"]}>Be Outdoors with us</h1>
        <p className={styles["content-p"]}>Discover La Fortuna</p>
        <button className={styles["btn"]}> Get in Touch</button>
      </div>
    </div>
  );
};
