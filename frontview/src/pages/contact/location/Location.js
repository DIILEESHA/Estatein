import React, { useState } from "react";
import "./location.css";
import International from "./International";
import { CSSTransition } from "react-transition-group";
import All from "./All";
import Regional from "./Regional";
import { motion, AnimatePresence } from "framer-motion";

const Location = () => {
  const [selectedType, setSelectedType] = useState("all");

  const handleTypeChange = (event, type) => {
    event.preventDefault();
    setSelectedType(type);
  };
  return (
    <div className="location_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>

      <h2 className="feature_title">Discover Our Office Locations</h2>

      <div className="feature_para_details">
        <p className="feature_para">
          Estatein is here to serve you across multiple locations. Whether
          you're looking to meet our team, discuss real estate opportunities, or
          simply drop by for a chat, we have offices conveniently located to
          serve your needs. Explore the categories below to find the Estatein
          office nearest to you
        </p>
      </div>

      <ul className="location_ul">
        <li className="location_li">
          <a
            href="/all"
            className="linka"
            onClick={(event) => handleTypeChange(event, "all")}
          >
            all
          </a>
        </li>
        <li className="location_li">
          <a
            href="/regional"
            className="linka"
            onClick={(event) => handleTypeChange(event, "regional")}
          >
            regional
          </a>
        </li>
        <li className="location_li">
          <a
            href="/international"
            className="linka"
            onClick={(event) => handleTypeChange(event, "international")}
          >
            international
          </a>
        </li>
      </ul>
      <CSSTransition
        in={selectedType === "all"}
        timeout={500}
        classNames="location_fade"
        unmountOnExit
      >
        <All />
      </CSSTransition>

      <CSSTransition
        in={selectedType === "regional"}
        timeout={500}
        classNames="location_fade"
        unmountOnExit
      >
        <International />
      </CSSTransition>

      <CSSTransition
        in={selectedType === "international"}
        timeout={500}
        classNames="location_fade"
        unmountOnExit
      >
        <Regional />
      </CSSTransition>
    </div>
  );
};

export default Location;
