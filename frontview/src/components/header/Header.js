import React from "react";
import "./header.css";
import CountUp, { useCountUp } from "react-countup";

const Header = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="header_container">
      <div className="header_grid">
        <div className="header_sub">
          <h2 className="header_title">
            Discover Your Dream Property with Estatein
          </h2>
          <p className="header_para">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          <div className="header_btn_section">
            <button className="learn_more">learn more </button>
            <button className="properties_btn">browse properties</button>
          </div>
          <div className="properties_summary">
            <div className="property_card">
              <h2 className="property_count">
                <CountUp enableScrollSpy duration={5} delay={3} end={200} />+
              </h2>
              <h3 className="property_title">happy customers</h3>
            </div>
            <div className="property_card">
              <h2 className="property_count">
                <CountUp enableScrollSpy duration={5} delay={3} end={10} />
                K+
              </h2>
              <h3 className="property_title">Properties For Clients</h3>
            </div>
            <div className="property_card">
              <h2 className="property_count">
                <CountUp enableScrollSpy duration={5} delay={3} end={16} />+
              </h2>
              <h3 className="property_title">Years of Experience</h3>
            </div>
          </div>
        </div>
        <div className="header_sub">
          <div className="header_background">
            <img src="https://i.imgur.com/D90L1JP.png" alt="" />
          </div>
        </div>
        <div className="header_line"></div>
      </div>
      <div className="header_round_img">
        <img src="https://i.imgur.com/DjShUDB.png" alt="" />
      </div>

      <div className="property_linked_cards">
        <div className="property_linked_card">
          <div className="property_linked_img">
            <img src="https://i.imgur.com/W1gEE3D.png" alt="" />
          </div>
          <h2 className="property_linked_title">Find Your Dream Home</h2>
        </div>{" "}
        <div className="property_linked_card">
          <div className="property_linked_img">
            <img src="https://i.imgur.com/9a4ouSN.png" alt="" />
          </div>
          <h2 className="property_linked_title">Unlock Property Value</h2>
        </div>{" "}
        <div className="property_linked_card">
          <div className="property_linked_img">
            <img src="https://i.imgur.com/EbFvvxX.png" alt="" />
          </div>
          <h2 className="property_linked_title">
            Effortless Property Management
          </h2>
        </div>{" "}
        <div className="property_linked_card">
          <div className="property_linked_img">
            <img src="https://i.imgur.com/fS4Ulor.png" alt="" />
          </div>
          <h2 className="property_linked_title">
            Smart Investments, Informed Decisions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
