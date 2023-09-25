import React, { useState } from "react";
import styles from "./Carousel.module.css";
import classNames from "classnames";
import CarouselArrow from "../icons/CarouselArrow";
import Grain from "../icons/Grain";
import Wheat from "../icons/Wheat";
import { Direction, FormDataType } from "../enumFaces/enumFaces";

interface CarouselProps {
  carouselOptions: string[];
  dataType: FormDataType;
  retElement: (result: string)=>void;
}

const Carousel = (props: CarouselProps) => {
  const [optionIndex, setOptionIndex] = useState(0);

  const carouselWrapper = classNames(styles.carouselWrapper);
  const textWrapper = classNames(styles.textWrapper);

  const arrowClick = (direction: Direction) => {
    if (direction == Direction.Left) {
      setOptionIndex((prevOptionIndex) =>
        prevOptionIndex === 0
          ? props.carouselOptions.length - 1
          : prevOptionIndex - 1
      );
    } else if (direction == Direction.Right) {
      setOptionIndex((prevOptionIndex) =>
        prevOptionIndex === props.carouselOptions.length - 1
          ? 0
          : prevOptionIndex + 1
      );
    }
  };

  const grain = props.carouselOptions[optionIndex] == "FULL GRAIN";
  const wheat = props.carouselOptions[optionIndex] == "WHEAT";
  props.retElement(props.carouselOptions[optionIndex])
  return (
    <div className={carouselWrapper}>
      <CarouselArrow
        className={styles.genericArrow}
        direction={Direction.Left}
        onClick={() => arrowClick(Direction.Left)}
      />
      <div className={textWrapper}>
        {grain && <Grain />}
        {wheat && <Wheat />}
        {props.carouselOptions[optionIndex]}
      </div>
      <CarouselArrow
        className={styles.genericArrow}
        direction={Direction.Right}
        onClick={() => arrowClick(Direction.Right)}
      />
    </div>
  );
};

export default Carousel;
