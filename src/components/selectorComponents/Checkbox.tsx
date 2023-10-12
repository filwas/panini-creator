import React, { useState } from "react";
import styles from "./Checkbox.module.css";
import { data } from "../../data/Data";
import { useFormContext } from "react-hook-form";
import { FormDataType } from "../enumFaces/enumFaces";

interface CheckboxProps {
  formField: FormDataType
}

const Checkbox = (props: CheckboxProps) => {
  const context = useFormContext();
  const fieldValues = context.watch(props.formField)
  const options = data(props.formField);
  const [refresher, refreshState] = useState(true)


  const toggleItemState = (index: number) => {
    context.setValue(`${props.formField}[${index}]`, fieldValues[index] ? "" : options[index])
    refreshState(!refresher)
  };


  return (
    <div className={styles.checkboxTopWrap}>
      {options.map((item, index) => (
        <SingleCheckbox
          text={item}
          isOn={fieldValues[index]}
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
