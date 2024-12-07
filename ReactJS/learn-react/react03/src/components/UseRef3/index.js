
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"

export default function UseRef3() {
    const [inputValue, setInputValue] = useState("");
    // const [counter, setCounter] = useState(0)
    const couterRef = useRef(0);
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const handleChange = (e) => {
        setInputValue(e.target.value);
        // setCounter(counter + 1);
        // thay counter bằng useRef để không bị render lại
        couterRef.current = couterRef.current + 1;
    }
    console.log(couterRef.current)

    return (
        <input value={inputValue} onChange={handleChange} ref={inputRef} />

    )
}