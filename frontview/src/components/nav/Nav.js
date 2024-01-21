import React from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_grid">
        <div className="nav_sub_grid">
          <div className="nav_logo">
            <NavLink to="/">
              <img src="https://i.imgur.com/2Zdmcay.png" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="nav_sub_grid">
          <ul className="nav_ul">
            <li className="nav_li">
              <NavLink className="linka" to="/">
                home
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink className="linka" to="/about">
                about us
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink className="linka" to="/property">
                properties
              </NavLink>
            </li>
            <li className="nav_li">services</li>
          </ul>
        </div>
        <div className="nav_sub_grid">
          <ul className="nav_ul">
            <li className="nav_li last">
              <Link className="linka" to='/contact'>contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
