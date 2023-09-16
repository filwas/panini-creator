import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dropdown from "../selectorComponents/Dropdown";

import { cheeseVariants } from "../../data/cheese.js";

interface FormModuleProps {
  name: string;
}

function FormModule(props: FormModuleProps) {
  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>

      <Dropdown dropdownOptions={cheeseVariants}></Dropdown>
    </div>
  );
}

export default FormModule;
