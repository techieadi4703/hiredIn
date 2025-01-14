import React, { useEffect, useState } from "react";
import './hello.css'
const Home = () => {
  const [username, setUsername] = useState('');
  const [showname,setShowname]= useState(false);
    useEffect(() => {
      callHome();
    }, []);


  const callHome = async () => {
    try {
      console.log("Fetching contact data...");
      const response = await fetch("http://localhost:3000/contact", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log("Fetched data in home:", data);
      const{name}=data;
      setUsername(name);
      setShowname(true);
    } catch (err) {
      console.error("Error fetching contact page:", err);
    }
  };

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          {/* <p className="pt-5">WELCOME</p> */}
          <h1>Welcome {username}</h1>
          <h2 className="pt-3">{showname?"Happy to see u again":"We are The MERN Developers"}</h2>
        </div>
      </div>
    </>
  );
};
export default Home;
