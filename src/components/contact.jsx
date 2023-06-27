import React from "react";
import Sidebar from "./Sidebar";
import "../styles/contact.scss";
import pp2 from "../assets/pp2.webp";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-sidebar">
        <Sidebar />
      </div>
      <div className="Contact-content">
        <h1 className="Contact-content-heading">Contact Me!</h1>
        <p className="Contact-content-paragraph">
          Phone No : +123-345-235
          <br />
          Email : piyush@email.com
        </p>
        <img className="Contact-content-image" src={pp2} alt="profile"></img>
      </div>
    </div>
  );
};

export default Contact;
