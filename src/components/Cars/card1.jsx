import React from "react";
import ReactDOM from "react-dom/client";

function Card1() {
  return (
    <div className="card">
      <img
        src="pictures/Mazda3.jpg"
        alt={"Mazda 3"}
        height={"120px"}
        width={"120px"}
      />
      <div className="details">
        <h3>details</h3>

        <p>model: Mazda 3 </p>
        <p>year: 2020 </p>
        <p>engine: 1998cc </p>
        <p>price per day: 100$ </p>
      </div>
    </div>
  );
}

export default Card1;
