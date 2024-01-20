import React from "react";
import About from "../About";
import Values from "../values/values";
import Today from "../../../components/today/Today";
import Archivements from "../achieve/Archivements";
import Experience from "../exp/Experience";
import Team from "../team/Team";

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
