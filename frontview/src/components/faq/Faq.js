import React from "react";
import "./faq.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "./faqData.json";

const Faq = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrowss custom-prev" onClick={onClick}>
      <img src="https://i.imgur.com/y2K6W3A.png" alt="" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrowss custom-next" onClick={onClick}>
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
    <div className="faq_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>

      <h2 className="feature_title">Frequently Asked Questions</h2>

      <div className="feature_para_details">
        <p className="feature_para">
          Find answers to common questions about Estatein's services, property
          listings, and the real estate process. We're here to provide clarity
          and assist you every step of the way.
        </p>

        <div className="feature_btn">
          <button>View All FAQ’s</button>
        </div>
      </div>
      <div className="property_hotel">
        <Slider {...settings}>
          {data.map((client, index) => (
            <div key={index} className="property_sub_hotel">
              <h2 className="hotel_name">{client.title}</h2>
              <p className="hotel_property_para">{client.para}</p>
              <div className="feature_btn">
                <button>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="lines"></div>
      </div>
    </div>
  );
};

export default Faq;
