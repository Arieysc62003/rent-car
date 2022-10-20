import React, { useEffect, useState } from "react";
import CardSingle from "../components/CardSingle";
import data from "../data/data";
import { Link } from "react-router-dom";
import DeleteId from "../components/CardSingle";

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const Cars = () => {
  const [cars, setCars] = useState(data);

  const removeCar = (id) => {
    const update = cars.filter((item) => item.id !== id);
    setCars(update);
  };

  return (
    <div>
      <h1 className="header">Car rental center</h1>
      <Link to="/AddCar" className="addcar">
        Add your car to rent
      </Link>
      <div style={container}>
        {cars.map((a) => (
          <CardSingle key={a.id} car={a} removeCar={removeCar} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
