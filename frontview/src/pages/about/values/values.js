import React from "react";
import "./value.css";

const values = () => {
  return (
    <div className="value_container">
      <div className="value_grid">
        <div className="value_sub_grid">
          <div className="feautre_top_img">
            <img src="https://i.imgur.com/9wSj41l.png" alt="" />
          </div>
          <h2 className="about_title">Our Values</h2>
          <p className="about_para">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div className="value_sub_grid">
          <div className="value_box">
            <div className="value_details">
              <div className="value_ke_detail_box">
                <div className="value_img_section">
                  <div className="value_key_img">
                    <img
                      loading="lazy"
                      src="https://i.imgur.com/A2qXRiy.png"
                      alt=""
                    />
                  </div>
                  <h2 className="value_key">Trust</h2>
                </div>
                <p className="value_paras">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>
              <div className="value_ke_detail_box">
                <div className="value_line"></div>
              </div>
              <div className="value_ke_detail_box">
                <div className="value_img_section">
                  <div className="value_key_img">
                    <img src="https://i.imgur.com/XeAjwSv.png" alt="" />
                  </div>
                  <h2 className="value_key">Excellence</h2>
                </div>
                <p className="value_paras">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </p>
              </div>
            </div>

            <div className="value_vertical"></div>
            {/* 2nd  */}
            <div className="value_details">
              <div className="value_ke_detail_box">
                <div className="value_img_section">
                  <div className="value_key_img">
                    <img
                      loading="lazy"
                      src="https://i.imgur.com/8niyGoz.png"
                      alt=""
                    />
                  </div>
                  <h2 className="value_key">Client-Centric</h2>
                </div>
                <p className="value_paras">
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </p>
              </div>
              <div className="value_ke_detail_box">
                <div className="value_line"></div>
              </div>
              <div className="value_ke_detail_box">
                <div className="value_img_section">
                  <div className="value_key_img">
                    <img
                      loading="lazy"
                      src="https://i.imgur.com/QXPa4Bx.png"
                      alt=""
                    />
                  </div>
                  <h2 className="value_key">Our Commitment</h2>
                </div>
                <p className="value_paras">
                  We are dedicated to providing you with the highest level of
                  service, professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default values;
