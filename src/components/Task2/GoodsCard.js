import React from "react";

function GoodsCard({ image, name, price }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          height: "150px",
          width: "auto",  
        }}
      />
      <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{name}</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;
