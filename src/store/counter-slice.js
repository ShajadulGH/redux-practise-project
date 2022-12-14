import { createSlice } from "@reduxjs/toolkit";
const initialCounter = {
  counter: 0,
  toggle: false,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
