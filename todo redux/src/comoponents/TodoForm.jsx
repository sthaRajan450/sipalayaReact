import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch(addTodo(todo))
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          placeholder="Enter todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};


export default TodoForm;
