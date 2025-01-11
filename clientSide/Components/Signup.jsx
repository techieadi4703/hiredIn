import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./hello.css";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postMethod = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/register", user);
      if (res.status === 422 || !res.data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successful");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Registration Failed");
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="signup-content">
            <h2 className="form-title">Sign Up</h2>
            <div className="signup-form">
              <form className="register-form" id="register-form" onSubmit={postMethod}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="ri-user-2-fill"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="ri-mail-fill"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="ri-phone-fill"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="ri-slideshow-fill"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    placeholder="Your Profession"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="ri-lock-password-fill"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="ri-lock-password-fill"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm your Password"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInput}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
              <div className="signup-image">
                <figure>
                  <img
                    src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg"
                    alt="signup-icon"
                    width="400"
                    height="400"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
