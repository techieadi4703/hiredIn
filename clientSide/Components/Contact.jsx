import React, { useEffect, useState } from "react";
import "./hello.css";

const Contact = () => {

  
  const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});
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
          credentials: "include", // Send cookies with the request
        });
  
        if (response.status === 401 || !response.ok) {
          // Redirect to login if unauthorized
          return;
        }
        
        const data = await response.json();
        console.log(data);
        // setUserData(data);
        setUserData({...userData,[name]:value})
      } catch (err) {
        console.error("Error fetching About page:", err);
      }
    };
    
    console.log(userData.name);
    console.log("beta")
    
    const handleInput=(e)=>{
      const name=e.target.name;
      const value=e.target.value; 
      console.log("Input handled");
    }

    const postToBackend= async(e)=>{
      console.log("postinggggggggggggggggggggggggggggggg");
        e.preventDefault();
        const {name,email,phone,message}=userData;
        const res= await fetch('/contact',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          }, 
          body:JSON.stringify({name,email,phone,message})
        })
        const data=await res.json();
        console.log(data);
        if(!data){
          alert('Failed to send message')
          console.log('message not send')
        }
        else{
          alert('Message sent successfully')
          console.log('message sent')
          setUserData({...userData,message:""})
        }
    }

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
