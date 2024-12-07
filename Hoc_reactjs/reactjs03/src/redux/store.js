import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk"
import { CounterReducer } from "./reducers/CounterReducer";
import { TodoReducer } from "./reducers/TodoReducer";
// import { loggerMiddleware } from "./middlewares/loggerMiddleware";
// import { fetchTodoMiddleware } from "./middlewares/fetchTodoMiddleware";

const rootReducer = combineReducers({
    counter: CounterReducer,
    todo: TodoReducer,
})
const middlewares = [
    // fetchTodoMiddleware,loggerMiddleware,
    thunk,
]
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
console.log(store)

