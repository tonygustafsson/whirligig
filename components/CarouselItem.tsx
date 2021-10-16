import React from "react";
import styles from "../styles/Carousel.module.css";

type Props = {
  name: string;
};

const CarouselItem: React.FC<Props> = ({ name, ...restProps }) => (
  <div className={styles.item} {...restProps}>
    <img
      className={styles.itemImg}
      src="https://via.placeholder.com/300x400"
      alt={name}
    />
    <p>{name}</p>
  </div>
);

export default CarouselItem;
