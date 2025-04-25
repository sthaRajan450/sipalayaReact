import React, { useState } from "react";
import "./App.css";
const App = () => {
  let [length, setLength] = useState(0);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="heading">Counter App</h1>
      <div className="container">
        <button
          className="add"
          onClick={() => {
            if (counter < 200) {
              setCounter(counter + 1);
            }
          }}
        >
          ADD
        </button>
        <h1 className="result">Counter:{counter}</h1>
        <button
          className="sub"
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
            }
          }}
        >
          SUB
        </button>
      </div>
      <button className="reset" onClick={() => setCounter(0)}>
        Reset
      </button>

      <h1 className="addValueHeading">Add value through input </h1>
      <div className="container2">
        <input
          type="text"
          value={length}
          placeholder=""
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <button
          onClick={() => {
            if (counter < 200) {
              setCounter(counter + length);
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
