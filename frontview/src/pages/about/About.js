import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_grid">
        <div className="about_sub_grid">
          <div className="feautre_top_img">
            <img src="https://i.imgur.com/9wSj41l.png" alt="" />
          </div>
          <h2 className="about_title">Our Journey</h2>
          <p className="about_para">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
          <div className="properties_summary">
            <div className="property_card">
              <h2 className="property_count">200+</h2>
              <h3 className="property_title">happy customers</h3>
            </div>
            <div className="property_card">
              <h2 className="property_count">10K+</h2>
              <h3 className="property_title">Properties For Clients</h3>
            </div>
            <div className="property_card">
              <h2 className="property_count">16+</h2>
              <h3 className="property_title">Years of Experience</h3>
            </div>
          </div>
        </div>
        <div className="about_sub_grid">
          <div className="about_grid_img">
            <img src="https://i.imgur.com/nbmpD3a.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
