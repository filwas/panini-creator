import React, { useEffect, useState } from "react";
import styles from "./Multiselect.module.css";
import classNames from "classnames";
import { FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";
import { data } from "../../data/Data";

interface MultiselectProps {
  formField: FormDataType;
}

const Multiselect = (props: MultiselectProps) => {
  const context = useFormContext();
  const fieldValues = context.watch(props.formField)
  const options = data(props.formField);
  const [refresher, refreshState] = useState(true)


  const toggleItemState = (index: number) => {
    context.setValue(`${props.formField}[${index}]`, fieldValues[index] ? "" : options[index])

    refreshState(!refresher)
  };



  return (
    <div className={styles.multiTopWrap}>
      {options.map((item, index) => (
        <MultiselectItem
          key={"multi-" + index}
          text={item}
          isOn={fieldValues[index]}
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
