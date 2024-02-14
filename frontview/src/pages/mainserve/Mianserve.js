import React from "react";
import ServiceContact from "./ervicecontact/ServiceContact";
import ServiceValue from "./servicevalue/ServiceValue";
import Subservevalues from "./subservevalues/Subservevalues";
import Today from "../../components/today/Today";
import Invest from "./invest/Invest";

const Mianserve = () => {
  return (
    <div>
      <ServiceContact />
      <ServiceValue />
      <Subservevalues />
      {/* <Invest /> */}
      <Today />
    </div>
  );
};

export default Mianserve;
