import React, { useState } from "react";
import "./hello.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container emp-profile">
      <form method="">
        <div className="row">
          {/* Profile Image */}
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://www.shutterstock.com/image-photo/happy-businessman-isolated-handsome-man-260nw-2272452971.jpg"
                alt="Profile"
              />
            </div>
          </div>

          {/* Profile Header */}
          <div className="col-md-6">
            <div className="profile-head">
              <h5>TMHRI</h5>
              <h6>Founder & CEO</h6>
              <p className="proile-rating mt-3 mb-5">
                Rating : <span>4.2/5</span>
              </p>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "about" ? "active" : ""}`}
                    onClick={() => handleTabChange("about")}
                  >
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "timeline" ? "active" : ""}`}
                    onClick={() => handleTabChange("timeline")}
                  >
                    Timeline
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Edit Button */}
          <div className="col-md-2">
            <input
              type="submit"
              name="btnAddMore"
              className="profile-edit-btn"
              value="Edit Profile"
            />
          </div>
        </div>

        {/* Tab Content */}
        <div className="row">
          {/* Left Side Links */}
          <div className="col-md-4">
            <div className="profile-work">
              <p>WORK LINK</p>
              <a href="https://www.linkedin.com/in/tanmay-hari-riyesh" target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
              <a href="https://github.com/tanmayhari" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
              <a href="https://twitter.com/tanmayhari" target="_blank" rel="noreferrer">
                Twitter Profile
              </a>
            </div>
          </div>

          {/* Right Side Tab Content */}
          <div className="col-md-8 pl-5 about-info">
            {activeTab === "about" && (
              <div className="tab-content profile-tab">
                <div className="tab-pane fade show active">
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>TMH12345</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Tanmay Hari</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>tanmayhari@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "timeline" && (
              <div className="tab-content profile-tab">
                <div className="tab-pane fade show active">
                  <div className="row">
                    <div className="col-md-6">
                      <label>2020</label>
                    </div>
                    <div className="col-md-6">
                      <p>Started my journey as a software developer.</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>2022</label>
                    </div>
                    <div className="col-md-6">
                      <p>Promoted to Senior Developer at XYZ Company.</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>2024</label>
                    </div>
                    <div className="col-md-6">
                      <p>Launched my own tech startup.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
