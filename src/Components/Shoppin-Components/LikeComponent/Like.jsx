import React from "react";
import "./Like.css";
const Like = ({LikeP}) => {
  const Products = LikeP;
  return (
    <div className="Like-main">
      {Products.length === 0 ? (
        <div className="empty-like-message">No liked products yet.</div>
      ) : (
        Products.map((Items, Id) => (
          <div key={Id} className="Like-product-Component">
            <div className="like-left">
              <div className="like-name">{Items.name}</div>
              <div className="like-brand">{Items.brand}</div>
              <div className="like-price">Rs.{Items.price}</div>
            </div>
            <div className="like-right">
              <img src={Items.imageUrl} className="like-img" alt={Items.name} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Like;
