import React, { useState } from "react";
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
import { SelectorType } from "../enums/enums";

interface IngredientProps {
  name: string;
  selector: SelectorType;
  options: string[];
  togglable?: boolean;
}

function Ingredient(props: IngredientProps) {
  const [adderArray, setAdderArray] = useState([""]);
  const [toggleState, setToggleState] = useState(true);

  function adderClickHandler(index: number) {
    if (index == 0) {
      setAdderArray([...adderArray, ""]);
    } else {
      setAdderArray(adderArray.slice(1));
    }
  }

  function toggleHandler() {
    setToggleState((previousState) => !previousState);
  }

  const wrapperStyle = classNames(styles.ingredientWrapper);
  const nameStyle = classNames(styles.name);
  const adderWrapStyle = classNames(
    styles.adderWrap,
    toggleState ? "" : styles.toggleOff
  );

  if (props.togglable) {
    return (
      <div className={wrapperStyle}>
        <div className={styles.nameToggleWrap}>
          <div className={nameStyle}>{props.name}</div>
          <Toggle onStateChange={toggleHandler} />
        </div>
        <div className={adderWrapStyle}>
          {adderArray.map((_, index) => (
            <div className={styles.singleAdder}>
              <Adder
                direction={index == 0 ? "add" : "subtract"}
                onClick={() => {
                  adderClickHandler(index);
                }}
              />
              {selectorHelper(props.selector, props.options)}
              {props.selector == SelectorType.Carousel && index != 0 && (
                <div className={styles.carouselSeparator} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={wrapperStyle}>
        <div className={nameStyle}>{props.name}</div>
        {selectorHelper(props.selector, props.options)}
      </div>
    );
  }
}

export default Ingredient;

function selectorHelper(selector: SelectorType, options: string[]) {
  switch (selector) {
    case SelectorType.Carousel:
      return <Carousel carouselOptions={options} />;
    case SelectorType.Dropdown:
      return <Dropdown dropdownOptions={options} />;
    case SelectorType.Multiselect:
      return <Multiselect multiOptions={options} />;
    case SelectorType.Checkbox:
      return <Checkbox checkboxOptions={options}/>;
    case SelectorType.Radial:
      return <Radial radialOptions={options}/>;
    case SelectorType.Textinput:
      return <TextInput placeholder={options[0]}/>
  }
}
