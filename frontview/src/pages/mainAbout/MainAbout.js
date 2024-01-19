import React from "react";
import About from "../about/About";
import Values from "../about/values/values";
import Today from "../../components/today/Today";
import Archivements from "../about/achieve/Archivements";
import Experience from "../exp/Experience";
import Team from "../about/team/Team";

const MainAbout = () => {
  return (
    <div>
      <About />
      <Values />
      <Archivements />
      <Experience />
      <Team />
      <Today />
    </div>
  );
};

export default MainAbout;
