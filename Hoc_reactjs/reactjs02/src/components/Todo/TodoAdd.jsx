import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoContext } from "./Todos";

export default function TodoAdd() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch({
        type: "todo/add",
        payload: {
          id: uuid(),
          content: todo,
        },
      });
      setTodo("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task..."
          name="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
