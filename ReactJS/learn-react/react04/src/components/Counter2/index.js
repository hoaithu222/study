import { useState } from "react"
export default function CounterState() {
    const [count, setCount] = useState(0);
    const handleUp = () => {
        setCount(count + 1);
    }
    const handleDown = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <>
            <div>Kết quả :{count}</div>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}