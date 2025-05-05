import React from "react";

const Item = ({ isPacked, name }) => {
  // if else
  //   if (isPacked) {
  //     return <li className="item">{name} ✅</li>;
  //   } else {
  //     return <li className="item">{name} </li>;
  //   }

  // ternary operator
  //   return <li className="item">{isPacked ? name + "✅" : name}</li>;

  //&&
  return (
    <li className="item">
      {name}
      {isPacked && "✅"}
    </li>
  );
};

export default Item;
