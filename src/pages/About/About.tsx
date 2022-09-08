import styles from '../../styles/components/about/_about.module.scss'
import * as img from '../../assets/images/Images'

export const About = () => {

  return (
    <div className={styles.containerPadre}>

      <div className={styles.imageAbout}>
        <img src={img.hikings} alt="About" />
      </div>

      <div className={styles.fortuna}>
        <h3 className={`${styles.title} wow animate__animated animate__fadeInDown`}>Fortuna</h3>
        <div className={styles.contenidoPrincipal}>

          {/* datos base, no cambiar ni quitar el div central */}
          <div className={`${styles.left} wow animate__animated animate__fadeInLeft`}>
            <p>
              <span>"</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum eaque, illo perspiciatis architecto eligendi pariatur odit maiores nemo vel accusantium excepturi obcaecati eius sunt nihil est et quod quas?
              <span>"</span>
            </p>
          </div>

          <div></div>

          <div className={`${styles.right} wow animate__animated animate__fadeInRight`}>
            <p>
              sit amet consectetur adipisicing elit. Distinctio ipsum eaque, illo perspiciatis architecto eligendi pariatur odit maiores nemo vel accusantium excepturi obcaecati eius sunt nihil est et quod quas?
            </p>
          </div>{/* fin de informacion base */}

          <div className={`${styles.left} wow animate__animated animate__fadeInLeft`}>
            <p>
              sit amet consectetur adipisicing elit. Distinctio ipsum eaque, illo perspiciatis architecto eligendi pariatur odit maiores nemo vel accusantium excepturi obcaecati eius sunt nihil est et quod quas?
            </p>
          </div>{/* fin de informacion base */}

        </div>
      </div>{/* fin de about de fortuna */}

      <div className={styles.company}>
        <h3 className={styles.title}>Company</h3>
        <div className={styles.contenidoPrincipal}>

          {/* datos base, no cambiar ni quitar el div central */}
          <div className={`${styles.left} wow animate__animated animate__fadeInLeft`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum eaque, illo perspiciatis architecto eligendi pariatur odit maiores nemo vel accusantium excepturi obcaecati eius sunt nihil est et quod quas?
            </p>
          </div>

          <div></div>

          <div className={`${styles.right} wow animate__animated animate__fadeInRight`}>
            <p>
              sit amet consectetur adipisicing elit. Distinctio ipsum eaque, illo perspiciatis architecto eligendi pariatur odit maiores nemo vel accusantium excepturi obcaecati eius sunt nihil est et quod quas?
            </p>
          </div>{/* fin de informacion base */} 

        </div>
      </div>

    </div>
  )
}
