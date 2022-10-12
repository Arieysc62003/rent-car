import React from "react";
import { useNavigate } from "react-router-dom";

function AddCar() {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/Cars");
  };
  return (
    <>
      <h1 className="header"> Add Car</h1>
      <button onClick={handleSubmit}>send</button>
    </>
  );
}

export default AddCar;
