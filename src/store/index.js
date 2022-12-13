import { createStore } from "redux";
const counterReducer = (state = { counter: 0, toggle: false }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      toggle: state.toggle,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      toggle: state.toggle,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.value,
      toggle: state.toggle,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      toggle: !state.toggle,
    };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
