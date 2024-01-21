import React from "react";
import "./connect.css";
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
            <input
              type="text"
              placeholder="enter first name"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">Property Type</label>
            <input
              type="text"
              placeholder="enter first name"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">No. of Bathrooms</label>
            <input
              type="text"
              placeholder="enter first name"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">No. of Bedrooms</label>
            <input
              type="text"
              placeholder="enter first name"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">Budget</label>
            <input
              type="text"
              placeholder="enter first name"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label htmlFor="">Preferred Contact Method</label>
            <input
              type="text"
              placeholder="enter first name"
              className="connect_input"
            />
          </div>
        </div>{" "}
        <div className="connect_sub_form">
          <div className="connect_input_section">
            <label style={{ color: "transparent" }} htmlFor="">
              s
            </label>
            <input
              type="email"
              placeholder="enter first name"
              className="connect_input"
            />
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
            {" "}
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
