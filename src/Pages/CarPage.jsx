import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";

const CONTAINER = {
  fontSize: "150%",
  color: "bluck",
  textAlign: "left",
  margin: "10px",
  padding: "20px 0px",
  paddingTop: "0",
};
const section = {
  fontSize: "100%",
  color: "bluck",
};

const CarPage = () => {
  const [cars, setCars] = useState(data);
  const { id } = useParams();
  const findID = cars.find((car) => car.id === id);

  return (
    <for>
      <h1 className="header">Car rental center</h1>
      <div style={CONTAINER}>
        <img
          className="imgPage"
          src={findID.img}
          alt="qqq"
          width="100%"
          height="50%"
        />
        <h1>{" model: " + findID.model}</h1>
        <p style={section}>{"year: " + findID.year}</p>
        <p style={section}>{"engine: " + findID.engine}</p>
        <p style={section}>{"price per day: " + findID.pricePerDay}</p>
      </div>
    </for>
  );
};

export default CarPage;
