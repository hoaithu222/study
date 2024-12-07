export default async function DemoServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    throw new Error("Lỗi");
  }
  const todos = await response.json();

  return (
    <div>
      <h2>Demo server</h2>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </div>
  );
}
