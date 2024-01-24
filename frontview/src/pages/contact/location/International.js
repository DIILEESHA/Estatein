import React from "react";

const International = () => {
  return (
    <div className="location_grid">
      <div className="loaction_sub_grid">
        <h3 className="loaction_title">Regional Offices</h3>
        <h2 className="location_address">
        456 Urban Avenue, Downtown District, Metropolis
        </h2>
        <p className="location_para">
        Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.
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
            <h2 className="location_mail">Canada</h2>
          </li>
        </ul>
        <div className="direaction_btn">
          <button>Get Direction</button>
        </div>
      </div>
    </div>
  );
};

export default International;
