import React, { useState } from "react";
import "./team.css";
import data from "./teamData.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Team = () => {
  const [email, setEmail] = useState(Array(data.length).fill(""));
  const [emailError, setEmailError] = useState(Array(data.length).fill(""));
  const notify = (index) => {
    toast.success(` Your message has been sent successfully. Cheers!`, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const onTestClick = (e, index) => {
    e.preventDefault();

    if (!email[index].trim()) {
      setEmailError((prevErrors) => {
        const newErrors = [...prevErrors];
        newErrors[index] = "Text bar cannot be empty";
        return newErrors;
      });
      return;
    }

    setEmailError((prevErrors) => {
      const newErrors = [...prevErrors];
      newErrors[index] = "";
      return newErrors;
    });

    notify(index);
    setEmail((prevEmails) => {
      const newEmails = [...prevEmails];
      newEmails[index] = "";
      return newEmails;
    });
  };

  return (
    <div className="team_container">
      <div className="feautre_top_img">
        <img src="https://i.imgur.com/9wSj41l.png" alt="" />
      </div>
      <h2 className="about_title">Meet the Estatein Team</h2>
      <p className="about_para me">
        At Estatein, our success is driven by the dedication and expertise of
        our team. Get to know the people behind our mission to make your real
        estate dreams a reality.
      </p>

      <div className="team_grid">
        {data.map((team, index) => (
          <div key={index._id} className="team_sub_grid">
            <div className="team_person_img">
              <img src={team.img} alt={team.name} />

              <div className="twitter">
                <img
                  className="twita"
                  src="https://i.imgur.com/abl0MTx.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className="team_name">{team.name}</h2>
            <h3 className="team_position">{team.position}</h3>

            <form
              onSubmit={(e) => onTestClick(e, index)}
              className="team_inputer"
            >
              <input
                type="text"
                placeholder="Say Hello to 👋"
                className="team_input"
                value={email[index]}
                onChange={(e) => {
                  const newEmails = [...email];
                  newEmails[index] = e.target.value;
                  setEmail(newEmails);
                }}
              />
              <div className="inputer_photo">
                <button className="lk">
                  <img
                    src="
                  https://i.imgur.com/qwbdgUB.png"
                    alt=""
                  />
                </button>
              </div>
            </form>
            {emailError[index] && (
              <h1 className="error_message">{emailError[index]}</h1>
            )}
          </div>
        ))}
      </div>
      <div style={{ zIndex: "10000", position: "absolute" }}>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Team;
