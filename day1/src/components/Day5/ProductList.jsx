import React from "react";
import ProductCard from "./ProductCard";

// Maps over products and renders a ProductCard for each
export default function ProductList({ products, onQuantityChange, productData }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuantityChange={onQuantityChange}
          productData={productData}
          quantity={productData[product.id]?.quantity || 0}
        />
      ))}
    </div>
  );
}


