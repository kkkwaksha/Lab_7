import React from "react";
import GoodsCard from "./GoodsCard";

function GoodsGallery() {
  const goods = [
    { id: 1, image: "/images/banana.png", name: "Банан", price: 100 },
    { id: 2, image: "/images/strawberry.png", name: "Полуниця", price: 120 },
    { id: 3, image: "/images/cherries.png", name: "Черешня", price: 150 },
    { id: 4, image: "/images/nectarine.png", name: "Нектарин", price: 145 },
    { id: 5, image: "/images/pineapple.png", name: "Ананас", price: 300 },
    { id: 6, image: "/images/watermelon.png", name: "Кавун", price: 50 },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {goods.map((good) => (
        <GoodsCard key={good.id} {...good} />
      ))}
    </div>
  );
}

export default GoodsGallery;
