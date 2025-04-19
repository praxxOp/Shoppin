import React from "react";
import "./Like.css";
const Like = ({LikeP}) => {
  const Products = LikeP;
  return (
    <>
      <div className="Like-main">
        {Products.map((Items, Id) => {
          return (
            <div key={Id} className="Like-product-Component">
              {Items.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Like;
