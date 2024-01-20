// CustomFeatureProperties.js
import React from "react";
import FeatureProperties from "./FeatureProperties";

export const HomeFeatureProperties = () => {
  const featureProps = {
    title: "Featured Properties",
    para:
      "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information.",
  };

  return <FeatureProperties {...featureProps} />;
};

export const SearchFeatureProperties = () => {
  const featureProps = {
    title: "Discover a World of Possibilities",
    para:
      "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home",
  };

  return <FeatureProperties {...featureProps} />;
};
