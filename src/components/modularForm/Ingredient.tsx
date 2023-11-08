
import React, { useEffect, useState } from "react";
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
import { SelectorType, FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";
import { data } from "../../data/Data";

interface IngredientProps {
  name: string;
  dataType: FormDataType;
  selector: SelectorType;
  togglable?: boolean;
  textOptions?: { placeholder: string; errorMessage: string; maxChars: number };
}

function Ingredient(props: IngredientProps) {
  const formContext = useFormContext();

  const fieldData = formContext.watch(props.dataType) as string[];
  const [refresher, toggleRefresher] = useState(true);
  const [toggleState, setToggleState] = useState(true);

  function adderClickHandler(ID: number) {
    if (ID === 0) {
      const newData = [...fieldData, data(props.dataType)[0]];
      formContext.setValue(`${props.dataType}`, newData);
    } else {
      formContext.setValue(`${props.dataType}[${ID}]`, "");
      toggleRefresher(!refresher);
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
      <div className={wrapperStyle} data-testid={"ingredient-"+props.dataType+"-"+props.selector}> 
        <div className={styles.nameToggleWrap}>
          <div className={nameStyle}>{props.name}</div>
          <Toggle onStateChange={toggleHandler} state={toggleState} />
        </div>
        <div className={adderWrapStyle}>
          {toggleState &&
            fieldData.map(
              (item, index) =>
                item != "" && (
                  <div className={styles.singleAdder} key={index}>
                    <Adder
                      direction={index == 0 ? "add" : "subtract"}
                      onClick={() => {
                        adderClickHandler(index);
                      }}
                    />
                    {selectorHelper(
                      props.dataType,
                      props.selector,
                      index,
                      props.textOptions
                    )}
                    {props.selector == SelectorType.Carousel && index != 0 && (
                      <div className={styles.carouselSeparator} />
                    )}
                  </div>
                )
            )}
        </div>
      </div>
    );
  } else {
    return (
      <div className={wrapperStyle} data-testid={"ingredient-"+props.dataType+"-"+props.selector}>
        <div className={nameStyle}>{props.name}</div>
        {selectorHelper(props.dataType, props.selector, 0, props.textOptions)}
      </div>
    );
  }
}

export default Ingredient;

function selectorHelper(
  dataType: FormDataType,
  selector: SelectorType,
  index: number,
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
      return <Carousel formField={dataType} ID={index} />;
    case SelectorType.Dropdown:
      return <Dropdown formField={dataType} ID={index} />;
    case SelectorType.Multiselect:
      return <Multiselect formField={dataType} />;
    case SelectorType.Checkbox:
      return <Checkbox formField={dataType} />;
    case SelectorType.Radial:
      return <Radial formField={dataType} />;
    case SelectorType.Textinput:
      return (
        <TextInput formField={dataType} textOptions={maybeDefaultOptions} />
      );
  }
}
