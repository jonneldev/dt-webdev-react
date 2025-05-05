import React from "react";

// Displays product's name, description, and price
export default function ProductDetails({ product }) {
  return (
    <div>
      {/* TODO display product name, description, and price */}
      <h2>{}</h2>
      <p>{}</p>
      {/* TODO: Display the price with 2 decimal places only */}
      <strong>Price: ${}</strong>
    </div>
  );
}
