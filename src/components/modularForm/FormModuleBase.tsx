import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType } from "../enums/enums";

import { breadVariants } from "../../data/bread.js";
import { cheeseVariants } from "../../data/cheese.js";
import { meatVariants } from "../../data/meat.js";
import { dressingVariants } from "../../data/dressing.js";
import { vegetableVariants } from "../../data/vegetable.js";

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
        selector={SelectorType.Carousel}
        options={breadVariants}
      />
      <Ingredient
        name="Cheese"
        selector={SelectorType.Dropdown}
        options={cheeseVariants}
        togglable={true}
      />
      <Ingredient
        name="Meat"
        selector={SelectorType.Dropdown}
        options={meatVariants}
        togglable={true}
      />
      <Ingredient
        name="Dressing"
        selector={SelectorType.Carousel}
        options={dressingVariants}
        togglable={true}
      />
      <Ingredient
        name="Vegetable"
        selector={SelectorType.Multiselect}
        options={vegetableVariants}
      />
      <div className={styles.lastMargin} />
    </div>
  );
}

export default FormModuleBase;
