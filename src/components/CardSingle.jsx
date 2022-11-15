import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import data from "../data/data";

const SCard = {
  color: "bluck",
  border: "2px black solid",
  width: "18%",
  textAlign: "center",
  margin: "10px",
  padding: "20px 0px",
  paddingTop: "0",
};

const CardSingle = ({ car, removeCar, editCar }) => {
  const deleteId = (id) => {
    if (confirm("Are you sure want to delete this ad?") == false) {
      return;
    }
    removeCar(id);
  };
  const editId = (id) => {
    editCar(id);
  };

  return (
    <div style={SCard}>
      <img src={car.img} alt="jeep" width="100%" height="50%" />
      <p>{"Model: " + car.model}</p>
      <p>{"Color: " + car.color}</p>
      <p>{"Year: " + car.year}</p>
      <p>{"Price per day: " + car.pricePerDay}</p>
      <br />
      <Link to={"/CarPage/" + car.id}>More details</Link>
      <br />
      <button onClick={() => editId(car.id)}>edit</button>
      <br />
      <button onClick={() => deleteId(car.id)}>delete</button>
    </div>
  );
};

export default CardSingle;
