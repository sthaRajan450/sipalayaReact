import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-30 py-4 bg-[linear-gradient(115deg,_#442F90_0%,_#220F68_100%)] w-full text-lg text-white">
        <NavLink>
          <img
            className="w-30"
            src="https://sipalaya.com/wp-content/uploads/2024/03/sip-logo-trans.png"
            alt=""
          />
        </NavLink>
        <div className="flex gap-x-10 pr-70">
          <Link to="/">Home</Link>
          <Link to="/courses">All Courses</Link>
          <Link to="/certificate-verification">Verify Certificate</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
