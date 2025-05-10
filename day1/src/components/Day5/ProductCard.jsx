import React from "react";
import ProductDetails from "./ProductDetails";
import QuantitySelector from "./QuantitySelector";

// Shows product details and its quantity selector
export default function ProductCard({ product, onQuantityChange, quantity }) {
  
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <ProductDetails product={product} />

      {/* TODO: Hook up quantity change logic */}
      <QuantitySelector
        quantity={quantity}
        onIncrease={() => {
          // TODO: Call onQuantityChange with product ID and "increase"
          const newQuantity = quantity + 1;
          onQuantityChange(product.id, newQuantity)
          
        }}
        onDecrease={() => {
          // TODO: Call onQuantityChange with product ID and "decrease"
          const newQuantity = quantity - 1;
          onQuantityChange(product.id, newQuantity)
        }}
      />
    </div>
  );
}
