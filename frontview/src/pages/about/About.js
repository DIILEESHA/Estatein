import React from "react";
import "./about.css";
import "atropos/css";
import CountUp, { useCountUp } from "react-countup";
import Atropos from "atropos/react";

const About = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="about_container">
      <div className="about_grid">
        <div className="about_sub_grid">
          <div className="feautre_top_img">
            <img src="https://i.imgur.com/9wSj41l.png" alt="" />
          </div>
          <h2 className="about_title">Our Journey</h2>
          <p className="about_para">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>
          <div className="properties_summary">
            <div className="property_card">
            <h2 className="property_count">
                <CountUp enableScrollSpy duration={5} delay={3} end={200} />+
              </h2>
              <h3 className="property_title">happy customers</h3>
            </div>
            <div className="property_card">
              <h2 className="property_count">
                <CountUp enableScrollSpy duration={5} delay={3} end={10} />
                K+
              </h2>
              <h3 className="property_title">Properties For Clients</h3>
            </div>
            <div className="property_card">
              <h2 className="property_count">
                <CountUp enableScrollSpy duration={5} delay={3} end={16} />+
              </h2>
              <h3 className="property_title">Years of Experience</h3>
            </div>
          </div>
        </div>
        <div className="about_sub_grid">
          <Atropos
            activeOffset={0}
            shadow={false}
            highlight={true}
            shadowScale={0}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(x, y) => console.log("Rotate", x, y)}
          >
            <div className="about_grid_img">
              <img src="https://i.imgur.com/nbmpD3a.png" alt="" />
            </div>
          </Atropos>
        </div>
      </div>
    </div>
  );
};

export default About;
