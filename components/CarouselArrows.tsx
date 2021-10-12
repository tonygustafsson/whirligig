import React from "react";
import styles from "../styles/Carousel.module.css";

type Props = {
  prevSlide: () => void;
  nextSlide: () => void;
};

const LeftArrowIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="lightgrey"
  >
    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
  </svg>
);

const RightArrowIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="lightgrey"
  >
    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
  </svg>
);

const CarouselArrows: React.FC<Props> = ({
  prevSlide,
  nextSlide,
  ...restProps
}) => (
  <>
    <div onClick={prevSlide} className={`${styles.arrow} ${styles.arrowLeft}`}>
      <LeftArrowIcon />
    </div>
    <div onClick={nextSlide} className={`${styles.arrow} ${styles.arrowRight}`}>
      <RightArrowIcon />
    </div>
  </>
);

export default CarouselArrows;
