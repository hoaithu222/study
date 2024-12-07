export const initState = {
    count: 0,
    todoList: [
        { id: 1, content: "Công việc 1" },
        { id: 2, content: "Công việc 2" },
        { id: 3, content: "Công việc 3" },
        { id: 4, content: "Công việc 4" },
    ],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "counter/increment":
            return {
                ...state,
                count: state.count + action.payload,
            };
        case "counter/decrement":
            return {
                ...state,
                count: state.count - action.payload,
            };
        case "todo/add":
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        case "todo/delete":
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
};
