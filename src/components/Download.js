import React from "react";
import "./Download.css";

export default function Download() {
  return (
    <div className="download">
      <div className="download-info">
        <img src="./images/mobile.png" height="200px" width="250px"></img>
        <h2>Download the app</h2>
        <p>Order anything and track it real time with the Glovo app</p>
        <div>
          <button className="download-button">
            <img src="./images/apple.svg" className="button-img"></img>
          </button>
          <button className="download-button">
            <img src="./images/google.svg" className="button-img"></img>
          </button>
        </div>
      </div>
      <img src="./images/glovo.avif" alt="glovo app" className="glovo"></img>
    </div>
  );
}
