import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive}) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive}) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
