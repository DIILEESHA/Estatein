import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./imagedata.json";

const ImageSlider = () => {
  const [navSlider, setNavSlider] = useState(null);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: navSlider,
  };

  const navSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: true,
    asNavFor: navSlider,
  };

  return (
    <div>
      <Slider {...mainSliderSettings} ref={(slider) => setNavSlider(slider)}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.img} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>

      <Slider {...navSliderSettings} ref={(slider) => setNavSlider(slider)}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
