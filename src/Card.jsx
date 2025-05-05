import React from "react";

const Card = ({ title,name, setName }) => {
  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>i am inside children component {title}and the value of name is {name}</p>
    </div>
  );
};

export default Card;
