import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/login">Login</NavLink> */}

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
       
        <button
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </button>
       
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </button>
       
        <button
          onClick={() => {
            navigate("/menu");
          }}
        >
          Menu
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
       
      </nav>
    </div>
  );
};

export default Header;
