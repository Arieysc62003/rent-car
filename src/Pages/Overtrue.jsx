import React, { useEffect } from "react";
import data from "../data/data";

function Overtrue() {
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(data));
  }, []);

  return (
    <>
      <h1 className="header"> Welcome car rental center</h1>
      <img
        className="imgOver"
        src="https://www.webintravel.com/wp-content/uploads/2019/12/car-rental-sefa-ozel-GettyImages.jpg"
        alt="overtrue"
      />
    </>
  );
}

export default Overtrue;
