import React from "react";
import ReactDOM from "react-dom/client";
// import aaa.jpg from "./picture/aaa.jpg";

function Card3() {
  return (
    <div className="card">
      <img
        src="pictures/Jeep.jpg"
        alt={"Jeep"}
        height={"120px"}
        width={"120px"}
      />
      <div className="details">
        <h3>details</h3>

        <p>model: Jeep </p>
        <p>year: 2018 </p>
        <p>engine: 2000cc torbo</p>
        <p>price per day: 150$ </p>
      </div>
    </div>
  );
}

export default Card3;
