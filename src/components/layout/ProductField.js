import React from "react";
import "./ProductField.css";

const ProductField = ({ label, name, cost, value, onChange, total }) => {
  return (
    <div className="product-row">
      <div className="product product-label">{label}</div>
      <div className="product product-cost">${cost}</div>
      <div className="product product-quantity-input">
        <input type="text" name={name} value={value} onChange={onChange} />
      </div>
      <div className="product product-total">${total}</div>
    </div>
  );
};

export default ProductField;
