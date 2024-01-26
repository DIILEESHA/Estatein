import React from "react";
import PropertySingle from "../propertysinglepage/PropertySingle";
import Inquiry from "../inquiry/Inquiry";
import Today from "../../../../components/today/Today";
import Faq from "../../../../components/faq/Faq";

const MainPropertySingle = () => {
  return (
    <div>
      <PropertySingle />
      <Faq />
      <Today />
    </div>
  );
};

export default MainPropertySingle;
