import React, { useId, useState } from "react";
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
import {
  SelectorType,
  FormDataType,
} from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";

interface IngredientProps {
  name: string;
  dataType: FormDataType;
  selector: SelectorType;
  options: string[];
  togglable?: boolean;
  textOptions?: { placeholder: string; errorMessage: string; maxChars: number };
}

function Ingredient(props: IngredientProps) {
  const { setValue } = useFormContext();
  const [adderArray, setAdderArray] = useState([0]);
  const [adderCount, setAdderCount] = useState(1);
  const [toggleState, setToggleState] = useState(true);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  function adderClickHandler(ID: number) {
    if (ID === 0) {
      setAdderArray((prevArray) => [...prevArray, adderCount]);
      setAdderCount((prevCount) => prevCount + 1);
    } else {
      setAdderArray(adderArray.filter((item) => item !== ID));
    }
  }

  function toggleHandler() {
    setToggleState((previousState) => !previousState);
  }

  const userChoiceHandler = (choice: string, index: number) => {
    if (choice != selectedValues[index]) {// this if prevents an infinite loop
      let updatedChoices = [...selectedValues];
      updatedChoices[index] = choice;
      setSelectedValues(updatedChoices);
    }
  };

  const wrapperStyle = classNames(styles.ingredientWrapper);
  const nameStyle = classNames(styles.name);
  const adderWrapStyle = classNames(
    styles.adderWrap,
    toggleState ? "" : styles.toggleOff
  );

  setValue(
    props.dataType,
    toggleState ? selectedValues.slice(0, adderArray.length) : []
  );

  if (props.togglable) {
    return (
      <div className={wrapperStyle}>
        <div className={styles.nameToggleWrap}>
          <div className={nameStyle}>{props.name}</div>
          <Toggle onStateChange={toggleHandler} />
        </div>
        <div className={adderWrapStyle}>
          {toggleState &&
            adderArray.map((item, index) => (
              <div className={styles.singleAdder} key={item}>
                <Adder
                  direction={item == 0 ? "add" : "subtract"}
                  onClick={() => {
                    adderClickHandler(item);
                  }}
                />
                {selectorHelper(
                  props.selector,
                  props.options,
                  index,
                  userChoiceHandler,
                  props.textOptions
                )}
                {props.selector == SelectorType.Carousel && item != 0 && (
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
        {selectorHelper(
          props.selector,
          props.options,
          0,
          userChoiceHandler,
          props.textOptions
        )}
      </div>
    );
  }
}

export default Ingredient;

function selectorHelper(
  selector: SelectorType,
  options: string[],
  index: number,
  userSelect: (choice: string, index: number) => void,
  textOptions?: { placeholder: string; errorMessage: string; maxChars: number }
) {
  const maybeDefaultOptions = textOptions
    ? textOptions
    : {
        placeholder: "default placeholder",
        errorMessage: "default error",
        maxChars: 35,
      };
  switch (selector) {
    case SelectorType.Carousel:
      return (
        <Carousel carouselOptions={options} ID={index} onSelect={userSelect} />
      );
    case SelectorType.Dropdown:
      return (
        <Dropdown dropdownOptions={options} ID={index} onSelect={userSelect} />
      );
    case SelectorType.Multiselect:
      return <Multiselect multiOptions={options} onSelect={userSelect} />;
    case SelectorType.Checkbox:
      return <Checkbox checkboxOptions={options} onSelect={userSelect} />;
    case SelectorType.Radial:
      return <Radial radialOptions={options} onSelect={userSelect} />;
    case SelectorType.Textinput:
      return (
        <TextInput textOptions={maybeDefaultOptions} onSelect={userSelect} />
      );
  }
}
