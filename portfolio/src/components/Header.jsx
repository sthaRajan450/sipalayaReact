import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex justify-between px-20 py-5 items-center font-semibold text-white">
      <div>
        <h1 className="text-4xl font-bold">Rajan</h1>
      </div>

      <div className="flex gap-10 text-[20px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/resume">Resume </NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </nav>
  );
};

export default Header;
