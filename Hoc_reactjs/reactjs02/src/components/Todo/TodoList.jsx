import { useContext } from "react";
import { TodoContext } from "./Todos";

export default function TodoList() {
  const { state, dispatch } = useContext(TodoContext);
  const { todoList } = state;

  const handleClick = (id) => {
    dispatch({
      type: "todo/delete",
      payload: id,
    });
  };

  return (
    <div>
      <ul>
        {todoList.length > 0 ? (
          todoList.map((item) => (
            <li key={item.id}>
              {item.content}{" "}
              <button onClick={() => handleClick(item.id)}>&times;</button>
            </li>
          ))
        ) : (
          <li>No tasks</li>
        )}
      </ul>
    </div>
  );
}
