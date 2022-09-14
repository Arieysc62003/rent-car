import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
// import Details from "../Pages/Details";

const CONTAINER = {
  color: "bluck",
  border: "2px black solid",
  width: "18%",
  textAlign: "center",
  margin: "10px",
  padding: "20px 0px",
  paddingTop: "0",
};

const CardSingle = ({ car }) => (
  <div style={CONTAINER}>
    <img src={car.img} alt="jeep" width="100%" height="50%" />
    <p>{car.model}</p>
    <p>{car.year}</p>
    <p>{car.engine}</p>
    <p>{car.pricePerDay}</p>
    <br />
    <Link to={"/CarPage/" + car.id}>More details</Link>
  </div>
);

export default CardSingle;
