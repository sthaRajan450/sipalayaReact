import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navlinks = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/pastes",
      name: "Paste",
    },
  ];

  return (
    <nav className="flex space-x-6 p-4 bg-gray-100">
      {navlinks.map((navlink, index) => (
        <NavLink
          key={index}
          to={navlink.to}
          className={({ isActive }) =>
            `text-lg hover:text-orange-500 transition-colors duration-200 ${
              isActive ? "text-red-500 font-semibold underline" : "text-black"
            }`
          }
        >
          {navlink.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
