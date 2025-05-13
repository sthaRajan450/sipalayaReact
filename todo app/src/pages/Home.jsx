import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

const Home = () => {
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  const { state, dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
 

    if (editingId !== null) {
      dispatch({
        type: "updateTodo",
        payload: { id: editingId, task },
      });
      setEditingId(null);
    } else {
      dispatch({
        type: "addToTodo",
        payload: { id: Date.now(), task },
      });
    }

    setTask("");
  };

  const handleEdit = (todo) => {
    setTask(todo.task);
    setEditingId(todo.id);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-blue-500 p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="bg-white px-3 py-2 rounded">
          {editingId !== null ? "Update Task" : "Add Task"}
        </button>
      </form>

      {state.length === 0 ? (
        <p className="text-white">No todos</p>
      ) : (
        <div className="flex flex-col gap-2 w-full max-w-md">
          {state.map((todo) => (
            <div
              key={todo.id}
              className="bg-white rounded p-3 flex justify-between items-center"
            >
              <p>{todo.task}</p>
              <div className="flex gap-2">
                <button
                  className="bg-red-700 px-2 py-1 text-white rounded"
                  onClick={() =>
                    dispatch({ type: "removeTodo", payload: todo.id })
                  }
                >
                  Delete
                </button>
                <button
                  className="bg-green-700 px-2 py-1 text-white rounded"
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
