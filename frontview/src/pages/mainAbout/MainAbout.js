import React from "react";
import About from "../about/About";
import Values from "../about/values/values";
import Today from "../../components/today/Today";
import Archivements from "../about/achieve/Archivements";

const MainAbout = () => {
  return (
    <div>
      <About />
      <Values />
      <Archivements />
      <Today />
    </div>
  );
};

export default MainAbout;
