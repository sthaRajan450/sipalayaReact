import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";
const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        add
      </button>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        sub
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br /> <br />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input onClick={() => dispatch(incrementByAmount(amount))} type="submit" />
    </div>
  );
};

export default App;
