// Dropdown.js
import React, { useState } from "react";
import "../../seach/search.css";

const Dropdown = ({ iconSrc, title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sub_dropdowns">
      <div className="dropdown_sub" onClick={toggleDropdown}>
        <div className="dropdown_text">
          <img src={iconSrc} alt="" />
          <div className="ira">|</div>
          <h2 className="dropdown_title">{title}</h2>
        </div>
        <div className="drop_down_arrow">
          {isOpen ? (
            "-"
          ) : (
            <div>
              <img className="arrow" src="https://i.imgur.com/FfenEad.png" alt="" />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option, index) => (
            <div key={index} className="sub_options">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
