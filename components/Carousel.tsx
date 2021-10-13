import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";
import Dots from "./CarouselDots";
import Arrows from "./CarouselArrows";
import styles from "../styles/Carousel.module.css";
import { useSwipeable } from "react-swipeable";

type Props = {
  slidesPerPage: number;
  slideWidth: number;
  showArrows: boolean;
  showDots: boolean;
};

const Carousel: React.FC<Props> = ({
  slidesPerPage = 3,
  slideWidth = 312,
  showArrows = true,
  showDots = true,
  children,
  ...restProps
}) => {
  const [slide, setSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const noOfChildren = React.Children.toArray(children).length;
  const totalPages = Math.ceil(noOfChildren / slidesPerPage);

  if (!children) {
    return null;
  }

  const prevSlide = () => {
    const nextSlide =
      slide > 1 ? slide - slidesPerPage : noOfChildren - slidesPerPage;
    setSlide(nextSlide);
  };

  const nextSlide = () => {
    const nextSlide =
      slide < noOfChildren - totalPages ? slide + slidesPerPage : 0;
    setSlide(nextSlide);
  };

  useEffect(() => {
    if (!carouselRef.current) return;

    const slideToScrollTo = carouselRef.current.children[slide];

    if (slideToScrollTo) {
      slideToScrollTo.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, [slide]);

  const slideHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
    trackTouch: false,
  });

  return (
    <div className={styles.carouselWrapper} {...restProps}>
      <div
        className={`${styles.carousel}`}
        {...slideHandlers}
        ref={carouselRef}
        style={{
          width: `${slidesPerPage * slideWidth}px`,
        }}
      >
        {React.Children.toArray(children).map((child, index) => {
          return (
            <div
              key={`carousel_item_${index}`}
              style={{ width: `${slideWidth}px` }}
            >
              {child}
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <>
          <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
          <Dots
            setSlide={setSlide}
            slide={slide}
            totalPages={totalPages}
            slidesPerPage={slidesPerPage}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
