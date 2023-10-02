import React, { useState } from "react";
import styles from "./Multiselect.module.css";
import classNames from "classnames";
import { FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";

interface MultiselectProps {
  multiOptions: string[];
  onSelect: (choice: string, index: number) => void
}

const Multiselect = (props: MultiselectProps) => {
  const [itemStates, setItemStates] = useState(
    props.multiOptions.map(() => false)
  );

  const toggleItemState = (index: number) => {
    setItemStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !prevStates[index];
      return newStates;
    });
  };
  const returnStates = itemStates.map((value, index) => value == true ? props.multiOptions[index] : "").filter(item => item != "");
  
  props.onSelect(returnStates.toString(), 0)
  return (
    <div className={styles.multiTopWrap}>
      {props.multiOptions.map((item, index) => (
        <MultiselectItem
          key={"multi-" + index}
          text={item}
          isOn={itemStates[index]}
          toggleFunc={() => {
            toggleItemState(index);
          }}
        />
      ))}
    </div>
  );
};

export default Multiselect;

interface MultiselectItemProps {
  text: string;
  isOn: boolean;
  toggleFunc: () => void;
}

const MultiselectItem = (props: MultiselectItemProps) => {

  const selectStyle = classNames(
    styles.multiItemWrap,
    props.isOn ? styles.on : styles.off
  );

  return (
    <div className={selectStyle} onClick={props.toggleFunc}>
      {props.text}
    </div>
  );
};
