import React from "react";
import data from "./serveData.json";
const Subservevalues = () => {
  return (
    <div className="servicevalue_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>

      <h2 className="feature_title">Unlock Property Value</h2>

      <div className="feature_para_details">
        <p className="feature_para">
          Selling your property should be a rewarding experience, and at
          Estatein, we make sure it is. Our Property Selling Service is designed
          to maximize the value of your property, ensuring you get the best deal
          possible. Explore the categories below to see how we can help you at
          every step of your selling journey
        </p>
      </div>

      <div className="serve_value_grid">
        {data.map((datas) => (
          <div
            className="serve_sub_grids "
            style={{
              backgroundImage:
                datas.id === 6 ? `url("https://i.imgur.com/XOuQ32J.png")` : "",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="serve_image_container">
              {datas.id !== 6 && <img src={datas?.img} alt={datas.title} />}
              <h2 className="serve_value_title2">{datas?.title}</h2>
              {datas.id === 6 && (
                <div className="btnerb">
                  <button>see more</button>
                </div>
              )}
            </div>
            <div className="serve_value_para">{datas.para}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subservevalues;
