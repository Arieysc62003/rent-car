import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import CardSingle from "../components/CardSingle";

let all = [
  {
    id: 1,
    model: " model: Mazda3",
    img: "pictures/aaa.jpg",
    year: "year: 2018",
    engine: " engine: 2000cc torbo",
    pricePerDay: "price Per Day :150$ ",
  },
  {
    id: 2,
    model: " model: Mazda3",
    img: "pictures/Jeep.jpg",
    year: "year: 2018",
    engine: " engine: 2000cc torbo",
    pricePerDay: "price Per Day :150$ ",
  },
  {
    id: 3,
    model: " model: Mazda3",
    img: "pictures/aaa.jpg",
    year: "year: 2018",
    engine: " engine: 2000cc torbo",
    pricePerDay: "price Per Day :150$ ",
  },
  {
    id: 4,
    model: " model: Mazda3",
    img: "pictures/Jeep.jpg",
    year: "year: 2018",
    engine: " engine: 2000cc torbo",
    pricePerDay: "price Per Day :150$ ",
  },
  {
    id: 5,
    model: " model: Mazda3",
    img: "pictures/aaa.jpg",
    year: "year: 2018",
    engine: " engine: 2000cc torbo",
    pricePerDay: "price Per Day :150$ ",
  },
  {
    id: 6,
    model: " model: Mazda3",
    img: "pictures/Jeep.jpg",
    year: "year: 2018",
    engine: " engine: 2000cc torbo",
    pricePerDay: "price Per Day :150$ ",
  },
  {
    id: 7,
    model: " model: Mazda3",
    img: "pictures/Jeep.jpg",
    year: "year: 2018",
    engine: " engine: 2000cc torbo",
    pricePerDay: "price Per Day :150$ ",
  },
  {
    id: 8,
    model: " model: Mazda3",
    img: "pictures/Jeep.jpg",
    year: "year: 2018",
    engine: " engine: 2000cc torbo",
    pricePerDay: "price Per Day :150$ ",
  },
];
const container = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const Cars = () => {
  const [cars, setCars] = useState(all);

  return (
    <div style={container}>
      {cars.map((a) => (
        <CardSingle key={a.id} car={a} />
      ))}
    </div>
  );
};

export default Cars;
