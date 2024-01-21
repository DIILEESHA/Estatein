import React from "react";
import PropertyHeader from "../propertyHeader/PropertyHeader";
import Today from "../../../components/today/Today";
import "./main.css";
import { SearchFeatureProperties } from "../../../components/feautrue-properties/CustomFeatureProperties";
import Search from "../propertyHeader/seach/Search";
import Connect from "../connect/Connect";
const MainProperty = () => {
  return (
    <div className="main">
      <PropertyHeader />
      <Search />
      <SearchFeatureProperties />
      <Connect />
      <Today />
    </div>
  );
};

export default MainProperty;
