import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

import { SelectorType, FormDataType, PaniniFormData } from "../enumFaces/enumFaces";

import { breadVariants } from "../../data/bread.js";
import { cheeseVariants } from "../../data/cheese.js";
import { meatVariants } from "../../data/meat.js";
import { dressingVariants } from "../../data/dressing.js";
import { vegetableVariants } from "../../data/vegetable.js";

import Ingredient from "./Ingredient";
import { useFormContext } from "react-hook-form/dist/useFormContext";

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
        options={breadVariants}
      />
      <Ingredient
        name="Cheese"
        dataType={FormDataType.Cheese}
        selector={SelectorType.Dropdown}
        options={cheeseVariants}
        togglable={true}
      />
      <Ingredient
        name="Meat"
        dataType={FormDataType.Meat}
        selector={SelectorType.Dropdown}
        options={meatVariants}
        togglable={true}
      />
      <Ingredient
        name="Dressing"
        dataType={FormDataType.Dressing}
        selector={SelectorType.Carousel}
        options={dressingVariants}
        togglable={true}
      />
      <Ingredient
        name="Vegetable"
        dataType={FormDataType.Vegetables}
        selector={SelectorType.Multiselect}
        options={vegetableVariants}
      />
      <div className={styles.lastMargin} />
    </div>
  );
}

export default FormModuleBase;
