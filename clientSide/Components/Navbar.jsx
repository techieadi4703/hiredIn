import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./hello.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Brand Section */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              alt="Logo"
              width="22"
              height="22"
              className="d-inline-block align-text-top me-2"
            />
            HiredIn
          </a>

          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-flex align-items-center">
              <NavLink className="nav-link active" to={"/"}>
                Home
              </NavLink>
              <NavLink className="nav-link active" to={"/about"}>
                About
              </NavLink>
              <NavLink className="nav-link active" to={"/contact"}>
                Contact
              </NavLink>
              <NavLink className="nav-link active" to={"/register"}>
                Signup
              </NavLink>
              <NavLink className="nav-link active" to={"/login"}>
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
