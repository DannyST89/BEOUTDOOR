import styles from "../../styles/components/scroll/Scroll.module.scss";
import { Link } from "react-scroll";

export const Scroll = () => {
  return (
    <Link
      to="explore"
      className={styles["scroll-down"]}
      smooth={true}
      duration={1000}
      offset={-150}
    ></Link>
  );
};
