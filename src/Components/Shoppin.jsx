import React from "react";
import "./Shoppin.css";
import Data from "../Data";
import Like from "./Shoppin-Components/LikeComponent/Like";
import AddToCart from "./Shoppin-Components/AddToCart/AddToCart";
import logo from "../assets/logo.webp";
import LikeImg from "../assets/HeartM.svg";
import CartImg from "../assets/CartM.svg";

const Shoppin = () => {
  const product = Data[0];

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className="shoppin-page">
      <div className="shoppin-header">
        <img src={LikeImg} alt="Like" className="header-icon" />
        <img src={logo} alt="Shoppin Logo" className="header-logo" />
        <img src={CartImg} alt="Cart" className="header-icon" />
      </div>

      <div className="product-card-container">
        <div className="product-card">
          <div className="product-image-container">
             <img src={product.imageUrl} alt={product.name} className="product-image"/>
          </div>
          <div className="product-details">
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-brand">
                Brand: <a href="#" className="brand-link">{product.brand}</a>
              </p>
            </div>
            <div className="product-pricing">
              <span className="original-price">Rs. {product.originalPrice}</span>
              <span className="current-price">Rs. {product.price}</span>
              <span className="discount">({product.discountPercentage}% OFF)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-text">
        SHOPPIN'
      </div>
    </div>
  );
};

export default Shoppin;
