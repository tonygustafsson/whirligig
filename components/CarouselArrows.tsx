import React from "react";
import styles from "../styles/Carousel.module.css";

type Props = {
  index: number;
  totalPages: number;
  setIndex: (index: number) => void;
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

const CarouselArrows: React.FC<Props> = ({ index, totalPages, setIndex }) => {
  const prevSlide = () => {
    const nextIndex = index > 0 ? index - 1 : 0;
    setIndex(nextIndex);
  };

  const nextSlide = () => {
    const nextIndex = index < totalPages - 1 ? index + 1 : totalPages - 1;
    setIndex(nextIndex);
  };

  return (
    <>
      <div
        onClick={prevSlide}
        className={`${styles.arrow} ${styles.arrowLeft}`}
      >
        <LeftArrowIcon />
      </div>
      <div
        onClick={nextSlide}
        className={`${styles.arrow} ${styles.arrowRight}`}
      >
        <RightArrowIcon />
      </div>
    </>
  );
};
export default CarouselArrows;
