import React from "react";
import "./propertyheader.css";
import Search from "./seach/Search";

const PropertyHeader = () => {
  return (
    <div className="property_container">
        <div className="property_img">
          <h2 className="about_title">Find Your Dream Property</h2>
          <p className="about_para me">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
      <div className="prt">
      </div>
    </div>
  );
};

export default PropertyHeader;
