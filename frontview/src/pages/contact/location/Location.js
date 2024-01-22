import React, { useState } from "react";
import "./location.css";
import International from "./International";
import All from "./All";
import Regional from "./Regional";

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
      {selectedType === "all" && <All />}
      {selectedType === "regional" && <International />}
      {selectedType === "international" && <Regional />}
    </div>
  );
};

export default Location;
