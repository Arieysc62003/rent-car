import React, { useState } from "react";
import { useEffect } from "react";

import CardSingle from "../components/CardSingle";
import data from "../data/data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditCar from "./EditCar";

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const Cars = () => {
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem("cars")));
  const removeCar = (id) => {
    const update = cars.filter((item) => item.id !== id);
    setCars(update);
  };
  let navigate = useNavigate();

  const editCar = (id) => {
    navigate("/EditCar/" + id);
  };

  useEffect(() => {
    const changeCars = JSON.parse(localStorage.getItem("cars"));
    if (changeCars) {
      setCars(changeCars);
    }
  }, []);

  return (
    <div>
      <h1 className="header">Car rental center</h1>
      <div style={container}>
        {cars.map((a) => (
          <CardSingle
            key={a.id}
            car={a}
            removeCar={removeCar}
            editCar={editCar}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars;
