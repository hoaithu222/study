import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "../../actions/counter";

export default function Counter2() {
    const count2 = useSelector(state => state.counter); // Sử dụng state.counter
    const dispatch = useDispatch();
    return (
        <>
            <h2>Counter2 : {count2}</h2>
            <button onClick={() => dispatch(up(5))}>UP</button>
            <button onClick={() => dispatch(down(3))}>DOWN</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </>
    )
} 