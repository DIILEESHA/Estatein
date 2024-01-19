import React from "react";
import "./archieve.css";

const Archivements = () => {
  return (
    <div className="arch_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>
      <h2 className="about_title">Our Achievements</h2>
      <p className="about_para me">
        Our story is one of continuous growth and evolution. We started as a
        small team with big dreams, determined to create a real estate platform
        that transcended the ordinary.
      </p>

      <div className="arch_grid">
        <div className="arch_sub_grid">
          <div className="arch_details">
            <h2 className="arch_title">3+ Years of Excellence</h2>
            <p className="arch_para">
              With over 3 years in the industry, we've amassed a wealth of
              knowledge and experience.
            </p>
          </div>
        </div>
        <div className="arch_sub_grid">
          <div className="arch_details">
            <h2 className="arch_title">Happy Clients</h2>
            <p className="arch_para">
              Our greatest achievement is the satisfaction of our clients. Their
              success stories fuel our passion for what we do.
            </p>
          </div>
        </div>
        <div className="arch_sub_grid">
          <div className="arch_details">
            <h2 className="arch_title">Industry Recognition</h2>
            <p className="arch_para">
              We've earned the respect of our peers and industry leaders, with
              accolades and awards that reflect our commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archivements;
