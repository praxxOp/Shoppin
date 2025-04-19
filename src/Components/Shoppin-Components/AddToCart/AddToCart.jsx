import React from "react";
import "./AddToCart.css";

const AddToCart = ({ AddToCartP }) => {
  const Products = AddToCartP;

  return (
    <div className="AddToCart-main">
      {Products.length === 0 ? (
        <div className="empty-cart-message">No products in cart.</div>
      ) : (
        Products.map((Items, Id) => (
          <div key={Id} className="AddtoCart-product-Component">
            <div className="addtocart-Left">
              <div className="addtocart-name">{Items.name}</div>
              <div className="addtocart-brand">{Items.brand}</div>
              <div className="addtocart-Price">Rs.{Items.price}</div>
            </div>
            <div className="addtocart-right">
              <img src={Items.imageUrl} className="AddtoCart-Img" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AddToCart;
