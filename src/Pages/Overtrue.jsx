import React, { useEffect } from "react";
import data from "../data/data";

function Overtrue() {
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(data));
  }, []);

  return <h1 className="header"> Welcome car rental center</h1>;
}

export default Overtrue;
