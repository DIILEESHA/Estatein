import React from "react";
import Contact from "../contactheader/Contact";
import Today from "../../../components/today/Today";
import Location from "../location/Location";

const MainContact = () => {
  return (
    <div>
      <Contact />
      <Location />
      <Today />
    </div>
  );
};

export default MainContact;
