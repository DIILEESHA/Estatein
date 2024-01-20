import React from "react";
import PropertyHeader from "../propertyHeader/PropertyHeader";
import Today from "../../../components/today/Today";
import "./main.css";
import { SearchFeatureProperties } from "../../../components/feautrue-properties/CustomFeatureProperties";
import Search from "../propertyHeader/seach/Search";
const MainProperty = () => {
  return (
    <div className="main">
      <PropertyHeader />
      <Search />
      <SearchFeatureProperties />
      <Today />
    </div>
  );
};

export default MainProperty;
