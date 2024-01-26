import React, { useEffect, useState } from "react";
import "./propertysingle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from "react-router-dom";
import Sanity from "../../../../sanity/Sanity";
import { PortableText } from "@portabletext/react";
import Inquiry from "../inquiry/Inquiry";

const PropertySingle = () => {
  const { slug } = useParams();

  const [navSlider, setNavSlider] = useState(null);
  const [property, setProperty] = useState(null);

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrowers custom-previouser" onClick={onClick}>
      <img className="mera2" src="https://i.imgur.com/k0gtS23.png" alt="" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrowers custom-nexters" onClick={onClick}>
      <img className="mera" src="https://i.imgur.com/LJapvlt.png" alt="" />
    </div>
  );
  useEffect(() => {
    const fetch = async () => {
      try {
        const singleQuery = `*[_type == "hotels" && slug.current == "${slug}"]{
            hotelname,
            slug,
            para,
            price,
            address,
            images[]{asset->{_id,url}},
            numBathrooms,
            numBedrooms,
            type,
            area,
            features
        }`;

        const res = await Sanity.fetch(singleQuery);
        setProperty(res[0]);
        console.log("fetch data set", res);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [slug]);

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1900,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: navSlider,
    className: "sliders1",
    arrows: false,
  };

  const navSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: true,
    asNavFor: navSlider,
    className: "sliders2",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="propertya_container">
      <div className="property_single_top">
        <div className="property_single_address_container">
          <h2 className="property_single_address">{property?.hotelname}</h2>
          <div className="property_address_card">
            <img
              className="map"
              src="https://i.imgur.com/BKIqxqF.png"
              loading="lazy"
              alt=""
            />
            <h2 className="address_title">{property?.address}</h2>
          </div>
        </div>
        <div className="property_price_container">
          <h2 className="property_pricer">price</h2>
          <h2 className="property_price_count">${property?.price}</h2>
        </div>
      </div>

      <div className="slider_card">
        <div className="top_slid">
          <Slider {...navSliderSettings} ref={(slider) => setNavSlider(slider)}>
            {property?.images?.map((image, index) => (
              <div className="small_single" key={index}>
                <img loading="lazy" src={image?.asset?.url} alt="" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="top_slide2">
          <Slider
            {...mainSliderSettings}
            ref={(slider) => setNavSlider(slider)}
          >
            {property?.images?.map((image, index) => (
              <div className="single_pro" key={index}>
                <img
                  loading="lazy"
                  src={image?.asset?.url}
                  alt={property.hotelname}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="property_single_other_grid">
        <div className="property_other_sub">
          <h2 className="property_other_title">Description</h2>
          <p className="property_other_para">
            <PortableText value={property?.para} />
          </p>

          <div className="property_other_line"></div>
          <div className="property_other_sub_details">
            <div className="property_other_substers">
              <div className="property_other_top">
                <img src="https://i.imgur.com/rOmzVkx.png" alt="" />
                <h3 className="be">Bedrooms</h3>
              </div>
              <h2 className="other_count">0{property?.numBedrooms}</h2>
            </div>
            <div className="property_other_substers neow">
              <div className="property_other_top">
                <img src="https://i.imgur.com/bO6rQoH.png" alt="" />
                <h3 className="be">Bathrooms</h3>
              </div>
              <h2 className="other_count">0{property?.numBathrooms}</h2>
            </div>
            <div className="property_other_substers neow">
              <div className="property_other_top">
                <img src="https://i.imgur.com/ll2FUYD.png" alt="" />
                <h3 className="be">Area</h3>
              </div>
              <h2 className="other_count">
                {property?.area}

                <span className="rus">Square Feet</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="property_other_sub">
          <h2 className="property_other_title">Key Features and Amenities</h2>

          <ul className="property_other_ul">
            {property?.features &&
              property?.features.map((feature, index) => (
                <li key={index} className="property_other_li">
                  <img
                    className="lia"
                    src="https://i.imgur.com/uA1MNhY.png"
                    alt=""
                  />
                  {feature}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <>
        <Inquiry title={property?.hotelname} loaction={property?.address} />
      </>
    </div>
  );
};

export default PropertySingle;
