import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hello.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const handleTabChange = (tab) => {
    console.log("Switching to tab:", tab); // Debug log
    setActiveTab(tab);
  };

  const callAboutPage = async () => {
    try {
      const response = await fetch("http://localhost:3000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include", // Send cookies with the request
      });

      if (response.status === 401 || !response.ok) {
        // Redirect to login if unauthorized
        navigate("/login");
        return;
      }

      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.error("Error fetching About page:", err);
      navigate("/login"); // Redirect on error
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="container emp-profile">
      <form method="GET">
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
              <h5>{userData.name}</h5>
              <h6>{userData.work}</h6>
              <p className="proile-rating mt-3 mb-5">
                Rating : <span>4.2/5</span>
              </p>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <div
                    className={`nav`}
                    // onClick={() => handleTabChange("about")}
                  >
                    About
                  </div>
                </li>
                {/* <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "timeline" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("timeline")}
                  >
                    Timeline
                  </button>
                </li> */}
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
              <a
                href="https://www.linkedin.com/in/tanmay-hari-riyesh"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/tanmayhari"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
              <a
                href="https://twitter.com/tanmayhari"
                target="_blank"
                rel="noreferrer"
              >
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
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* {activeTab === "timeline" && (
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
            )} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
