// ParallaxSection.js

import React from "react";
import Velo from "./Velo";
import './velo.css'

function ParallaxSection() {
  return (
    <div className="sd">
      <Velo style={{ fontSize: "50px" }} baseVelocity={0.5}>
      Discover Your Dream Property with Estatein✨
      </Velo>
      {/* <Velo style={{ fontSize: "50px" }} baseVelocity={2}>
      shop now
      </Velo> */}
    </div>
  );
}

export default ParallaxSection;