import React, { useEffect, useState } from "react";
import "./feauture.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sanity from "../../sanity/Sanity";
import { PortableText } from "@portabletext/react";

const FeatureProperties = ({ title, para }) => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchQuery = `*[_type == "hotels"]{
    hotelname,
    slug,
    para,
    price,
    address,
    images[]{asset->{_id,url}},
    numBathrooms,
    numBedrooms,
    type

  }`;
        const res = await sanity.fetch(fetchQuery);
        setProperty(res);
        console.log("Fetched data:", res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <img src="https://i.imgur.com/y2K6W3A.png" alt="" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
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
    <div className="feauture_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>

      <h2 className="feature_title">{title}</h2>

      <div className="feature_para_details">
        <p className="feature_para">{para}</p>

        <div className="feature_btn">
          <button>View All Properties</button>
        </div>
      </div>

      <div className="property_hotel">
        <Slider {...settings}>
          {property.map((details, index) => (
            <div key={index} className="property_sub_hotel">
              <div className="hotel_property_image">
                {details.images && details.images.length > 0 ? (
                  <img
                    className="fea"
                    src={details.images[0].asset.url}
                    alt=""
                  />
                ) : (
                  <p>No images available</p>
                )}
              </div>
              <h2 className="hotel_name">{details.hotelname}</h2>
              <p className="hotel_property_para">
                <PortableText
                  value={details.para.map((block) => ({
                    ...block,
                    children: block.children.map((child) => ({
                      ...child,
                      text: child.text.split(" ").slice(0, 15).join(" ").concat('...'),
                    })),
                  }))}
                />
              </p>

              <div className="hotel_key_feautures">
                <div className="key_card">
                  <div className="key_image">
                    <img src="https://i.imgur.com/UhImtwb.png" alt="beds" />
                    <h2 className="key_title">
                      {details.numBedrooms}-bedrooms
                    </h2>
                  </div>
                </div>
                <div className="key_card">
                  <div className="key_image">
                    <img src="https://i.imgur.com/EIg2D7W.png" alt="beds" />
                    <h2 className="key_title">
                      {details.numBathrooms}-bathrooms
                    </h2>
                  </div>
                </div>
                <div className="key_card">
                  <div className="key_image">
                    <img src="https://i.imgur.com/pnZJT4K.png" alt="beds" />
                    <h2 className="key_title">{details.type}</h2>
                  </div>
                </div>
              </div>

              <div className="price_section">
                <div className="hotel_price">
                  <h2 className="pricer">price</h2>
                  <h2 className="hotel_price_count">${details.price}</h2>
                </div>
                <div className="property_detail_btn">
                  <button>view property details</button>
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

export default FeatureProperties;
