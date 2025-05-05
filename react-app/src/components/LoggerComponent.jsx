import React, { useEffect, useState } from "react";

const LoggerComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`component rendered or count changed: ${count}`);
  });

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LoggerComponent;
