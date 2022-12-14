import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  toggle: false,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
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

// const counterReducer = (state = { counter: 0, toggle: false }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       toggle: state.toggle,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       toggle: state.toggle,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.value,
//       toggle: state.toggle,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       toggle: !state.toggle,
//     };
//   }
//   return state;
// };
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
