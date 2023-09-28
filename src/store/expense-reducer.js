import { createSlice } from "@reduxjs/toolkit";

const initialExpense = { expenses: [], premiumButton: false };

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initialExpense,
  reducers: {
    updateExpense(state, action) {
      state.expenses = action.payload;
    },
    addingNewExpense(state,action)
    {
      console.log('adding new expense',action.payload)
      state.expenses=[...state.expenses,action.payload]
    },
    edditingExpense(state,action)
    {
      let filteredArr=state.expenses.filter((arr)=>arr.Id !==action.payload);
      state.expenses=filteredArr;
    },
    setPremiumButton(state) {
      state.premiumButton = true;
    },
    unSetPremiumButton(state) {
      state.premiumButton = false;
    },
  },
});

export const expenseAction = expenseSlice.actions;
export default expenseSlice.reducer;
