import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
import { Fragment } from "react";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.toggle);
  const auth = useSelector((state) => state.auth.auth);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <Fragment>
      {auth && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {!toggle && <div className={classes.value}>{counter}</div>}
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase By 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
      )}
    </Fragment>
  );
};

export default Counter;
