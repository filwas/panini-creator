import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType, FormDataType } from "../enumFaces/enumFaces";

import Ingredient from "./Ingredient";

interface FormModuleBaseProps {
  name: string;
}

function FormModuleBase(props: FormModuleBaseProps) {


  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>
      <Ingredient
        name="Bread"
        dataType={FormDataType.Bread}
        selector={SelectorType.Carousel}
      />
      <Ingredient
        name="Cheese"
        dataType={FormDataType.Cheese}
        selector={SelectorType.Dropdown}
        togglable={true}
      />
      <Ingredient
        name="Meat"
        dataType={FormDataType.Meat}
        selector={SelectorType.Dropdown}
        togglable={true}
      />
      <Ingredient
        name="Dressing"
        dataType={FormDataType.Dressing}
        selector={SelectorType.Carousel}
        togglable={true}
      />
      <Ingredient
        name="Vegetable"
        dataType={FormDataType.Vegetables}
        selector={SelectorType.Multiselect}
      />
      <div className={styles.lastMargin} />
    </div>
  );
}

export default FormModuleBase;
