export const loggerMiddleware = (store) => {
    return (next) => {
        return (action) => {
            console.log("ok chua");
            console.log(store.getState())
            return next(action);// cho phép đi tiếp
        }
    }
}