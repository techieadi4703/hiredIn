import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./hello.css";
import axios from "axios";
const Signup = () => {
  // const history=useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    // console.log("hello input");
    name = e.target.name;
    // console.log(e.target.name);
    console.log(e.target.value);
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postMethod = async (e) => {
    e.preventDefault();
    console.log(user);
    const { name, email, phone, work, password, cpassword } = user;

    const res = await axios.post("http://localhost:3000/register",user)
    console.log(user);
    //console.log(res);
   
    const data= res
    console.log(data);
    if(data.response(422)||!data){
      // window.alert("Invalid Registration");
      console.log(data);
      // console.log("Invalid Registration");
    }
    else{
      window.alert("Registration Successfull");
      console.log(data);
      console.log("Registration Successfull"); 
      // history.push('/login');
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="signup-content">
            <h2 className="form-title">Sign Up</h2>
            <div className="signup-form">
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="ri-user-2-fill"></i>
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
                    <i class="ri-mail-fill"></i>
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
                    <i class="ri-phone-fill"></i>
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
                    <i class="ri-slideshow-fill"></i>{" "}
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
                    <i class="ri-lock-password-fill"></i>{" "}
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
                    <i class="ri-lock-password-fill"></i>{" "}
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
                    onClick={postMethod}
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
                {/* <NavLink to='./signin'>/NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
