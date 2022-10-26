import React from "react";
import "./Partner.css";

export default function Partner() {
  return (
    <div className="partner">
      <img src="./images/Handshake.svg" className="handshake"></img>
      <h2>Let's do it together</h2>
      <div className="partner-benefits">
        <div className="partner-benefits_card">
          <img
            alt="delivery"
            src="./images/delivery.jpg"
            className="benefits-img"
          ></img>
          <h3>Become a rider</h3>
          <p>
            Be your own boss! Enjoy flexibility, freedom and competitive
            earnings by delivering with Glovo
          </p>
          <button className="partner-btn">Join us</button>
        </div>
        <div className="partner-benefits_card">
          <img
            alt="chef"
            src="./images/chef.jpg"
            className="benefits-img"
          ></img>
          <h3>Become a partner</h3>
          <p>
            Grow with Glovo! Our technology and user base can help you boost
            sales and unlock new opportunities!
          </p>
          <button className="partner-btn">Join us</button>
        </div>
        <div className="partner-benefits_card">
          <img
            alt="careers"
            src="./images/job.jpg"
            className="benefits-img"
          ></img>
          <h3>Careers</h3>
          <p>
            Ready for an exciting new challenge? If you're ambitious, humble,
            and love working with others, then we want to hear from you!
          </p>
          <button className="partner-btn">Join us</button>
        </div>
      </div>
    </div>
  );
}
