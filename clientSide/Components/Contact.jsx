import React, { useEffect, useState } from "react";
import "./hello.css";

const Contact = () => {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
      callContactPage();
    }, []);
    
    const callContactPage = async () => {
      try {
        console.log("cominggggggggggg")
        const response = await fetch("http://localhost:3000/contact", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
  
        if (response.status === 401 || !response.ok) {
          // Redirect to login if unauthorized
          return;
        }
  
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (err) {
        console.error("Error fetching About page:", err);
      }
    };
  
    console.log(userData.name);
    console.log("beta")

  return (
    <>
      <div className="contact_info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 d-flex justify-content-around align-items-center">

              <div className="contact_info_item d-flex align-items-center">
                <i className="ri-phone-fill"></i>
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">7309958494</div>
                </div>
              </div>

              <div className="contact_info_item d-flex align-items-center">
                <i className="ri-mail-fill"></i>
                <div className="contact_info_content">
                  <div className="contact_info_title">E-mail</div>
                  <div className="contact_info_text">
                    techie.adi47@gmail.com
                  </div>
                </div>
              </div>

              <div className="contact_info_item d-flex align-items-center">
                <i className="ri-map-pin-2-fill"></i>
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Shivpur, Varanasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact_form_container card py-5 px-4">
                <div className="contact_form_title text-center">
                  Get in Touch
                </div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={userData.name}
                      name="name"
                      required
                      id="contact_form_name"
                      className="contact_form_input"
                    />
                    <input
                      type="email"
                      placeholder="Your E-mail"
                      value={userData.email}
                      name="email"
                      required
                      id="contact_form_email"
                      className="contact_form_input"
                    />
                    <input
                      type="number"
                      placeholder="Your Number"
                      value={userData.phone}
                      name="number"
                      required
                      id="contact_form_number"
                      className="contact_form_input"
                    />
                  </div>

                  <div className="contact_form_text mt-3">
                    <textarea
                      rows={5}
                      className="text_field contact_form_message"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="contact_form_button text-center mt-3">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
