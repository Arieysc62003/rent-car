import React from "react";
import ReactDOM from "react-dom/client";

const CONTAINER = {
  color: "bluck",
  border: "2px black solid",
  width: "20%",
  textAlign: "center",
  margin: "10px",
  padding: "20px 0px",
  paddingTop: "0",
};

const CarSingle = ({ car }) => (
  <div style={CONTAINER}>
    <img src={car.img} alt="jeep" width={"100%"} />
    <p>{car.model}</p>
    <p>{car.year}</p>
    <p>{car.engine}</p>
    <p>{car.pricePerDay}</p>
  </div>
);
export default CarSingle;
