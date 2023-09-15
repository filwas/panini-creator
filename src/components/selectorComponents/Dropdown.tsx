import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import "@fontsource/oxygen-mono";
import DropdownArrow from "../icons/DropdownArrow";

interface DropdownProps {
  dropdownOptions: string[];
}

function Dropdown(props: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className="invisibleSapcer" />
      <button className="dropdown-toggle" onClick={toggleDropdown}>{selectedOption || props.dropdownOptions[0]}</button>
      <DropdownArrow className={styles.dropdownArrow} />
      {isOpen && (
        <ul className={styles.dropdownOptions}>
          {props.dropdownOptions.map((option, index) => (
            <li key={index} onClick={() => selectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
