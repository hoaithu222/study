const init = {
    todoList: [],
}
export const TodoReducer = (state = init, action) => {
    switch (action.type) {
        case "todo/fetch":
            return {
                ...state, todoList: action.payload,
            }

        default:
            return state
    }
}