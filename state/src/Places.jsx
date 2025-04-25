import React from "react";
import './Places.css'
const Places = ({ place }) => {
  return (
    <div className="card">
      <img src={place.img} alt="" />
      <h1>{place.h1}</h1>
      <p>{place.p}</p>
    </div>
  );
};

export default Places;
