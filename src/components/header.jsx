import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <>
      <Navigation
        link={[
          { route: "/Overtrue", name: "Opening page" },
          { route: "/Cars", name: "Cars" },
        ]}
      />
    </>
  );
}

export default Header;
