import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((second) => second + 1);
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div>
      <h1>Seconds:{seconds}</h1>
    </div>
  );
};

export default TimerComponent;
