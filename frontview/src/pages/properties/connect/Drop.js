import React, { useState } from "react";
import "../propertyHeader/seach/search.css";
import "./connect.css";

const Dropdown = ({ iconSrc, title, options, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onOptionSelect(option);
    toggleDropdown();
  };

  return (
    <div className="sub_dropdowns sub">
      <div className="dropdown_sub" onClick={toggleDropdown}>
        <div className="dropdown_text">
          <div className="ira">|</div>
          <h2 className="dropdown_title mer">{title}</h2>
        </div>
        <div className="drop_down_arrow">
          {isOpen ? (
            "-"
          ) : (
            <div>
              <img
                className="arrow"
                src="https://i.imgur.com/FfenEad.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              className="sub_options"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
