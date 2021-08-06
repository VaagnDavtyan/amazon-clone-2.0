import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
//the global store 
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
