import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hello.css";
import axios from "axios";
axios.defaults.withCredentials = true; // Include cookies by default


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/signin", // Adjust the backend URL
        { email: email, password: password },
        { withCredentials: true },
      {headers: {
    "Content-Type": "application/json",
  }},
  {credentials: "include"}, // Include cookies in the request
  // {body: JSON.stringify(data)},
      );

      if (res.status === 200) {
        // Assuming the response status 200 indicates success
        window.alert("Login Successful");
        navigate("/"); // Navigate to the home page after successful login
      } else {
        window.alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      window.alert("Login Failed. Please check your credentials.");
      window.alert(error);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="signin-content">
            <h2 className="form-title">Login</h2>
            <div className="signin-form">
              <div className="signin-image">
                <figure>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                    alt="signin-icon"
                    width="400"
                    height="400"
                  />
                </figure>
              </div>
              <form
                className="register-form"
                id="register-form"
                onSubmit={handleLogin}
              >
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="ri-mail-fill"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    autoComplete="off"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
