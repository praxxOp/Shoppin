import React, { useState } from "react";
import "./Shoppin.css";
import Data from "../Data";
import Like from "./Shoppin-Components/LikeComponent/Like";
import AddToCart from "./Shoppin-Components/AddToCart/AddToCart";
import logo from "../assets/logo.webp";
import LikeImg from "../assets/HeartM.svg";
import CartImg from "../assets/CartM.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router";

import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Shoppin = () => {
  const [index, setIndex] = useState(0);
  const [LikeInfo, setLikeInfo] = useState([]);
  const [addToCart, setaddToCart] = useState([]);

  const product = Data[index];

  const handleSwipe = (direction, productObj) => {
    if (direction === "right") {
      setLikeInfo((prev) => [...prev, productObj]);
    } else if (direction === "left") {
      console.log("Passed:", productObj.id);
    } else if (direction === "up") {
      setaddToCart((prev) => [...prev, productObj]);
    }
    setIndex((prev) => prev + 1);
  };

  const SwipeCard = ({ product }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-20, 20]);

    const handleDragEnd = (_, info) => {
      const offsetX = info.offset.x;
      const offsetY = info.offset.y;

      if (offsetX > 150) {
        handleSwipe("right", product);
      } else if (offsetX < -150) {
        handleSwipe("left", product);
      } else if (offsetY < -150) {
        handleSwipe("up", product);
      }
    };

    return (
      <motion.div
        className="product-card"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        style={{ x, y, rotate }}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <div className="product-image-container">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="product-details">
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-brand">
              Brand:{" "}
              <a href="#" className="brand-link">
                {product.brand}
              </a>
            </p>
          </div>
          <div className="product-pricing">
            <span className="original-price">Rs. {product.originalPrice}</span>
            <span className="current-price">Rs. {product.price}</span>
            <span className="discount">
              ({product.discountPercentage}% OFF)
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <BrowserRouter>
      <div className="shoppin-page">
        <div className="shoppin-header">
          <Link to="/Like">
            <img src={LikeImg} alt="Like" className="header-icon" />
          </Link>
          <Link to="/">
            <img src={logo} alt="Shoppin Logo" className="header-logo" />
          </Link>
          <Link to="/AddToCart">
            <img src={CartImg} alt="Cart" className="header-icon" />
          </Link>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="product-card-container">
                <AnimatePresence>
                  {product ? (
                    <SwipeCard key={product.id} product={product} />
                  ) : (
                    <div className="No-More">No more products.</div>
                  )}
                </AnimatePresence>
              </div>
            }
          />
          <Route path="/Like" element={<Like LikeP={LikeInfo} />} />
          <Route
            path="/AddToCart"
            element={<AddToCart AddToCartP={addToCart} />}
          />
        </Routes>

        <div className="footer-text">
          <span className="footer-text-border">SHOPPIN'</span>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Shoppin;
