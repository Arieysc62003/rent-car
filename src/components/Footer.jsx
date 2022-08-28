import React from "react";
import ReactDOM from "react-dom/client";

const Sfooter = {
  // display: "block",
  position: "sticky",
  bottom: "0",
  width: "100%",
  textAlign: "center",
  backgroundColor: "rgba(148, 184, 214, 0.532)",
  padding: "20px",
};
const Footer = (props) => {
  return (
    <footer style={Sfooter}>
      <p>all rights reserved to Arie </p>
    </footer>
  );
};

export default Footer;
