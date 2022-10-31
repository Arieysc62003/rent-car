import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddCar = () => {
  const { id } = useParams();
  const [addC, setAddC] = useState({
    id: id,
    model: "",
    img: "",
    year: "",
    engine: "",
    pricePerDay: "",
  });

  const handleChange = (e) => {
    setAddC({ ...addC, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addC.model != "") {
      const updata = JSON.parse(localStorage.getItem("cars"));
      updata.push(addC);
      localStorage.setItem("cars", JSON.stringify(updata));
    }
    navigate("/Cars");
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
          value={addC.model}
        />

        <br />
        <br />
        <label htmlFor="img">Img</label>
        <input
          type="text"
          name="img"
          onChange={handleChange}
          value={addC.img}
        />

        <br />
        <br />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          onChange={handleChange}
          value={addC.year}
        />

        <br />
        <br />
        <label htmlFor="engine">Engine</label>
        <input
          type="text"
          name="engine"
          onChange={handleChange}
          value={addC.engine}
        />

        <br />
        <br />
        <label htmlFor="pricePerDay">Price Per Day:</label>
        <input
          type="text"
          name="pricePerDay"
          onChange={handleChange}
          alue={addC.pricePerDay}
        />
        <br />
        <br />
        <button type="submit">send</button>
      </form>
    </>
  );
};

export default AddCar;
