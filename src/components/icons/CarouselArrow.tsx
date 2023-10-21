import React from "react";
import { Direction } from "../enumFaces/enumFaces";

interface CarouselArrowProps {
  className?: string;
  direction: Direction;
  onClick?: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const CarouselArrow = (props: CarouselArrowProps) => {
  return (
    <svg
      data-testid={"arrow-" + props.direction}
      className={props.className}
      width="12"
      height="22"
      viewBox="0 0 12 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      {props.direction == Direction.Left && (
        <path d="M11 1L1 11L11 21" stroke="black" strokeWidth="0.5" />
      )}
      {props.direction == Direction.Right && (
        <path d="M1 1L11 11L1 21" stroke="black" strokeWidth="0.5" />
      )}
    </svg>
  );
};

export default CarouselArrow;
