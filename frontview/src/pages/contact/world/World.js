import React from "react";
import "./orld.css";
import data from "./dataworld.json";

const World = () => {
  return (
    <div className="world_container">
      <div className="world_img">
        <div className="world_grid">
          {data.map((datas) => (
            <div className="world_sub" key={datas.id}>
              <div className="imgaw">
                <img
                  className="dema"
                  height={340}
                  width={340}
                  src={datas.img}
                  alt=""
                  style={{
                    width: datas.id === 6 ? "60px" : "100%",
                    height: datas.id === 6 ? "30px" : "100%",
                    objectFit: datas.id === 6 ? "contain" : "",
                    // margin:datas.id === 6 ? "-10px 0px 0px 0px ":""
                  }}
                />
              </div>
              <h1 className="busa">{datas.title}</h1>
              <p className="busa_para">{datas.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default World;
