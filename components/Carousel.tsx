import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";
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
  const [positionX, setPositionX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goLeft = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft + 600;
  };

  const goRight = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - 600;
  };

  const handlers = useSwipeable({
    onSwipedLeft: goLeft,
    onSwipedRight: goRight,
    trackMouse: true,
  });

  return (
    <div
      className={`${styles.carousel}`}
      {...handlers}
      ref={carouselRef}
      tabIndex={0}
    >
      {items.map((item, index) => {
        return <CarouselItem key={`Carousel_item_${index}`} name={item.name} />;
      })}
    </div>
  );
};

export default Carousel;
