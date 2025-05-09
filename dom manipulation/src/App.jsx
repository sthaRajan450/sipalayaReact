import React, { useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  // let val = useRef(0);
  // let btnRef = useRef();
  // useEffect(() => {
  //   console.log("run on each render");
  // });

  // const [time, setTime] = useState(0);
  // let timerRef = useRef(null);
  // function startTimer() {
  //   timerRef.current = setInterval(() => {
  //     setTime((time) => time + 1);
  //   }, 1000);
  //   console.log(timerRef.current);
  // }
  // function stopTimer() {
  //   clearInterval(timerRef.current);
  //   timerRef.current = null;
  // }
  // function resetTimer() {
  //   stopTimer();
  //   setTime(0);
  // }

  function doublevalue(value) {
    console.log("inside expenseive code");
    for (let i = 0; i <= 100000000; i++) {}
    return value * 2;
  }

  const double = useMemo(() => doublevalue(input), [input]);
  return (
    <div>
      <button
        // ref={btnRef}
        onClick={() => {
          // val.current = val.current + 1;
          // console.log("value of vale is" + val.current);
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <p>Count:{count}</p>
      <p>Double:{double}</p>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        
      />
      
      {/* 
      <button
        onClick={() => {
          btnRef.current.style.backgroundColor = "red";
        }}
      >
        change the color of button
      </button> */}

      {/*       
      <h1>Time: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button> */}
    </div>
  );
};

export default App;
