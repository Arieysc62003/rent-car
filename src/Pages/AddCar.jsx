import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCar() {
  const [add, setAdd] = useState({
    model: "",
    year: 0,
    engine: "",
    pricePerDay: "",
  });

  const AddModel = (e) => {
    setAdd({ ...add, model: e.target.value });
  };
  const AddYear = (e) => {
    setAdd({ ...add, year: e.target.value });
  };
  const AddEngine = (e) => {
    setAdd({ ...add, engine: e.target.value });
  };
  const AddPricePerDay = (e) => {
    setAdd({ ...add, pricePerDay: e.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/Cars");
    localStorage.setItem("model", add.model);
    localStorage.setItem("year", add.year);
    localStorage.setItem("engine", add.engine);
    localStorage.setItem("model", add.model);
    localStorage.setItem("Price Per Day", add.pricePerDay);
  };
  return (
    <>
      <h1 className="header"> Add Car</h1>
      <label htmlFor="model">Model</label>
      <input type="text" id="model" onChange={AddModel} value={add.model} />

      <br />
      <label htmlFor="year">Year</label>
      <input type="number" id="year" onChange={AddYear} value={add.year} />

      <br />
      <label htmlFor="engine">Engine</label>
      <input type="text" id="engine" onChange={AddEngine} value={add.engine} />

      <br />
      <label htmlFor="pricePerDay">Price Per Day:</label>
      <input
        type="text"
        id="pricePerDay"
        name="pricePerDay"
        onChange={AddPricePerDay}
        value={add.pricePerDay}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>send</button>
    </>
  );
}

export default AddCar;
