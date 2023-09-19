import React from "react";
import styles from "./FormModuleBase.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

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
      <Ingredient name="Bread" selector="carousel" options={breadVariants} />
      <Ingredient
        name="Cheese"
        selector="dropdown"
        options={cheeseVariants}
        togglable={true}
      />
      <Ingredient
        name="Meat"
        selector="dropdown"
        options={meatVariants}
        togglable={true}
      />
      <Ingredient
        name="Dressing"
        selector="carousel"
        options={dressingVariants}
        togglable={true}
      />
      <Ingredient
        name="Vegetable"
        selector="multiselect"
        options={vegetableVariants}
      />
      <div className={styles.lastMargin} />
    </div>
  );
}

export default FormModuleBase;
