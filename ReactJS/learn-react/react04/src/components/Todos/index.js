import { useReducer, useEffect, useRef } from "react";

const init = [
    {
        id: 1,
        content: "thứ 2 học"
    },
    {
        id: 2,
        content: "thứ 3 học"
    }
]
const reducer = (state, action) => {
    // Action CREATE VA DELETE

    console.log(state, action);
    switch (action.type) {
        case "CREATE":
            return [
                ...state,
                {
                    id: state.length + 1,
                    content: action.value,
                }
            ]
        case "DELETE":
            const newState = state.filter(todo => todo.id !== action.id);
            console.log(newState);

            return newState;
        default:
            return state
    }
}

export default function Todos() {
    const [todos, dispatch] = useReducer(reducer, init);
    console.log(todos);
    const inputRef = useRef("");
    useEffect(() => {
        inputRef.current.focus();
    })
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE",
            id: id,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.inputTodo.value);
        const value = e.target.elements.inputTodo.value;

        if (value) {
            dispatch({
                type: "CREATE",
                value: value
            })
        }
        inputRef.current.value = "";
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input ref={inputRef} name="inputTodo" />
                <button>Thêm todo</button>
            </form>
            {
                todos.length > 0 && (
                    <ul>
                        {todos.map((item, _) => (
                            <li key={item.id}>{item.content}
                                <button onClick={() => {
                                    handleDelete(item.id);
                                }}>Xóa</button></li>

                        ))}
                    </ul>
                )
            }
        </>
    )
}