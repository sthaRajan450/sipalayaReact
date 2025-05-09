import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const exists = state.pastes.find(
        (paste) => paste.title === action.payload.title
      );

      if (exists) {
        toast.error("Paste with same title already exists");
      } else {
        state.pastes.push(action.payload);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste created successfully");
      }
    },

    updateToPastes: (state, action) => {
      const index = state.pastes.findIndex(
        (paste) => paste.id === action.payload.id
      );
      if (index !== -1) {
        state.pastes[index] = action.payload;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully");
      }
    },

    ResetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes cleared");
    },

    RemoveFromPastes: (state, action) => {
      state.pastes = state.pastes.filter(
        (paste) => paste.id !== action.payload
      );
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste removed");
    },
  },
});

export const {
  addToPastes,
  updateToPastes,
  ResetAllPastes,
  RemoveFromPastes,
} = pasteSlice.actions;

export default pasteSlice.reducer;
