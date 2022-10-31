import React, { useEffect } from "react";
import data from "../data/data";

function Overtrue() {
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(data));
  }, []);

  return (
    <>
      <h1 className="header"> Welcome car rental center</h1>;
      <img
        className="imgOver"
        src="https://qph.cf2.quoracdn.net/main-qimg-f8dc46bfb506003ebc46c564809e386b-lq"
        alt="overtrue"
      />
    </>
  );
}

export default Overtrue;
