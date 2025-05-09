import React, { useState } from "react";
import useUser from "../context/userContext";

const Box2 = () => {
  const [name, setName] = useState("");
  const { user, setUser } = useUser();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={(e) => {
          setUser({ ...user, name });
          setName("");
        }}
      >
        update
      </button>
    </div>
  );
};

export default Box2;
