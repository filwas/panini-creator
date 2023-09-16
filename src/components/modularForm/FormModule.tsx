import React, { useState } from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dropdown from "../selectorComponents/Dropdown";
import Carousel from "../selectorComponents/Carousel";
import Toggle from "../selectorComponents/Toggle";

import  {cheeseVariants}  from "../../data/cheese.js";
import  {breadVariants}  from "../../data/bread.js";

interface FormModuleProps {
  name: string;
}

function FormModule(props: FormModuleProps) {

  function toggleStater(currentState: boolean){
    console.log(currentState);
  } 

  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>

      <Dropdown dropdownOptions={cheeseVariants}></Dropdown>
      <Carousel carouselOptions={breadVariants}></Carousel>
      <Toggle onStateChange={toggleStater} />
      <div></div>
    </div>
  );
}

export default FormModule;
