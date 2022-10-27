import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2 className="navbar-txt">Foodo </h2>
        <img
          src="./images/logoLocation.png"
          width="30px"
          height="30px"
          alt="location logo"
        ></img>
      </div>
      <button className="navbar-button">Get started</button>
    </div>
  );
}
