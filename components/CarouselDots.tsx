import React from "react";
import styles from "../styles/Carousel.module.css";

type Props = {
  index: number;
  totalPages: number;
  slidesPerPage: number;
  setIndex: (slide: number) => void;
};

const CarouselDots: React.FC<Props> = ({
  index,
  totalPages,
  slidesPerPage,
  setIndex,
  ...restProps
}) => {
  return (
    <div className={styles.dotsContainer} {...restProps}>
      {[...Array(totalPages)].map((_, pageIndex) => {
        return (
          <div
            key={`Carousel_Dot_${pageIndex}`}
            onClick={() => setIndex(pageIndex)}
            className={`${styles.dot} ${
              pageIndex === index ? styles.dotCurrent : ""
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default CarouselDots;
