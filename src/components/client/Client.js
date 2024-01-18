import React from "react";
import "./client.css";
import "../feautrue-properties/feauture.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./clientdata.json";

const Client = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrows custom-prev" onClick={onClick}>
      <img src="https://i.imgur.com/y2K6W3A.png" alt="" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrows custom-next" onClick={onClick}>
      <img src="https://i.imgur.com/LJapvlt.png" alt="" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "sliders",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="client_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>
      <h2 className="feature_title">What Our Clients Say</h2>

      <div className="feature_para_details">
        <p className="feature_para">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </p>

        <div className="feature_btn">
          <button>View All Testimonials</button>
        </div>
      </div>
      <div className="property_hotel">
        <Slider {...settings}>
          {data.map((client, index) => (
            <div key={index} className="property_sub_hotel">
              <div className="client_image">
                <img src="https://i.imgur.com/TxBfGzM.png" alt="" />
              </div>
              <h2 className="hotel_name">{client.text}</h2>
              <p className="hotel_property_para">{client.para}</p>

              <div className="client_image_section">
                <div className="client_profile_img">
                  <img src={client.img} alt={client.text} />
                </div>
                <div className="client_name_section">
                  <h2 className="client_name">{client.name}</h2>
                  <p className="client_address">USA, California</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="lines"></div>
      </div>
    </div>
  );
};

export default Client;
