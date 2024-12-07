const getTodo = async () => {
  try {
    const response = await fetch(process.env.SERVER_API_TODO, {
      cache: "no-cache",
      next: {
        tags: ["todos"],
      },
    });
    if (!response.ok) {
      throw new Error("Lỗi khi lấy dữ liệu");
    }
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export default async function TodoList() {
  const todos = await getTodo();
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
