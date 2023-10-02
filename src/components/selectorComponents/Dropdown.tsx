import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import "@fontsource/oxygen-mono";
import DropdownArrow from "../icons/DropdownArrow";
import classNames from "classnames";
import { FormDataType } from "../enumFaces/enumFaces";
import { useFormContext } from "react-hook-form";

interface DropdownProps {
  dropdownOptions: string[];
  ID: number,
  onSelect: (choice: string, index: number) => void
}

function Dropdown(props: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<string>(
    props.dropdownOptions[0]
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
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

  props.onSelect(selectedOption, props.ID)

  return (
    <div className={dropdownWrapper}>
      <div className={firstBarWrapper}>
        <div className={styles.invisibleSapcer} />
        <button className={dropdownToggle} onClick={toggleDropdown}>
          {selectedOption}
        </button>
        <DropdownArrow className={dropdownArrow} />
      </div>
      {isOpen && (
        <div className={dropdownOptionsWrapper}>
          {props.dropdownOptions.map(
            (option, index) =>
              option !== selectedOption && (
                <div
                  className={dropdownOption}
                  onClick={() => selectOption(option)}
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
