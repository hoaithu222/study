import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "../../actions/counter";

export default function Counter() {
    const count = useSelector(state => state.counter); // Sử dụng state.counter
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(up(2))}>UP</button>
            <button onClick={() => dispatch(down(3))}>DOWN</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </>
    );
} 