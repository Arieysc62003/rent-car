import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CardSingle from "../components/CardSingle";
import data from "../data/data";

const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const Cars = () => {
  const [cars, setCars] = useState(data);

  return (
    <div style={container}>
      {cars.map((a) => (
        <CardSingle key={a.id} car={a} />
      ))}
    </div>
  );
};

export default Cars;
