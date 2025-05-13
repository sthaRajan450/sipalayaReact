import React from "react";
import { Outlet } from "react-router-dom";
import { TodoProvider } from "./context/TodoProvider";

const App = () => {
  return (
    <div>
      <TodoProvider>
        <h1 className="text-center text-4xl   font-bold">Todo App</h1>
        <Outlet />
      </TodoProvider>
    </div>
  );
};

export default App;
