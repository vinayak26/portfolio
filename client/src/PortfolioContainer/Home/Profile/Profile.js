import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import TypeAnimation from 'react-type-animation';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/Vort3x141">
                <i className="fa fa-github" />
              </a>
              <a href="https://linkedin.com/in/vinayakmishra26">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="mailto:vinayakmishra26@gmail.com">
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Vinayak</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <TypeAnimation
                  sequence={[
                    "Enthusiastic Dev 💻",
                    1000,
                    "Learning Mern stack 📱",
                    1000,
                  ]}
                  repeat={Infinity}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="VinayakMishraResume.pdf" download="VinayakMishraResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}