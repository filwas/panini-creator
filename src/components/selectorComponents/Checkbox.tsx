import React, { useState } from "react";
import styles from "./Checkbox.module.css";
import { FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";

interface CheckboxProps {
  checkboxOptions: string[];
  dataType: FormDataType;
}

const Checkbox = (props: CheckboxProps) => {
  const { setValue } = useFormContext();
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

  if (itemStates.filter((e) => e).length > 0) {
    if (props.dataType != FormDataType.Cutlery && props.dataType != FormDataType.Napkins) {
      setValue(
        props.dataType,
        props.checkboxOptions.filter((_, index) => itemStates[index] != false)
      );
    } else{
      setValue(props.dataType, true)
    }
  } else {
    setValue(props.dataType, false);
  }

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
