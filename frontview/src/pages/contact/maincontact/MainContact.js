import React from "react";
import Contact from "../contactheader/Contact";
import Today from "../../../components/today/Today";
import Location from "../location/Location";
import World from "../world/World";

const MainContact = () => {
  return (
    <div>
      <Contact />
      <Location />
      <World />
      <Today />
    </div>
  );
};

export default MainContact;
