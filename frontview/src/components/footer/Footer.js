import React, { useState } from "react";
import "./footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const notify = () =>
    toast.success("Great! You're all set! Cheers!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const onTestClick = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      <h1>email cannot be empty</h1>;
      toast.error("Email address cannot be empty", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    notify();
    setEmail("");
  };
  return (
    <div className="footer_container">
      <div className="footer_grid">
        <div className="footer_sub_grid">
          <div className="footer_title_section">
            <img src="https://i.imgur.com/2Zdmcay.png" alt="" />
          </div>
          <ul className="footer_ul">
            <li className="footer_li">
              <form onSubmit={onTestClick} className="inputer">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="email_input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="footer_imger c">
                  <button type="submit">
                    <img src="https://i.imgur.com/6YUT2Ys.png" alt="" />
                  </button>
                  <div style={{ zIndex: "100000", position: "fixed" }}>
                    <ToastContainer />
                  </div>
                </div>
                <div className="footer_imger2 c">
                  <img src="https://i.imgur.com/slIUvW7.png" alt="" />
                </div>
              </form>
            </li>
          </ul>
        </div>
        <div className="footer_sub_grid">
          <div className="footer_title_section">
            <h1 className="footer_title">home</h1>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">hero</li>
            <li className="footer_li">feautures</li>
            <li className="footer_li">properties</li>
            <li className="footer_li">testomonials</li>
            <li className="footer_li">FAQ's</li>
          </ul>
        </div>
        <div className="footer_sub_grid">
          <div className="footer_title_section">
            <h1 className="footer_title">about us</h1>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">our story </li>
            <li className="footer_li">our works</li>
            <li className="footer_li">how it works</li>
            <li className="footer_li">our team</li>
            <li className="footer_li">our clients</li>
          </ul>
        </div>
        <div className="footer_sub_grid">
          <div className="footer_title_section">
            <h1 className="footer_title">properties</h1>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">portfolio</li>
            <li className="footer_li">categories</li>
          </ul>
        </div>
        <div className="footer_sub_grid">
          <div className="footer_title_section">
            <h1 className="footer_title">services</h1>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">Valuation Mastery</li>
            <li className="footer_li">Strategic Marketing</li>
            <li className="footer_li">Negotiation Wizardry</li>
            <li className="footer_li">Closing Success</li>
            <li className="footer_li">Property Management</li>
          </ul>
        </div>
        <div className="footer_sub_grid">
          <div className="footer_title_section">
            <h1 className="footer_title">Contact Us</h1>
          </div>
          <ul className="footer_ul">
            <li className="footer_li">Contact Form</li>
            <li className="footer_li">Our Offices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
