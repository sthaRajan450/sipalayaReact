import React, { useReducer } from "react";
import { useContext } from "react";
import { DataContext } from "./context/DataProvider";

const App = () => {
  // const { state, dispatch } = useContext(DataContext);

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      {/* App:{state}
      <button
        onClick={() => {
          dispatch(100);
        }}
      >
        click
      </button> */}
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default App;
