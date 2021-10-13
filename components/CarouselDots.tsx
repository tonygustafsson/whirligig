import React from "react";
import styles from "../styles/Carousel.module.css";

type Props = {
  slide: number;
  totalPages: number;
  slidesPerPage: number;
  setSlide: (slide: number) => void;
};

const CarouselDots: React.FC<Props> = ({
  slide,
  totalPages,
  slidesPerPage,
  setSlide,
  ...restProps
}) => {
  const currentPage = Math.ceil(slide / slidesPerPage);

  return (
    <div className={styles.dotsContainer} {...restProps}>
      {[...Array(totalPages)].map((_, pageIndex) => {
        const isCurrentIndex = pageIndex === currentPage;
        const correspondingSlide = pageIndex * slidesPerPage;

        return (
          <div
            key={`Carousel_Dot_${pageIndex}`}
            onClick={() => setSlide(correspondingSlide)}
            className={`${styles.dot} ${
              isCurrentIndex ? styles.dotCurrent : ""
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default CarouselDots;
