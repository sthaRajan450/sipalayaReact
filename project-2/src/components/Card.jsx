import React from "react";

function Card({ card }) {
  return (
    <div className="flex items-center gap-5">
      <div className=" flex items-center  w-20 rounded-2xl overflow-hidden">
        <img className="w-full h-full" src={card.img} alt="" />
      </div>
      <div>
        <h1 className="text-2xl text-blue-700 font-bold">{card.h1}</h1>
        <p className="text-[18px] text-blue-900">{card.p}</p>
      </div>
    </div>
  );
}

export default Card;
