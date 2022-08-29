import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <>
      <h1 className="header">Car rental center</h1>
      <Navigation
        link={[
          { route: "/", name: "Cars" },
          { route: "/Luxury", name: "Luxury" },
          { route: "/Taxis", name: "Taxis" },
        ]}
      />
    </>
  );
}

export default Header;
