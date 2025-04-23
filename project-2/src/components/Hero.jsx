import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center bg-[linear-gradient(115deg,_#442F90_0%,_#220F68_100%)] w-full text-white px-30 py-7 ">
      <div>
        <h1 className="text-7xl w-[70%] font-bold">
          Career-Ready IT Training in Nepal
        </h1>
        <p className="py-5 pb-10 text-[18px]">
          Gain job-ready skills with our IT courses in Nepal. Elevate your
          career prospects today!
        </p>
        <Link className="bg-[#442F90] p-5 m-3  rounded-[10px]" to="/courses">
          Find The Course <i className="ri-arrow-right-line"></i>{" "}
        </Link>
      </div>
      <div>
        <img
          className="w-180"
          src="https://sipalaya.com/wp-content/uploads/2024/03/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
