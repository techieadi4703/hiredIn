import React from "react";
import "./hello.css";
const Login = () => {
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
                {/* <NavLink to='./signin'>/NavLink> */}
              </div>
              <form className="register-form" id="register-form">
                {/* <div className="form-group">
                  <label htmlFor="name">
                    <i class="ri-user-2-fill"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="off"
                  />
                </div> */}
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
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="phone">
                    <i class="ri-phone-fill"></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number"
                    autoComplete="off"
                  />
                </div> */}
                {/* <div className="form-group">
                  <label htmlFor="work">
                    <i class="ri-slideshow-fill"></i>{" "}
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    placeholder="Your Profession"
                    autoComplete="off"
                  />
                </div> */}
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
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="ri-lock-password-fill"></i>{" "}
                  </label>
                  <input
                    type="password",
                    name="cpassword",
                    id="cpassword",
                    placeholder="Confirm your Password",
                    autoComplete="off"
                  />
                </div> */}
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
