import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleUpdate = (todo) => {
    const newText = prompt("Update todo:", todo.text);
    if (newText && newText.trim() !== "") {
      dispatch(updateTodo({ id: todo.id, text: newText }));
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>{" "}
          <button onClick={() => handleUpdate(todo)}>Update</button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
