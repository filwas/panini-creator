import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dropdown from "../selectorComponents/Dropdown";
import Carousel from "../selectorComponents/Carousel";

import  {cheeseVariants}  from "../../data/cheese.js";
import  {breadVariants}  from "../../data/bread.js";

interface FormModuleProps {
  name: string;
}

function FormModule(props: FormModuleProps) {
  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>

      <Dropdown dropdownOptions={cheeseVariants}></Dropdown>
      <Carousel carouselOptions={breadVariants}></Carousel>
    </div>
  );
}

export default FormModule;
