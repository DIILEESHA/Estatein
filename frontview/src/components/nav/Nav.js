import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_grid">
        <div className="nav_sub_grid">
          <div className="nav_logo">
            <Link to="/">
              <img src="https://i.imgur.com/2Zdmcay.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="nav_sub_grid">
          <ul className="nav_ul">
            <li className="nav_li">home</li>
            <li className="nav_li">
              <Link className="linka" to='/about'>
              about us
              </Link>
              </li>
            <li className="nav_li">properties</li>
            <li className="nav_li">services</li>
          </ul>
        </div>
        <div className="nav_sub_grid">
          <ul className="nav_ul">
            <li className="nav_li last">contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
