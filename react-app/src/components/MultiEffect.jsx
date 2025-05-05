import React, { useEffect, useState } from "react";

const MultiEffect = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Count is updated");
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Seconds:{seconds}</h1>
    </div>
  );
};

export default MultiEffect;
