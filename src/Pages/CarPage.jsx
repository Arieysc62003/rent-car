import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem("cars")));
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
        <h1>{"Model: " + findID.model}</h1>
        <br />
        <p style={section}>{"Year: " + findID.year}</p>
        <br />
        <p style={section}>{"Color: " + findID.color}</p>
        <br />
        <p style={section}>{"Price per day: " + findID.pricePerDay}</p>
        <br />
        <p style={section}>{"Engine: " + findID.engine}</p>
        <br />
        <p style={section}>{"Gearbox: " + findID.gearbox}</p>
        <br />
        <p style={section}>{"Phone number: " + findID.phoneNumber}</p>
        <br />
        <p style={section}>
          {"Adapted for disabled: " + findID.adaptedForDisabled}
        </p>
      </div>
    </for>
  );
};

export default CarPage;
