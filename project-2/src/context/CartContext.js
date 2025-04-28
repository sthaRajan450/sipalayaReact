import { createContext, useContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = CartContext.Provider;

export function useCart() {
  return useContext(CartContext);
}
