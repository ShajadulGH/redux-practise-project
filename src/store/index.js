import { createSlice, configureStore } from "@reduxjs/toolkit";

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
const initialAuth = {
  auth: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuth,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
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
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
export default store;
