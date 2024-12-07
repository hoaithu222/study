import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("idle");
  const getTodos = async () => {
    setStatus("pending");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
    setStatus("idle");
  };
  const handleClick = () => {
    getTodos();
  };
  //getTodos(); lỗi không chạy được

  return (
    <div>
      <div>
        <button onClick={handleClick}>
          {status == "pending" ? "Loading..." : "Load data"}
        </button>
        {todos.map((todo, _) => (
          <h3 key={todo.id}>{todo.title}</h3>
        ))}
      </div>
    </div>
  );
}
