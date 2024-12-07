export const fetchTodoMiddleware = (store) => (next) => (action) => {
    next(action);
    // if (action.type === "todo/getTodo") {
    //     fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json()).then(todos => {
    //         store.dispatch({
    //             type: "todo/fetch",
    //             payload: todos,
    //         })

    //     })
    // }

}