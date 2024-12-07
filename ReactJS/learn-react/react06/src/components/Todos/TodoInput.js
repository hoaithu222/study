import { useDispatch } from "react-redux";
import { createTodo } from "../../actions/todo";
import { useRef } from "react";


export default function TodoInput() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.content.value;
        if (value !== "") {
            console.log(value);
            dispatch(createTodo(value));
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    }

    return (
        <div className="todo_input">
            <form onSubmit={handleSubmit}>
                <input type="text" name="content" placeholder="Vui lòng nhập công việc" ref={inputRef} />
                <button>+</button>
            </form>
        </div>
    )
}
