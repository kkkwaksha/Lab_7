import React from "react";
import GoodsCard from "./GoodsCard";
import bananaImg from "../../assets/images/banana.png";
import strawberryImg from "../../assets/images/strawberry.png";
import cherriesImg from "../../assets/images/cherries.png";
import nectarineImg from "../../assets/images/nectarine.png";
import pineappleImg from "../../assets/images/pineapple.png";
import watermelonImg from "../../assets/images/watermelon.png";

function GoodsGallery() {
  const goods = [
    { id: 1, image: bananaImg, name: "Банан", price: 100 },
    { id: 2, image: strawberryImg, name: "Полуниця", price: 120 },
    { id: 3, image: cherriesImg, name: "Черешня", price: 150 },
    { id: 4, image: nectarineImg, name: "Нектарин", price: 145 },
    { id: 5, image: pineappleImg, name: "Ананас", price: 300 },
    { id: 6, image: watermelonImg, name: "Кавун", price: 50 },
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
