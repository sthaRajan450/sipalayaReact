import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav>
        <img
          src="https://sipalaya.com/wp-content/uploads/2024/03/sip-logo-trans.png"
          alt=""
        />
        <div className="right">
          <a href="#">Home</a>
          <a href="#">All Courses</a>
          <a href="#">Verify Certificate</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
