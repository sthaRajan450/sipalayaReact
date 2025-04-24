import React from "react";
function FeaturedCard({ card }) {
  return (
    <div className="flex items-center gap-5  mt-10 p-4 rounded-2xl shadow-2xl shadow-gray-400 hover:text-white hover:bg-[#144DB0] group ">
      <p className="text-3xl">{card.icon}</p>
      <div>
        <h1 className="text-[25px] font-semibold text-blue-600 group-hover:text-white">
          {card.title}
        </h1>
        <p>{card.paragraph}</p>
      </div>
    </div>
  );
}

export default FeaturedCard;
