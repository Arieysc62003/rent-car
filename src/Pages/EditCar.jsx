import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCar = () => {
  const [add, setAdd] = useState({
    model: "",
    img: "",
    year: "",
    engine: "",
    pricePerDay: "",
    gearbox: "",
    color: "",
    adaptedForDisabled: "",
    phoneNumber: "",
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
    const update = JSON.parse(localStorage.getItem("cars")).filter(
      (car) => car.id !== id
    );
    update.push(add);

    navigate("/Cars");
    // let obj = {
    //   model: add.model,
    //   img: add.img,
    //   year: add.year,
    //   engine: add.engine,
    //   pricePerDay: add.pricePerDay,
    // };
    localStorage.setItem("cars", JSON.stringify(update));
  };
  return (
    <>
      <h1 className="header"> Edit Car</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          onChange={handleChange}
          defaultValue={add.model}
        />

        <br />
        <br />
        <label htmlFor="img">Img</label>
        <input
          type="text"
          name="img"
          onChange={handleChange}
          defaultValue={add.img}
        />

        <br />
        <br />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          onChange={handleChange}
          defaultValue={add.year}
        />

        <br />
        <br />
        <label htmlFor="engine">Engine</label>
        <input
          type="text"
          name="engine"
          onChange={handleChange}
          defaultValue={add.engine}
        />

        <br />
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
        <label htmlFor="gearbox">Gearbox:</label>
        <input
          type="text"
          name="gearbox"
          onChange={handleChange}
          defaultValue={add.gearbox}
        />
        <br />
        <br />
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          name="color"
          onChange={handleChange}
          defaultValue={add.color}
        />
        <br />
        <br />
        <label htmlFor="adaptedForDisabled">Adapted For Disabled:</label>
        <input
          type="text"
          name="adaptedForDisabled"
          onChange={handleChange}
          defaultValue={add.adaptedForDisabled}
        />
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          onChange={handleChange}
          defaultValue={add.phoneNumber}
        />
        <br />
        <br />
        <button type="submit">send</button>
      </form>
    </>
  );
};

export default EditCar;
