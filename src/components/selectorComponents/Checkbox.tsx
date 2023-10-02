import React, { useState } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checkboxOptions: string[];
  onSelect: (choice: string, index: number) => void
}

const Checkbox = (props: CheckboxProps) => {
  const [itemStates, setItemStates] = useState(
    props.checkboxOptions.map(() => false)
  );

  const toggleItemState = (index: number) => {
    setItemStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !prevStates[index];
      return newStates;
    });
  };


  const returnedItemStates = itemStates.map((value, index) => value == true ? props.checkboxOptions[index] : "").filter(item => item != "");

  
  props.onSelect(returnedItemStates.toString(), 0)

  return (
    <div className={styles.checkboxTopWrap}>
      {props.checkboxOptions.map((item, index) => (
        <SingleCheckbox
          text={item}
          isOn={itemStates[index]}
          toggleFunc={() => toggleItemState(index)}
        />
      ))}
    </div>
  );
};

interface SingleCheckboxProps {
  text: string;
  isOn: boolean;
  toggleFunc: () => void;
}

const SingleCheckbox = (props: SingleCheckboxProps) => {
  return (
    <label className={styles.checkboxTextWrap}>
      <input type="checkbox" hidden={true} onChange={props.toggleFunc} />
      {props.text}
      <div className={styles.checkboxBoxWrap}>
        {props.isOn && <div className={styles.innerSquare} />}
      </div>
    </label>
  );
};

export default Checkbox;
