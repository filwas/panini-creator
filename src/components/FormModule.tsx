import React from "react";
import styles from "./FormModule.module.css";
import "@fontsource/instrument-serif";
import "@fontsource/oxygen-mono";
import Dropdown from "./selectorComponents/Dropdown";

interface FormModuleProps {
  name: string;
}

function FormModule(props: FormModuleProps) {
  return (
    <div className={styles.moduleTopWrapper}>
      <div className={styles.moduleTitle}>{props.name}</div>

      <Dropdown dropdownOptions={['alfa', 'beta']}></Dropdown>
    </div>
  );
}

export default FormModule;
