import { useReducer } from "react";
import { initState, reducer } from "../utils/reducer";

export default function Count() {
  const [state, dispatch] = useReducer(reducer, initState);
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 3,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 2,
    });
  };
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
