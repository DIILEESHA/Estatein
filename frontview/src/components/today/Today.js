import React from "react";
import "./today.css";
import Section from '../velo/Section'
const Today = () => {
  return (
    <div className="to">
      <div className="today">
        <div className="today_img">
          <div className="too">
            <h2 className="feature_title">
              Start Your Real Estate Journey Today
            </h2>

            <div className="feature_para_details">
              <p className="feature_para">
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Estatein is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </p>

              <div className="feature_btn">
                <button>Explore Properties</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
