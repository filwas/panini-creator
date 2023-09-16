import React from "react";
import styles from "./Ingredient.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";

interface IngredientProps {
  name: string;
  selector: 'carousel' | 'dropdown' | 'multiselect' | 'checkbox' | 'radial';
  toggler: boolean;
  adder: boolean;
  options: string[];
}

function Ingredient(props: IngredientProps) {
  return (
    <div className={styles.ingredientWrapper}>
      <div className={styles.ingredientName}>{props.name}</div>
    </div>
  );
}

export default Ingredient;
