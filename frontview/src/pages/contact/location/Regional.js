import React from "react";

const Regional = () => {
  return (
    <div className="location_grid">
      <div className="loaction_sub_grid">
        <h3 className="loaction_title">Main Headquarters</h3>
        <h2 className="location_address">
          123 Estatein Plaza, City Center, Metropolis
        </h2>
        <p className="location_para">
          Our main headquarters serve as the heart of Estatein. Located in the
          bustling city center, this is where our core team of experts operates,
          driving the excellence and innovation that define us.
        </p>

        <ul className="location_contact_details">
          <li className="location_li_details">
            <img src="https://i.imgur.com/4ZXi0Fn.png" alt="" />
            <h2 className="location_mail">info@estatein.com</h2>
          </li>
          <li className="location_li_details">
            <img src="https://i.imgur.com/BB4rcNR.png" alt="" />
            <h2 className="location_mail">+1 (123) 456-7890</h2>
          </li>
          <li className="location_li_details">
            <img src="https://i.imgur.com/1WcdsnI.png" alt="" />
            <h2 className="location_mail">Metropolis</h2>
          </li>
        </ul>
        <div className="direaction_btn">
          <button>Get Direction</button>
        </div>
      </div>{" "}
    </div>
  );
};

export default Regional;
