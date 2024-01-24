import React from "react";
import "./nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    const scrollDuration = 500; // adjust as needed
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <div className="nav_container">
      <div className="nav_grid">
        <div className="nav_sub_grid">
          <div className="nav_logo">
            <Link to="/" onClick={scrollToTop}>
              <img src="https://i.imgur.com/2Zdmcay.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="nav_sub_grid">
          <ul className="nav_ul">
            <li className="nav_li">
              <NavLink
                className="linka"
                to="/"
                onClick={() => handleNavLinkClick("/")}
              >
                home
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink
                className="linka"
                to="/about"
                onClick={() => handleNavLinkClick("/about")}
              >
                about us
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink
                className="linka"
                to="/property"
                onClick={() => handleNavLinkClick("/property")}
              >
                properties
              </NavLink>
            </li>
            <li className="nav_li">
              <NavLink
                className="linka"
                to="/service"
                onClick={() => handleNavLinkClick("/service")}
              >
                services
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav_sub_grid">
          <ul className="nav_ul">
            <li className="nav_li last">
              <Link
                className="linka"
                to="/contact"
                onClick={() => handleNavLinkClick("/contact")}
              >
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
