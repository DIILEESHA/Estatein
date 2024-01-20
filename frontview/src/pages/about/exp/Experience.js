import React from "react";
import "./exp.css";
import data from "./expData.json";

const Experience = () => {
  return (
    <div className="exp_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>
      <h2 className="about_title">Navigating the Estatein Experience</h2>
      <p className="about_para me">
        At Estatein, we've designed a straightforward process to help you find
        and purchase your dream property with ease. Here's a step-by-step guide
        to how it all works.
      </p>

      <div className="exp_grid">
        {data.map((exp, index) => (
          <div key={index._id} className="exp_sub_grid">
            <div className="expo">
        <h2 className="exp_step">{exp.step}</h2>
            <h2 className="exp_title">{exp.title}</h2>
            <p className="exp_para">{exp.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
