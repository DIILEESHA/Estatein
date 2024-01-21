import React from "react";
import "./connect.css";
import Drop from "./Drop";
const Connect = () => {
  return (
    <div className="connect_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>
      <h2 className="about_title">Let's Make it Happen</h2>
      <p className="about_para">
        Ready to take the first step toward your dream property? Fill out the
        form below, and our real estate wizards will work their magic to find
        your perfect match. Don't wait; let's embark on this exciting journey
        together.
      </p>

      <form action="" className="connect_form">
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">first name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">last name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">Preferred Location</label>
            <Drop
              className="drop"
              iconSrc=""
              title="select location"
              options={["since 90", "since 20", "newest"]}
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">Property Type</label>
            <Drop
              className="drop"
              iconSrc=""
              title="select property type"
              options={["since 90", "since 20", "newest"]}
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">No. of Bathrooms</label>
            <Drop
              className="drop"
              iconSrc=""
              title="select no.of bathrooms"
              options={["since 90", "since 20", "newest"]}
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">No. of Bedrooms</label>
            <Drop
              className="drop"
              iconSrc=""
              title="select no.of bedrooms"
              options={["since 90", "since 20", "newest"]}
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">Budget</label>
            <Drop
              className="drop"
              iconSrc=""
              title="select budget"
              options={["since 90", "since 20", "newest"]}
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">Preferred Contact Method</label>
            <div className="connecta">
              <div className="imga">
                <img
                  src="
                https://i.imgur.com/nVXZBX3.png"
                  alt=""
                />
              </div>
              <div className="imga2">
                <img src="https://i.imgur.com/Qrk4IfK.png" alt="" />
              </div>
              <input
                type="email"
                placeholder="Enter Your Number"
                className="connect_input og"
              />
            </div>
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label style={{ color: "transparent" }} htmlFor="">
              s
            </label>

            <div className="connecta">
              <div className="imga">
                <img
                  src="
                https://i.imgur.com/zc4E2VJ.png"
                  alt=""
                />
              </div>
              <div className="imga2">
                <img src="https://i.imgur.com/e8aB0iq.png" alt="" />
              </div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="connect_input og"
              />
            </div>
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">message</label>

            <textarea
              name=""
              placeholder="Enter your message here"
              id=""
              cols="40"
              rows="20"
              className="connect_textare"
            ></textarea>
          </div>
        </div>
        <div className="connect_sub_form">
          <input className="checker" type="checkbox" name="d" id="" />
          <label className="check" for="d">
            I agree with Terms of Use and Privacy Policy
          </label>
        </div>
        <div className="connect_sub_form">
          <button className="checker_btn">send your message</button>
        </div>
      </form>
    </div>
  );
};

export default Connect;
