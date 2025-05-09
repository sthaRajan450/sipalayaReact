import React, { useCallback } from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <ChildComponent buttonName="Click Me" handleclick={handleClick} />
    </div>
  );
};

export default App;
