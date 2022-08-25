import React from "react";
import ReactDOM from "react-dom/client";
// import aaa.jpg from "./picture/aaa.jpg";

function Card2() {
  return (
    <div className="card">
      <img
        src="pictures/aaa.jpg"
        alt={"Mazda 6"}
        height={"120px"}
        width={"120px"}
      />
      <div className="details">
        <h3>details</h3>

        <p>model: Mazda 6 </p>
        <p>year: 2022 </p>
        <p>engine: 2500cc </p>
        <p>price per day: 120$</p>
      </div>
    </div>
  );
}

export default Card2;
