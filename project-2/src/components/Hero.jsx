import React from "react";
import './Hero.css'
function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Career-Ready IT Training in Nepal</h1>
        <p>
          Gain job-ready skills with our IT courses in Nepal. Elevate your
          career prospects today!
        </p>
        <button>
          Find the course  <i class="ri-arrow-right-line"></i>
        </button>
      </div>
      <div className="hero-img">
        <img src="https://sipalaya.com/wp-content/uploads/2024/03/hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
