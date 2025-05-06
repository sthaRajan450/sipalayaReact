import { createContext, useContext } from "react";

// Create the context
export const userContext = createContext();

// Export the Provider for wrapping components
export const UserProvider = userContext.Provider;

// Export a hook for consuming the context
export default function useUser() {
  return useContext(userContext);
}
