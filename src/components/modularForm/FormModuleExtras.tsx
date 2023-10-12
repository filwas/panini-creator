import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType, FormDataType } from "../enumFaces/enumFaces";

import Ingredient from "./Ingredient";

interface FormModuleExtrasProps {
  name: string;
}

function FormModuleExtras(props: FormModuleExtrasProps) {
  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>
      <Ingredient
        name="Egg"
        dataType={FormDataType.Egg}
        selector={SelectorType.Dropdown}
        togglable={true}
      />
      <Ingredient
        name="Spreads"
        dataType={FormDataType.Spreads}
        selector={SelectorType.Checkbox}
      />
      <Ingredient
        name="Serving"
        dataType={FormDataType.Serving}
        selector={SelectorType.Radial}
      />
      <Ingredient
        name="Topping"
        dataType={FormDataType.Topping}
        selector={SelectorType.Checkbox}
      />
      <div className={styles.lastMargin} />
    </div>
  );
}

export default FormModuleExtras;
