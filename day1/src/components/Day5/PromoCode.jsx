import React from "react";

// Simple input for entering promo code
// TODO: Implement the promo code by adding the correct props and passing it correctly to value and onChange
export default function PromoCode({promoCode, setPromoCode}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="promo">Promo Code:</label>
      <input
        id="promo"
        type="text"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        placeholder="Enter promo code"
        style={{ marginLeft: "0.5rem" }}
      />
    </div>
  );
}
