import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data";

const EditCar = ({ changeCar }) => {
  const [add, setAdd] = useState({
    model: "",
    img: "",
    year: "",
    engine: "",
    pricePerDay: "",
  });

  const { id } = useParams();

  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const findCar = () => {
      const find = JSON.parse(localStorage.getItem("cars")).find(
        (car) => car.id === id
      );
      setAdd(find);
    };
    findCar();
  }, []);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updata = JSON.parse(localStorage.getItem("cars")).filter(
      (car) => car.id !== id
    );
    updata.push(add);

    // console.log(add);
    // console.log(updata);

    navigate("/Cars");
    // let obj = {
    //   model: add.model,
    //   img: add.img,
    //   year: add.year,
    //   engine: add.engine,
    //   pricePerDay: add.pricePerDay,
    // };
    localStorage.setItem("cars", JSON.stringify(updata));
  };
  return (
    <>
      <h1 className="header"> Add Car</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          onChange={handleChange}
          defaultValue={add.model}
        />

        <br />
        <label htmlFor="img">Img</label>
        <input type="text" name="img" onChange={handleChange} value={add.img} />

        <br />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          onChange={handleChange}
          defaultValue={add.year}
        />

        <br />
        <label htmlFor="engine">Engine</label>
        <input
          type="text"
          name="engine"
          onChange={handleChange}
          defaultValue={add.engine}
        />

        <br />
        <label htmlFor="pricePerDay">Price Per Day:</label>
        <input
          type="text"
          name="pricePerDay"
          onChange={handleChange}
          defaultValue={add.pricePerDay}
        />
        <br />
        <br />
        <button type="submit">send</button>
      </form>
    </>
  );
};

export default EditCar;
