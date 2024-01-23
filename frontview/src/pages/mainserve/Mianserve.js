import React from "react";
import ServiceContact from "./ervicecontact/ServiceContact";
import ServiceValue from "./servicevalue/ServiceValue";
import Subservevalues from "./subservevalues/Subservevalues";
import Today from "../../components/today/Today";

const Mianserve = () => {
  return (
    <div>
      <ServiceContact />
      <ServiceValue />
      <Subservevalues />
      <Today />
    </div>
  );
};

export default Mianserve;
