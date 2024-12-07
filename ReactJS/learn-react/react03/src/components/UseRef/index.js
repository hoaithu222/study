import { useRef } from "react";
import { useState } from "react"

export default function UseRef() {
    const [count, setCounter] = useState(0);
    const counter = useRef(0);
    const handleClick = () => {
        setCounter(count + 1);
        counter.current = counter.current + 1;

    }
    console.log(count);
    console.log(counter);
    console.log("........")

    return (
        <div>
            <p>{count}</p>
            <button className="btn" onClick={handleClick}>Click</button>
        </div>
    )
}