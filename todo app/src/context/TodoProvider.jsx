import { createContext, useReducer } from "react";

export const TodoContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "addToTodo":
      return [...state, action.payload];

    case "removeTodo":
      return state.filter((todo) => todo.id !== action.payload);
    case "updateTodo":
      const { id, task } = action.payload;
      return state.map((todo) => (todo.id === id ? { ...todo, task } : todo));

    default:
      return state; 
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};



// data provided through usenavigate can be accessed through useLocation