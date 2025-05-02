import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-5xl font-bold leading-15 capitalize">
        Hello! <br /> I am herry jason
      </h1>
      <p className=" w-2xl my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis
        provident vero deserunt possimus dolore optio saepe cupiditate pariatur
        ipsa placeat fugit ducimus soluta, aperiam, labore similique, ut rerum
        eos?
      </p>
      <button
        className="uppercase font-semibold border-3 px-6 py-4 rounded-full my-5 cursor-pointer "
        onClick={() => {
            navigate('/portfolio')
        }}
      >
        see portfolio
      </button>
    </div>
  );
};

export default Hero;
