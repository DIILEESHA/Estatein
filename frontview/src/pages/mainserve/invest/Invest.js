import React from "react";
import "./invest.css";
import data from "./investData.json";

const Invest = () => {
  return (
    <div className="invest_container">
      <div className="invest_grid">
        <div className="invest_sub_grid_points">
          <div className="feautre_top_img">
            <img src="https://i.imgur.com/9wSj41l.png" alt="" />
          </div>

          <h2 className="feature_title">
            Smart Investments, Informed Decisions
          </h2>

          <div className="feature_para_details">
            <p className="feature_para meowv">
              Building a real estate portfolio requires a strategic approach.
              Estatein's Investment Advisory Service empowers you to make smart
              investments and informed decisions.
            </p>
          </div>
          <div className="invest_card">
            <h2 className="invest_card_title">
              Unlock Your Investment Potential
            </h2>
            <p className="invest_card_para">
              Explore our Property Management Service categories and let us
              handle the complexities while you enjoy the benefits of property
              ownership.
            </p>
            <button className="invest_btn">learn more</button>
          </div>
        </div>
        <div className="invest_sub_grid_points">
          <div className="serve_value_grid valuers">
            {data.map((datas) => (
              <div className="serve_sub_grids sub_valuers">
                <div className="serve_image_container">
                  <img src={datas?.img} alt={datas.title} />
                  <h2 className="serve_value_title2">{datas?.title}</h2>
                </div>
                <div className="serve_value_para">{datas.para}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
