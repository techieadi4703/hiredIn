import React from "react";
import "./hello.css";

const Contact = () => {
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
                      name="name"
                      required
                      id="contact_form_name"
                      className="contact_form_input"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                      id="contact_form_email"
                      className="contact_form_input"
                    />
                    <input
                      type="number"
                      placeholder="Your Number"
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
