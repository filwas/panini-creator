import React, { useState } from "react";
import styles from "./Multiselect.module.css";
import classNames from "classnames";
import { FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";

interface MultiselectProps {
  multiOptions: string[];
  dataType: FormDataType;
}

const Multiselect = (props: MultiselectProps) => {
  const { setValue } = useFormContext();
  const [itemStates, setItemStates] = useState(
    props.multiOptions.map(() => false)
  );

  const toggleItemState = (index: number) => {
    setItemStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  itemStates.filter((e) => e).length > 0 &&
    setValue(
      props.dataType,
      props.multiOptions.filter((_, index) => itemStates[index] != false)
    );

  return (
    <div className={styles.multiTopWrap}>
      {props.multiOptions.map((item, index) => (
        <MultiselectItem
          key={props.dataType + "-" + index}
          text={item}
          isOn={itemStates[index]}
          toggleFunc={() => {
            toggleItemState(index);
          }}
          dataType={props.dataType}
          arrayPos={index}
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
  dataType: FormDataType;
  arrayPos: number;
}

const MultiselectItem = (props: MultiselectItemProps) => {
  const clickHandler = () => {
    props.toggleFunc();
  };

  const selectStyle = classNames(
    styles.multiItemWrap,
    props.isOn ? styles.on : styles.off
  );

  return (
    <div className={selectStyle} onClick={clickHandler}>
      {props.text}
    </div>
  );
};
