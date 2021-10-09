import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";
import Dots from "./CarouselDots";
import styles from "../styles/Carousel.module.css";
import { useSwipeable } from "react-swipeable";

const items = [
  { name: "Test 1" },
  { name: "Test 2" },
  { name: "Test 3" },
  { name: "Test 4" },
  { name: "Test 5" },
  { name: "Test 6" },
  { name: "Test 7" },
  { name: "Test 8" },
  { name: "Test 9" },
  { name: "Test 10" },
];

const Carousel: React.FC = ({ ...restProps }) => {
  const [slide, setSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    const nextSlide = slide >= 2 ? slide - 2 : 0;
    setSlide(nextSlide);
  };

  const nextSlide = () => {
    const nextSlide = slide <= items.length - 2 ? slide + 2 : 0;
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
    <>
      <div
        className={`${styles.carousel}`}
        {...slideHandlers}
        ref={carouselRef}
      >
        {items.map((item, index) => {
          return (
            <CarouselItem key={`Carousel_item_${index}`} name={item.name} />
          );
        })}
      </div>

      <Dots slide={slide} totalSlides={items.length} />
    </>
  );
};

export default Carousel;
