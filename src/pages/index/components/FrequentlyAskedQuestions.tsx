import styles from "../../../styles/components/index/_FrequentlyAskedQuestions.module.scss";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const FrequentlyAskedQuestions = () => {
  return (
    <div className={`container accordion accordion-flush ${styles["questions__content"]}`} id="accordionFlushExample">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className={styles["questions__title"]}>
          <h2 >Frequent Asked Questions</h2>
          <span className={styles["span__yellow__line"]}></span>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias?</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the class. This is the
              third item's accordion body. Nothing more exciting happening here in
              terms of content, but just filling up the space to make it look, at
              least at first glance, a bit more representative of how this would
              look in a real-world application.
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};
