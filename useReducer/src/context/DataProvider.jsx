import { useReducer } from "react";
import { createContext } from "react";

export const DataContext = createContext();
const reducer = (state, action) => {
//   console.log(state);
//   console.log(action+10);
};
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
