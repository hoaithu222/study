import React, { useReducer } from "react";
import TodoAdd from "./TodoAdd";

import { createContext } from "react";
import { initState, reducer } from "../../utils/reducer";
import TodoList from "./TodoList";
export const TodoContext = createContext();

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(Todos);

  return (
    <div>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoAdd />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}
