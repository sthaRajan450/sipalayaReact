import React, { useEffect, useState } from "react";
import LoggerComponent from "./components/LoggerComponent";
import DataFetcher from "./components/DataFetcher";
import TimerComponent from "./components/TimerComponent";
import MultiEffect from "./components/MultiEffect";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  //useEffect is a react hook used to generate side effets, or it is used to synchronize components with external sources
  //for example database connections, api call,etc

  //variation
  // useEffect(() => {
  //   alert("i will run on each render");
  // });

  //varitation 1
  // useEffect(() => {
  //   alert("i will run on only first render");
  // }, []);

  //variation 3
  // useEffect(() => {
  //   alert('i will only run when count is updated')
  // }, [count])

  //variation 4
  // useEffect(() => {
  //   alert("i will only run when count/total is updated");
  // }, [count, total]);

  //variation 5
  // useEffect(() => {
  //   alert("count is updated");
  //   return () => {
  //     alert("count is unmounted from ui");
  //   };
  // }, [count]);

  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <TimerComponent/> */}

      <MultiEffect/>
      {/* <button onClick={() => setCount(count + 1)}>ADD</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>SUb</button>
      <br />
      <button onClick={() => setTotal(total + 2)}>Update Total</button>
      <h1>{total}</h1> */}
    </div>
  );
};

export default App;
