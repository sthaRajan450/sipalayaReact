import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{ id: 1, title: '', price: '' }],
};

const cartSlice = createSlice({
  name: "cart",
  initialState, 
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload); 
    },
    remove: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload); 
      
    },
    update: (state, action) => {
      const { id, updatedItem } = action.payload;
      const index = state.cart.findIndex(item => item.id === id);
      if (index !== -1) {
        state.cart[index] = { ...state.cart[index], ...updatedItem };
      }
    },
  },
});

export const { add, remove, update } = cartSlice.actions;
export default cartSlice.reducer;
