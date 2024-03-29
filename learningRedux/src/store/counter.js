import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      console.log(state.counter);
    },
    decrement(state) {
      state.counter--;
      console.log(state.counter);
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
      console.log(state.counter);
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
      console.log(state.showCounter);
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;