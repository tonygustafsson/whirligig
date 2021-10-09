import React from "react";
import styles from "../styles/Carousel.module.css";

type Props = {
  slide: number;
  totalSlides: number;
};

const CarouselDots: React.FC<Props> = ({
  slide,
  totalSlides,
  ...restProps
}) => (
  <div className={styles.dotsContainer} {...restProps}>
    {[...Array(totalSlides)].map((_, index) => {
      return (
        <div
          key={`Carousel_Dot_${index}`}
          className={`${styles.dot} ${
            index === slide ? styles.dotCurrent : ""
          }`}
        ></div>
      );
    })}
  </div>
);

export default CarouselDots;
