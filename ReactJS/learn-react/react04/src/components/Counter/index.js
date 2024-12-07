import { useCallback, useState, useMemo } from "react";
import { pow } from "../../helpers/pow";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    // const resultPow = pow();
    const resultPow = useMemo(() => {
        pow()

    }, [])

    return (
        <>
            <div>Kết quả : {counter}</div>
            <button onClick={handleClick}>Counter</button>
            <div>{resultPow}</div>
        </>
    )
}