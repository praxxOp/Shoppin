import React from "react";
import "./Shoppin.css";
import Data from "../Data";
import Like from "./Shoppin-Components/LikeComponent/Like";
import AddToCart from "./Shoppin-Components/AddToCart/AddToCart";
import logo from "../assets/logo.webp";
const Shoppin = () => {
  return (
    <div className="Shoppin">
      <div className="Shoppin-container">
        <div className="Shoppin-Navbar">
          <div className="Shoppin-Navbar-left">
            <Like />
          </div>
          <div className="Shoppin-Navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="Shoppin-Navbar-right">
            <AddToCart />
          </div>
        </div>
        <div className="Shoppin-products">
          {Data.map((item) => (
            <div className="Shoppin-product-card" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.brand}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoppin;
