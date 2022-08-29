import React from "react";
import ReactDOM from "react-dom/client";
import { NavLink, Link } from "react-router-dom";
import Header from "./Header";

function Navigation({ link }) {
  return (
    <ul>
      {link.map((l, i) => {
        return (
          <NavLink
            key={i}
            to={l.route}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {l.name}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default Navigation;
