import React from "react";
import ProductDetails from "./ProductDetails";
import QuantitySelector from "./QuantitySelector";

// Shows product details and its quantity selector
export default function ProductCard({ product, onQuantityChange }) {
   
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
        quantity={product.quantity}
        onIncrease={() => {
          // TODO: Call onQuantityChange with product ID and "increase"
          const newQuantity = Math.min(product.quantity + 1, 10)
          onQuantityChange(product.id, newQuantity)
          
        }}
        onDecrease={() => {
          // TODO: Call onQuantityChange with product ID and "decrease"
          const newQuantity = Math.max(product.quantity -1, 0)
          onQuantityChange(product.id, newQuantity)
        }}
      />
    </div>
  );
}
