import React, { useEffect, useState } from "react";
import "./hello.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    callContactPage();
  }, []);

  const callContactPage = async () => {
    try {
      console.log("Fetching contact data...");
      const response = await fetch("http://localhost:3000/contact", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      });

      if (response.status === 401 || !response.ok) {
        return;
      }

      const data = await response.json();
      console.log("Fetched data:", data);
      setUserData(data);
    } catch (err) {
      console.error("Error fetching contact page:", err);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log("Input handled:", { [name]: value });
  };

  const postToBackend = async (e) => {
    e.preventDefault();
    console.log("Posting message...");

    const { name, email, phone, message } = userData;
    try {
      const res = await fetch("http://localhost:3000/cont", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies for authentication
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!res.ok) {
        const errorText = await res.text(); // Handle non-JSON responses
        console.error("Error:", errorText);
        alert(`Error: ${errorText}`);
        return;
      }

      const data = await res.json();
      alert("Message sent successfully");
      console.log("Message sent:", data);
      setUserData({ ...userData, message: "" }); // Clear the message field
    } catch (err) {
      console.error("Error sending message:", err);
      alert("An error occurred. Please try again later.");
    }
  };

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
                <form method="POST" id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between">
                    <input
                      type="text"
                      placeholder="Your Name"
                      onChange={handleInput}
                      value={userData.name}
                      name="name"
                      required
                      id="contact_form_name"
                      className="contact_form_input"
                    />
                    <input
                      type="email"
                      placeholder="Your E-mail"
                      onChange={handleInput}
                      value={userData.email}
                      name="email"
                      required
                      id="contact_form_email"
                      className="contact_form_input"
                    />
                    <input
                      type="number"
                      placeholder="Your Number"
                      onChange={handleInput}
                      value={userData.phone}
                      name="phone"
                      required
                      id="contact_form_number"
                      className="contact_form_input"
                    />
                  </div>
                  <div className="contact_form_text mt-3">
                    <textarea
                      rows={5}
                      name="message"
                      className="text_field contact_form_message"
                      placeholder="Message"
                      value={userData.message}
                      onChange={handleInput}
                    ></textarea>
                  </div>
                  <div className="contact_form_button text-center mt-3">
                    <button
                      type="submit"
                      onClick={postToBackend}
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
