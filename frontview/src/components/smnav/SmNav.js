import React, { useState } from "react";
import "./smnav.css";
import { MdClose } from "react-icons/md";

const SmNav = ({closer}) => {
 
  return (
    <div className="smnav_container">
      <div className="smnav_details">
        <h2 className="smnav_title">
          ✨Discover Your Dream Property with Estatein
        </h2>
        <button className="smnav_btn">learn more</button>
        <div className="close_btn" onClick={closer}>
          <div
            className="close_btns"
            // style={{ top: closer ? "0px" : "-100vh" }}
          >
            <MdClose className="close_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmNav;
