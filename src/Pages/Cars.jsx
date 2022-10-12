import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CardSingle from "../components/CardSingle";
import data from "../data/data";
import { Link } from "react-router-dom";

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const Cars = () => {
  const [cars, setCars] = useState(data);

  return (
    <div>
      <h1 className="header">Car rental center</h1>
      <Link to="/AddCar" className="addcar">
        Add your car to rent
      </Link>
      <div style={container}>
        {cars.map((a) => (
          <CardSingle key={a.id} car={a} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
