import { CarouselHome } from "./components/CarouselHome";
import { HouseAside } from "./components/HouseAside";
import styles from '../../styles/components/House/_House.module.scss';

export const House = () => {
  return (
    <>
      <div className={styles["home-container"]}>
        <CarouselHome />
        <HouseAside />
      </div>

      {/* <DescriptionCard /> */}

    </>
  )
}
