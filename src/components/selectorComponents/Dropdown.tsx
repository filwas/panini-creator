import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import "@fontsource/oxygen-mono";
import DropdownArrow from "../icons/DropdownArrow";
import classNames from "classnames";
import { FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";
import { data } from "../../data/Data";

interface DropdownProps {
  formField: FormDataType;
  ID: number;
}

function Dropdown(props: DropdownProps) {
  const context = useFormContext();
  const options = data(props.formField);
  const displayValue = context.watch(props.formField)[props.ID];
  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    context.setValue(`${props.formField}[${props.ID}]`, option);
    setIsOpen(false);
  };

  const dropdownWrapper = classNames(styles.dropdownWrapper);
  const firstBarWrapper = classNames(
    styles.rectangleStyle,
    styles.firstBarWrapper
  );
  const dropdownToggle = classNames(styles.dropdownToggle, dropdownWrapper);
  const dropdownArrow = classNames(
    styles.dropdownArrow,
    isOpen ? styles.dropdownArrowToggled : ""
  );
  const dropdownOptionsWrapper = classNames(styles.dropdownOptionsWrapper);
  const dropdownOption = classNames(
    styles.rectangleStyle,
    styles.dropdownOption,
    dropdownWrapper
  );

  return (
    <div className={dropdownWrapper}>
      <div className={firstBarWrapper}>
        <div className={styles.invisibleSapcer} />
        <button className={dropdownToggle} onClick={toggleDropdown}>
        <p data-testid={"dropdown-"+props.formField+"-"+"textValue"}>{displayValue}</p>
        </button>
        <DropdownArrow className={dropdownArrow} />
      </div>
      {isOpen && (
        <div className={dropdownOptionsWrapper}>
          {options.map(
            (option, index) =>
              option !== displayValue && (
                <div
                  data-testid={"dropdown-"+props.formField+"-option-"+index}
                  className={dropdownOption}
                  onClick={() => selectOption(option)}
                  key={index}
                >
                  {option}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
