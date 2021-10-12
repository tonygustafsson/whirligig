import React from "react";
import styles from "../styles/Carousel.module.css";

type Props = {
  slide: number;
  totalSlides: number;
  setSlide: (slide: number) => void;
};

const CarouselDots: React.FC<Props> = ({
  slide,
  totalSlides,
  setSlide,
  ...restProps
}) => (
  <div className={styles.dotsContainer} {...restProps}>
    {[...Array(totalSlides)].map((_, index) => {
      return (
        <div
          key={`Carousel_Dot_${index}`}
          onClick={() => setSlide(index)}
          className={`${styles.dot} ${
            index === slide ? styles.dotCurrent : ""
          }`}
        ></div>
      );
    })}
  </div>
);

export default CarouselDots;
