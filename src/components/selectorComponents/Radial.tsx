import React, { useState } from "react";
import styles from "./Radial.module.css";
import classNames from "classnames";
import { FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";
import { data } from "../../data/Data";

interface RadialProps {
  formField: FormDataType;
}

const Radial = (props: RadialProps) => {
  const context = useFormContext();
  const options = data(props.formField);
  const currentSelected = context.watch(props.formField);
  const [refresher, refreshState] = useState(true)

  const clickHandler = (item: string) => {
    context.setValue(`${props.formField}[0]`, item);
    refreshState(!refresher)
  };

  return (
    <div className={styles.radialTopWrapper}>
      {options.map((item, index) => (
        <SingleRadial
          text={item}
          initialState={item == currentSelected}
          key={index}
          onClick={() => {
            clickHandler(item);
          }}
        />
      ))}
    </div>
  );
};

export default Radial;

interface SingleRadialProps {
  initialState: boolean;
  text: string;
  onClick: () => void;
}

const SingleRadial = (props: SingleRadialProps) => {
  return (
    <div className={styles.radialNameWrap} onClick={props.onClick} data-testid={props.initialState ? "textValue" : "notSelected"}>
      <div className={styles.radialCircle}>
        <div className={classNames(props.initialState && styles.radialDot)} />
      </div>
      {props.text}
    </div>
  );
};
