import React from "react";
import styles from "./Ingredient.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dropdown from "../selectorComponents/Dropdown";
import Carousel from "../selectorComponents/Carousel";
import Toggle from "../selectorComponents/Toggle";
import Adder from "../selectorComponents/Adder";
import Checkbox from "../selectorComponents/Checkbox";
import Radial from "../selectorComponents/Radial";
import Multiselect from "../selectorComponents/Multiselect";
import TextInput from "../selectorComponents/TextInput";
import classNames from "classnames";

interface IngredientProps {
  name: string;
  selector: "carousel" | "dropdown" | "multiselect" | "checkbox" | "radial";
  options: string[];
  togglable?: boolean;
}

function Ingredient(props: IngredientProps) {
  const wrapperStyle = classNames(styles.ingredientWrapper);
  const nameStyle = classNames(styles.name);
  const multiselectWrapper = classNames(styles.multiStyle);

  function toggleStater(currentState: boolean) {
    console.log(currentState);
  }

  function clickHandler() {
    console.log("i was clicked");
  }

  const isTogglable = props.togglable == true;

  return (
    <div className={wrapperStyle}>
      <div className={nameStyle}>{props.name}</div>
      {selectorHelper(props.selector, props.options)}
    </div>
  );
}

export default Ingredient;



function selectorHelper(selector: string, options: string[]) {
  switch (selector) {
    case "carousel":
      return <Carousel carouselOptions={options} />;
    case "dropdown":
      return <Dropdown dropdownOptions={options} />;
    case "multiselect":
      return <Multiselect multiOptions={options} />;
    case "checkbox":
      return <Checkbox />;
    case "radial":
      return <Radial />;
  }
}

