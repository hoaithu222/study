// taoj thunk function

export const fetchTodo = () => {
    return async (dispatch, getState) => {
        console.log(getState());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            if (!response.ok) {
                throw new Error("Lỗi khi lấy danh sách ")
            }
            const result = await response.json();

            dispatch({
                type: "todo/fetch",
                payload: result,
            })
        } catch (e) {
            console.log(e)
        }
    }
}

//  thunk function giống  action creator