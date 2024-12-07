import TodoAdd from "./TodoAdd";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoPage() {
  return (
    <div>
      <h1>TodoPage</h1>
      <TodoList />
      {/* <TodoAdd /> */}
      <TodoForm />
    </div>
  );
}
