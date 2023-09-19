import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType } from "../enums/enums";

import { eggVariants } from "../../data/egg.js";
import { servingVariants } from "../../data/serving.js";
import { spreadVariants } from "../../data/spread.js";
import { toppingVariants } from "../../data/topping.js";

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
        selector={SelectorType.Dropdown}
        options={eggVariants}
        togglable={true}
      />
      <Ingredient
        name="Spreads"
        selector={SelectorType.Checkbox}
        options={spreadVariants}
      />
      <Ingredient
        name="Serving"
        selector={SelectorType.Radial}
        options={servingVariants}
      />
      <Ingredient
        name="Topping"
        selector={SelectorType.Checkbox}
        options={toppingVariants}
      />
      <div className={styles.lastMargin} />
    </div>
  );
}

export default FormModuleExtras;
