import React from "react";
import "./team.css";
import data from "./teamData.json";

const Team = () => {
  return (
    <div className="team_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>
      <h2 className="about_title">Meet the Estatein Team</h2>
      <p className="about_para me">
        At Estatein, our success is driven by the dedication and expertise of
        our team. Get to know the people behind our mission to make your real
        estate dreams a reality.
      </p>

      <div className="team_grid">
        {data.map((team, index) => (
          <div key={index._id} className="team_sub_grid">
            <div className="team_person_img">
              <img src={team.img} alt={team.name} />

              <div className="twitter">
                <img className="twita" src="https://i.imgur.com/abl0MTx.png" alt="" />
              </div>
            </div>
            <h2 className="team_name">{team.name}</h2>
            <h3 className="team_position">{team.position}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
