import styles from "../../styles/components/about/_about.module.scss";
import {about01} from "../../assets/images/Images";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const About = () => {
  return (
    <div className={styles.containerPadre}>
      <div className={styles.imageAbout}>
        <img src={about01} alt="About" />
      </div>

      <div className={styles.fortuna}>
          <h3 className={`${styles.title} animate__animated animate__fadeInDown`}>Fortuna</h3>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeIn" duration={1}>
        </AnimationOnScroll>

        <div className={styles.contenidoPrincipal}>
          {/* datos base, no cambiar ni quitar el div central */}
          <div
            className={`${styles.left}`}
          >
            {/* <AnimationOnScroll animateIn="animate__fadeInLeft"> */}
              <p className="animate__animated animate__fadeInLeft">
                <span>"</span>
                La Fortuna is a dreamy place to visit
                <span>"</span>
              </p>
            {/* </AnimationOnScroll> */}
          </div>

          <div></div>

          <div
            className={`${styles.right}`}
          >
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <p>
                La Fortuna and its amazing Arenal Volcano is well known, as one of
                the best adventure destinations in the world. From all Costa Rican
                destinations, Arenal is probably the area with the biggest variety
                of tours, activities, hotels and attractions.
              </p>
            </AnimationOnScroll>
          </div>
          {/* fin de informacion base */}

          <div
            className={`${styles.left} `}
          >
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <p>
                Take it easy and relax in volcanic hot springs or enjoy the
                adrenaline of the rapids on a rafting trip, there is an adventure
                for everyone; horseback riding, biking, kayaking, treking, hanging
                bridges, wildlife safaris, zip lining, fishing, ATV tours,
                canyoning, SUP, spelunking are just some examples of the
                adventures you can live at this wonderful place.
              </p>
            </AnimationOnScroll>
          </div>
          {/* fin de informacion base */}
        </div>
      </div>
      {/* fin de about de fortuna */}

      <div className={styles.company}>
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <h3 className={styles.title}>Company</h3>
        </AnimationOnScroll>
        <div className={styles.contenidoPrincipal}>
          {/* datos base, no cambiar ni quitar el div central */}
          <div
            className={`${styles.left} `}
          >
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <p>
                We are a company with a lot of experience in helping to organize
                group and family trips, our mission is that you have an itinerary
                in which we can help to make it real. We are located in La Fortuna
                de San Carlos since 1996 and we have grown with the experience
                that our tourists have left us along the way, we know the area as
                we know our hands, and we want to be part of your adventure as
                well as ensure that you, pay the fairest prices, since we adapt to
                the needs of our clients as much as possible, giving you the
                opportunity to make everything you want to do.
              </p>
            </AnimationOnScroll>
          </div>

          <div></div>

          <div
            className={`${styles.right}`}
          >
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <p>
                The quality of the service, and the well-being of you is our main
                objective and for this we are characterized by working with small
                groups, where learning is valuable for you and satisfactory for
                us; our activities range from hiking, adventure, pleasure,
                extreme, among others, our motto as Ticos is that "We can help
                each other.
              </p>
            </AnimationOnScroll>
          </div>
          {/* fin de informacion base */}
        </div>
      </div>
    </div>
  );
};
