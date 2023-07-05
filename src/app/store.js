import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/ExpenceSlice";

export const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
