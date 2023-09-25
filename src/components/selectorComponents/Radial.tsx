import React, { useState } from "react";
import styles from "./Radial.module.css";
import classNames from "classnames";
import { FormDataType } from "../enumFaces/enumFaces";
import  { useFormContext } from "react-hook-form"

interface RadialProps {
  radialOptions: string[];
  dataType: FormDataType;
}

const Radial = (props: RadialProps) => {
  const { setValue } = useFormContext()
  const [currentSelected, setcurrentSelected] = useState(0)

  const clickHandler = (index: number) => {    
    setcurrentSelected(index)
  };

  setValue(props.dataType, props.radialOptions[currentSelected])
  return (
    <div className={styles.radialTopWrapper}>
      {props.radialOptions.map((item, index) => (
        <SingleRadial text={item} initialState={index == currentSelected ? true : false} key={index}  onClick={()=>{clickHandler(index)}}/>
      ))}
    </div>
  );
};

export default Radial;

interface SingleRadialProps {
  initialState: boolean;
  text: string;
  onClick: ()=>void;
}

const SingleRadial = (props: SingleRadialProps) => {

  const clickHandler = () => {
    props.onClick()
  };

  return (
    <div className={styles.radialNameWrap} onClick={clickHandler}>
      <div className={styles.radialCircle} >
        <div className={classNames(props.initialState && styles.radialDot)} />
      </div>
      {props.text}
    </div>
  );
};
