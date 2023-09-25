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
  PaniniFormData,
} from "../enumFaces/enumFaces";
import { useFormContext, useFieldArray } from "react-hook-form";

interface IngredientProps {
  name: string;
  dataType: FormDataType;
  selector: SelectorType;
  options: string[];
  togglable?: boolean;
  textOptions?: { placeholder: string; errorMessage: string; maxChars: number };
}

function Ingredient(props: IngredientProps) {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "ingredientList",
  });
  const [adderArray, setAdderArray] = useState([0]);
  const [countID, setCountID] = useState(1);
  const [toggleState, setToggleState] = useState(true);
  const [elementStates, setElementStates] = useState([]);

  function adderClickHandler(ID: number) {
    if (ID === 0) {
    } else {
      setAdderArray(adderArray.filter((item) => item !== ID));
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

  console.log(fields)
  if (props.togglable) {
    return (
      <div className={wrapperStyle}>
        <div className={styles.nameToggleWrap}>
          <div className={nameStyle}>{props.name}</div>
          <Toggle onStateChange={toggleHandler} />
        </div>
        <div className={adderWrapStyle}>
          {props.togglable && adderArray.map((field, index) => (
              <div className={styles.singleAdder} key={field}>
                <input
                  hidden
                  key={field}
                  value={elementStates}
                  {...register(props.dataType)}
                />
                <Adder
                  direction={index == 0 ? "add" : "subtract"}
                  onClick={() => {
                    adderClickHandler(index);
                  }}
                />
                {selectorHelper(
                  props.selector,
                  props.dataType,
                  props.options,
                  elementStates,
                  setElementStates,
                  props.textOptions
                )}
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
        <input hidden value={elementStates} {...register(props.dataType)} />
        <div className={nameStyle}>{props.name}</div>
        {selectorHelper(
          props.selector,
          props.dataType,
          props.options,
          elementStates,
          setElementStates,
          props.textOptions
        )}
      </div>
    );
  }
}

export default Ingredient;

function selectorHelper(
  selector: SelectorType,
  dataType: FormDataType,
  options: string[],
  elementState: any,
  setElementState: any,
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
        <Carousel
          carouselOptions={options}
          dataType={dataType}
          retElement={setElementState}
        />
      );
    case SelectorType.Dropdown:
      return <Dropdown dropdownOptions={options} dataType={dataType} />;
    case SelectorType.Multiselect:
      return <Multiselect multiOptions={options} dataType={dataType} />;
    case SelectorType.Checkbox:
      return <Checkbox checkboxOptions={options} dataType={dataType} />;
    case SelectorType.Radial:
      return <Radial radialOptions={options} dataType={dataType} />;
    case SelectorType.Textinput:
      return (
        <TextInput textOptions={maybeDefaultOptions} dataType={dataType} />
      );
  }
}
/**
 * {toggleState &&
            adderArray.map((item, index) => (
              <div className={styles.singleAdder} key={item}>
                <input hidden value={elementStates} {...register(props.dataType)} />
                <Adder
                  direction={index == 0 ? "add" : "subtract"}
                  onClick={() => {
                    adderClickHandler(item);
                  }}
                />
                {selectorHelper(
                  props.selector,
                  props.dataType,
                  props.options,
                  elementStates,
                  setElementStates,
                  props.textOptions
                )}
                {props.selector == SelectorType.Carousel && index != 0 && (
                  <div className={styles.carouselSeparator} />
                )}
              </div>
            ))}
 */
