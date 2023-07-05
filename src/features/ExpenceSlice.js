import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter((expense) => {
        if (expense.id !== action.payload) {
          return expense;
        }
      });
    },

    editExpense: (state, action) => {
      state.expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload.updatedExpense;
        }
        return expense;
      });
    },
  },
});

export const { addExpense, deleteExpense, editExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
