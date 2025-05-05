import React, { useState } from "react";
import ProductList from "./ProductList";
import CheckoutButton from "./CheckoutButton";
import PromoCode from "./PromoCode";

// Initial list of products including quantity (default to 0)
const initialProducts = [
  {
    id: 1,
    name: "Lavender Soap",
    description: "Gentle and fragrant soap for daily use.",
    price: 50.0,
    quantity: 0,
  },
  {
    id: 2,
    name: "Shaving Cream",
    description: "Smooth lather for a clean shave.",
    price: 71.5,
    quantity: 0,
  },
  {
    id: 3,
    name: "Hand Lotion",
    description: "Moisturizing lotion for dry hands.",
    price: 66.25,
    quantity: 0,
  },
];

export default function CheckoutPage() {
  // const [products, setProducts] = useState(initialProducts);
  const [promoCode, setPromoCode] = useState("");
  const [productData, setProductData] = useState({})

  // TODO: Create a function that updates quantity of a specific product by its ID.
  // This should either increase or decrease the quantity (but never go below 0 or above 10).

  // const handleQuantityUpdate = (productId, newQuantity) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === productId ? { ...product, quantity: newQuantity } : product
  //     )
  //   );
  // };

  const handleQuantityUpdate = (productId, newQuantity) => {
    setProductData((prevData) => ({
      ...prevData,
      [productId] : {
        ...prevData[productId],
        quantity: newQuantity
      }
    }))
  }

  
  

  

  // TODO: Calculate total amount based on products with quantity > 0.
  //       If promoCode is exactly 'MAYTHE4THBWU', apply a 50% discount.

  // TODO: Determine if the checkout button should be disabled.
  //       It should be disabled if all quantities are 0.

  return (
    <div>
      <h1>🛒 Order Products</h1>

      {/* Promo code input field */}

      {/* List of product cards, pass handler to change quantities */}
      <ProductList
        products={initialProducts}
        productData={productData}
        onQuantityChange={
          // TODO: Replace this stub with actual quantity change handler
          handleQuantityUpdate
        }
      />
      <PromoCode promoCode={promoCode} setPromoCode={setPromoCode} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
        {/* TODO: Replace $0.00 with computed total (with or without discount) */}
        <div>
          <strong>Total: $0.00</strong>
        </div>
        {/* TODO: Replace false with logic to check if button should be disabled */}
        <CheckoutButton disabled={false} />
      </div>
    </div>
  );
}
