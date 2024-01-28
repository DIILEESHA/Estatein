import React, { useState } from "react";
import "./nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";

const Nav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
              <img src="https://i.imgur.com/gg6ERAx.png" alt="" />
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
            <div className="nav_lis" onClick={() => setOpen(!open)}>
              {open ? (
                <>
                  <img src="https://i.imgur.com/2BR135G.png" alt="" />
                </>
              ) : (
                <>
                  <img src="https://i.imgur.com/gCNjZrm.png" alt="" />
                </>
              )}
            </div>
            <div className="nav_mobile_ul_section">
              <ul
                className="nav_mobile_ul"
                style={{ right: open ? "0px" : "-500vw" }}
              >
                <div className="nav_logos">
                  <img
                    width={100}
                    height={50}
                    style={{ objectFit: "contain" }}
                    src="https://i.imgur.com/gg6ERAx.png"
                    alt=""
                  />
                </div>
                <p className="nav_mobile_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci, fugit.
                </p>

                <div className="nav_mobile_line"></div>
                <div className="social_mobile_icons">
                  <CiFacebook className="socil_mobile"/>
                  <CiTwitter className="socil_mobile"/>
                  <CiYoutube className="socil_mobile"/>
                </div>
                <section>
                  <li className="nav_mobile_li">home</li>
                  <li className="nav_mobile_li">about</li>
                  <li className="nav_mobile_li">contact</li>
                  <li className="nav_mobile_li">property</li>
                  <li className="nav_mobile_li">services</li>
                </section>
                <div className="copyright">Design & Developed by DILEESHA</div>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
