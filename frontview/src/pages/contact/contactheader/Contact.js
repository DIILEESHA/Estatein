import React from "react";
import "./contact.css";
import Drop from "../../properties/connect/Drop";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_sub_container">
        <div className="property_img">
          <h2 className="about_title">Get in Touch with Estatein</h2>
          <p className="about_para me">
            Welcome to Estatein's Contact Us page. We're here to assist you with
            any inquiries, requests, or feedback you may have. Whether you're
            looking to buy or sell a property, explore investment opportunities,
            or simply want to connect, we're just a message away. Reach out to
            us, and let's start a conversation.
          </p>
        </div>
      </div>
      <div className="contact_options">
        <div className="property_linked_cards">
          <div className="property_linked_card">
            <div className="property_linked_img">
              <img src="https://i.imgur.com/P6I4qKI.png" alt="" />
            </div>
            <h2 className="property_linked_title">info@estatein.com</h2>
          </div>{" "}
          <div className="property_linked_card">
            <div className="property_linked_img">
              <img src="https://i.imgur.com/Iy6qcPE.png" alt="" />
            </div>
            <h2 className="property_linked_title">+1 (123) 456-7890</h2>
          </div>{" "}
          <div className="property_linked_card">
            <div className="property_linked_img">
              <img src="https://i.imgur.com/IYFaSPR.png" alt="" />
            </div>
            <h2 className="property_linked_title">Main Headquarters</h2>
          </div>{" "}
          <div className="property_linked_card">
            <div className="property_linked_img">
              <img src="https://i.imgur.com/mZUlOep.png" alt="" />
            </div>
            <h2 className="property_linked_title">Facebook</h2>
          </div>
        </div>
      </div>

      <div className="connect_containers">
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

        <form action="" className=" connect_forms">
          <div className="connect_sub_forms">
            <div className="connect_input_section">
              <label htmlFor="">first name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="connect_input"
              />
            </div>
          </div>{" "}
          <div className="connect_sub_forms">
            <div className="connect_input_section">
              <label htmlFor="">last name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="connect_input"
              />
            </div>
          </div>{" "}
          <div className="connect_sub_forms">
            <div className="connect_input_section">
              <label htmlFor="">email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="connect_input"
              />
            </div>
          </div>{" "}
          <div className="connect_sub_forms">
            <div className="connect_input_section">
              <label htmlFor="">phone</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="connect_input"
              />
            </div>
          </div>{" "}
          <div className="connect_sub_forms">
            <div className="connect_input_section">
              <label htmlFor="">Inquiry Type</label>
              <Drop
                className="drop"
                iconSrc=""
                title="select location"
                options={["since 90", "since 20", "newest"]}
              />
            </div>
          </div>{" "}
          <div className="connect_sub_forms">
            <div className="connect_input_section">
              <label htmlFor="">How Did You Hear About Us?</label>
              <Drop
                className="drop"
                iconSrc=""
                title="select property type"
                options={["since 90", "since 20", "newest"]}
              />
            </div>
          </div>{" "}
          <div className="connect_sub_forms">
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
          <div className="connect_sub_forms">
            <input className="checker" type="checkbox" name="d" id="" />
            <label className="check" for="d">
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>
          <div className="connect_sub_forms">
            <button className="checker_btn">send your message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
