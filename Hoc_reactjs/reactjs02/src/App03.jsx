// import Count from "./components/Count";

// import { useContext } from "react";
// import { ProviderContext } from "./store/Provider";
import { decrement, increment } from "./store/counterAction";
import { useDispatch, useSelector } from "./store/hook";

// import Todos from "./components/Todo/Todos";

export default function App() {
  // const { state, dispatch } = useContext(ProviderContext);
  const dispatch = useDispatch();
  const count = useSelector((stata) => stata.count);
  const handleClick = () => {
    dispatch(increment(5));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  return (
    <div>
      {/* <Count /> */}
      {/* <Todos /> */}
      <h1>Hello anh em</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

// Vấn đề
