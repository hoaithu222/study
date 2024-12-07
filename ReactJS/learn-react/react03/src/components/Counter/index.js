import { useCallback, useState } from "react"
import Box from "../Box/index"
export default function Counter() {
    const [counter, setCounter] = useState(0);
    // const onCounter = () => {
    //     setCounter(counter + 1)
    // }
    const handleCallback = useCallback(() => {
        setCounter(prevCounter => prevCounter + 1);
    }, []);
    const handleReset = useCallback(() => {
        setCounter(0);
    }, [])
    return (
        <>
            <div>Kết quả : {counter}</div>
            <Box onCounter={handleCallback} onReset={handleReset} />
        </>
    )
}