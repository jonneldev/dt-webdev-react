import React from "react";
import ProductItem from "./ProductItem";

// memo: Avoid re-rendering if props don’t change
const ProductList = React.memo(({ products, addToCart }) => {
  console.log("📦 Rendering ProductList");

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
});

export default ProductList;
