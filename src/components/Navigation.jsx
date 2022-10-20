import React from "react";
import ReactDOM from "react-dom/client";
import { NavLink, Link } from "react-router-dom";
import Header from "./Header";

function Navigation({ link }) {
  return (
    <ul>
      {link.map((l, i) => (
        <div className="link" key={i}>
          <NavLink
            to={l.route}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {l.name}
          </NavLink>
        </div>
      ))}
    </ul>
  );
}

export default Navigation;
