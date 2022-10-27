import React from "react";
import "./Explor.css";

export default function Explor() {
  return (
    <div className="explorer-section">
      <h2 className="explorer-title">Top restaurants and more in Foodo</h2>
      <div className="explorer-restaurants">
        <div className="explorer-images">
          <img src="./images/mekic.jpg" className="explor-img"></img>
          <p>McDonalds's</p>
        </div>
        <div className="explorer-images">
          <img src="./images/kfc.jpg" className="explor-img"></img>
          <p>KFC</p>
        </div>
        <div className="explorer-images">
          <img src="./images/burgerKing.jpg" className="explor-img"></img>
          <p>BurgerKing</p>
        </div>
        <div className="explorer-images">
          <img src="./images/Starbucks.jpg" className="explor-img"></img>
          <p>Starbucks</p>
        </div>
        <div className="explorer-images">
          <img src="./images/pizaahut.jpg" className="explor-img"></img>
          <p>PizzaHut</p>
        </div>
        <div className="explorer-images">
          <img src="./images/papajohn.jpg" className="explor-img"></img>
          <p>PapaJohn's</p>
        </div>
        <div className="explorer-images">
          <img src="./images/Subway.jpg" className="explor-img"></img>
          <p>Subway</p>
        </div>
        <div className="explorer-images">
          <img src="./images/tacobell.jpg" className="explor-img"></img>
          <p>TacoBell</p>
        </div>
      </div>
      <h2 className="explorer-title">Anything delivered</h2>
      <div className="explorer-delivery">
        <div className="delivery-card">
          <img className="delivery-img" src="./images/town.png"></img>
          <h4>Your city's top restaurants</h4>
          <p>
            With a great variety of restaurants you can order your favorite food
            or explore new restaurants nearby!
          </p>
        </div>
        <div className="delivery-card">
          <img className="delivery-img" src="./images/delivery.png"></img>
          <h4>fast delivery</h4>
          <p>
            We pride ourselves on speed. Order or send anything in your city and
            we'll pick it up and deliver it in minutes.
          </p>
        </div>
        <div className="delivery-card">
          <img className="delivery-img" src="./images/groceries.png"></img>
          <h4>Groceries delivery & more</h4>
          <p>
            Find anything you need! From supermarkets to shops, pharmacies to
            florists — if it's in your city you can count on us to get it.
          </p>
        </div>
      </div>
      <button className="explorer-button">Explore stores around you</button>
    </div>
  );
}
