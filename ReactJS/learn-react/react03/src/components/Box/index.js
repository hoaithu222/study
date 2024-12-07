import { memo } from "react"
const Box = (props) => {
    console.log("render box");
    const { onCounter, onReset } = props;
    const handleClick = () => {
        console.log("hello");
        onCounter();
    }
    const handleReset = () => {
        onReset()

    }
    return (
        <div>
            <button onClick={handleClick}>Counter</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default memo(Box);