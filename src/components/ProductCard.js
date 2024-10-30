import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image"></div>
      <div className="product-details">
        <p className="product-category">Perfume</p>
        <h1 className="product-title">Gabrielle Essence Eau De Parfum</h1>
        <p className="product-description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="product-price">
          <span className="current-price">$149.99</span>
          <span className="original-price">$169.99</span>
        </div>
        <button className="add-to-cart-btn">
          <img src={`${process.env.PUBLIC_URL}/images/icon-cart.svg`} alt="cart icon" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
