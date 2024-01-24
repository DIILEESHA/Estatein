import React from "react";

const ServiceContact = () => {
  return (
    <div className="contact_container">
      <div className="contact_sub_container">
        <div className="property_img">
          <h2 className="about_title">Elevate Your Real Estate Experience</h2>
          <p className="about_para me">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
      </div>
      <div className="contact_options">
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
            <img loading="lazy" src="https://i.imgur.com/JhIoG7q.png" alt="container" />
          </div>
          <h2 className="property_linked_title">
            Smart Investments, Informed Decisions
          </h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ServiceContact;
