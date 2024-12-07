import counterReducer from "./counter";
import todosReducer from "./todo";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer, // Tên state là 'counter'
    // thêm nhiều reducer khác ở đây nếu cần
    todo: todosReducer,
});

export default allReducers;