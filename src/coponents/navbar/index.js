import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li className="dashboard">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="jokes">
          <NavLink to="/jokes">Jokes</NavLink>
        </li>
        <li className="logout">
          <NavLink to="/login">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
