import React, { useState, useEffect, useRef } from "react";
import Dots from "./CarouselDots";
import Arrows from "./CarouselArrows";
import styles from "../styles/Carousel.module.css";
import SwipeableViews from "react-swipeable-views";

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
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!children) {
    return null;
  }

  const arrayToChunks = (array: Array<any>, chunkSize = 3) =>
    array.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

  const pages: React.ReactNode[] = arrayToChunks(
    React.Children.toArray(children)
  );

  const onChangeIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <div className={styles.carouselWrapper} {...restProps}>
      <div
        className={`${styles.carousel}`}
        ref={carouselRef}
        style={{
          width: `${slidesPerPage * slideWidth}px`,
        }}
      >
        <SwipeableViews
          index={index}
          enableMouseEvents
          onChangeIndex={onChangeIndex}
        >
          {pages.map((carouselItems: React.ReactNode, pageIndex: number) => (
            <div
              className={styles.carouselPage}
              key={`CarouselPage_${pageIndex}`}
            >
              {React.Children.toArray(carouselItems).map((child, index) => {
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
          ))}
        </SwipeableViews>
      </div>

      {pages.length > 1 && (
        <>
          <Arrows index={index} totalPages={pages.length} setIndex={setIndex} />
          <Dots
            setIndex={setIndex}
            index={index}
            totalPages={pages.length}
            slidesPerPage={slidesPerPage}
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
