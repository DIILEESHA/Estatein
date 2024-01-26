import React from "react";
import "./inquiry.css";

const Inquiry = ({ title, loaction }) => {
  return (
    <div className="inquiry_container">
      <div className="inquiry_grid">
        <div className="inqury_sub_grid">
          <div className="feautre_top_img">
            <img src="https://i.imgur.com/9wSj41l.png" alt="" />
          </div>

          <h2 className="feature_title">
            Inquire About
            <span style={{ margin: "0px 5px" }}>{title}</span>
          </h2>

          <div className="feature_para_details">
            <p className="feature_para inq">
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
          </div>
        </div>
        <div className="inqury_sub_grid">
          <form className="inquiry_form">
            <div className="inquiry_sub_form">
              <label htmlFor="" className="inquiry_label">
                first name
              </label>
              <div className="inquiry_input_section">
                <input
                  className="inquiry_input"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
            </div>
            <div className="inquiry_sub_form">
              <label htmlFor="" className="inquiry_label">
                Last Name
              </label>
              <div className="inquiry_input_section">
                <input
                  className="inquiry_input"
                  type="text"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="inquiry_sub_form">
              <label htmlFor="" className="inquiry_label">
                Email
              </label>
              <div className="inquiry_input_section">
                <input
                  className="inquiry_input"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            <div className="inquiry_sub_form">
              <label htmlFor="" className="inquiry_label">
                Phone
              </label>
              <div className="inquiry_input_section">
                <input
                  className="inquiry_input"
                  type="text"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="inquiry_sub_form">
              <label htmlFor="" className="inquiry_label">
                Selected Property
              </label>
              <div className="inquiry_input_section loca">
                <div className="inquiry_input">{loaction}</div>
              </div>
            </div>
            <div className="inquiry_sub_form">
              <label htmlFor="" className="inquiry_label">
                Message
              </label>
              <div className="inquiry_input_section">
                <textarea
                  className="texta"
                  placeholder="Enter your Message here.."
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="inquiry_sub_form">
              <div className="inquiry_checkbox_section">
                <input
                  type="checkbox"
                  name="I agree with Terms of Use and Privacy Policy"
                  id=""
                />
                <h3 className="checkbox_text">
                  I agree with Terms of Use and Privacy Policy
                </h3>
              </div>
            </div>
            <div className="inquiry_sub_form">
              <div className="inquiry_btn">
                <button>send your message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
