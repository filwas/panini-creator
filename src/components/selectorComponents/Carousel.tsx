import React, { useState } from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames";
import CarouselArrow from "../icons/CarouselArrow";
import Grain from "../icons/Grain";
import Wheat from "../icons/Wheat";

interface CarouselProps {
  carouselOptions: string[];
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const [optionIndex, setOptionIndex] = useState(0);

  const carouselWrapper = classNames(styles.carouselWrapper);
  const textWrapper = classNames(styles.textWrapper);

  const arrowClick = (direction: string) => {
    if (direction == "left") {
      setOptionIndex((prevOptionIndex) =>
        prevOptionIndex === 0
          ? props.carouselOptions.length - 1
          : prevOptionIndex - 1
      );
    } else if (direction == "right") {
      setOptionIndex((prevOptionIndex) =>
        prevOptionIndex === props.carouselOptions.length - 1
          ? 0
          : prevOptionIndex + 1
      );
    } else {
    }
  };

  const grain = props.carouselOptions[optionIndex] == "FULL GRAIN";
  const wheat = props.carouselOptions[optionIndex] == "WHEAT";

  return (
    <div className={carouselWrapper}>
      <CarouselArrow
        className={styles.genericArrow}
        direction="left"
        onClick={() => arrowClick("left")}
      />
      <div className={textWrapper}>
        {grain && <Grain />}
        {wheat && <Wheat />}
        {props.carouselOptions[optionIndex]}
      </div>
      <CarouselArrow
        className={styles.genericArrow}
        direction="right"
        onClick={() => arrowClick("right")}
      />
    </div>
  );
};

export default Carousel;
