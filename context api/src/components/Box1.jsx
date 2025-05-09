import React from "react";
import useUser from "../context/userContext";

const Box1 = () => {
  const { user } = useUser();
 
  return (
    <div>
      <h1>Name:{user.name}</h1>
      <h1>Age:{user.age}</h1>
      <h1>Address:{user.address}</h1>
    </div>
  );
};
export default Box1;
