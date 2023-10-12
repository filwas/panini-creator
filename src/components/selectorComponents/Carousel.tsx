import React, { useState } from "react";
import styles from "./Carousel.module.css";
import CarouselArrow from "../icons/CarouselArrow";
import Grain from "../icons/Grain";
import Wheat from "../icons/Wheat";
import { Direction, FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";
import { data } from "../../data/Data";

interface CarouselProps {
  ID: number;
  formField: FormDataType;
}

const Carousel = (props: CarouselProps) => {
  const context = useFormContext();
  const options = data(props.formField);
  const displayValue = context.watch(props.formField)[props.ID];
  const [refresher, refreshElement] = useState(true);

  const arrowClick = (direction: Direction) => {
    let optionIndex = options.indexOf(displayValue);
    if (direction == Direction.Left) {
      optionIndex == 0 ? (optionIndex = options.length - 1) : optionIndex--;
    } else if (direction == Direction.Right) {
      optionIndex == options.length - 1 ? optionIndex = 0 : optionIndex++;
    }    
    context.setValue(`${props.formField}[${props.ID}]`, options[optionIndex]);
    refreshElement(!refresher);
  };

  const grain = context.watch(props.formField)[props.ID] == "FULL GRAIN";
  const wheat = context.watch(props.formField)[props.ID] == "WHEAT";

  return (
    <div className={styles.carouselWrapper}>
      <CarouselArrow
        className={styles.genericArrow}
        direction={Direction.Left}
        onClick={() => arrowClick(Direction.Left)}
      />
      <div className={styles.textWrapper}>
        {grain && <Grain />}
        {wheat && <Wheat />}
        {displayValue}
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
