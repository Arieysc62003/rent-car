import React from "react";
import ReactDOM from "react-dom/client";
const Sfooter = {
  position: "fixed",
  bottom: "0px",
  width: "100%",
  textAlign: "center",
  backgroundColor: "rgba(148, 184, 214, 0.532)",
  padding: "20px",
};
const Footer = (props) => {
  return (
    <div style={Sfooter}>
      <p>all rights reserved to Arie </p>
    </div>
  );
};

export default Footer;
