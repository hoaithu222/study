import { useEffect, useState } from "react";

export default function App() {
  const [title, setTitle] = useState("F8");
  const handleChangeValue = (e) => {
    setTitle(e.target.value);
  };
  const [count, setCount] = useState(1);
  useEffect(() => {
    document.title = title;
    console.log("Side Effect");
    // side Effect để xử lý công việc phụ không update giao diện
  }, [title]);
  console.log("Component Re-render");
  return (
    <div>
      <input type="text" onChange={handleChangeValue} />
      {console.log("UI Update")}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

/*
Hook useEffect(callback,dependencies?)
- null hoặc undefined ==> Component re-render callback trong useEffect sẽ được gọi
- [] ==> callback trong useEffect chỉ gọi khi component được render lền đầu tiên
-[bien1,bien2,...] ==> callback trong useEffect chỉ gọi khi 1 trong các biến thay đổi 
- bài tập về nhà tải trang sẽ lấy được danh sách todolist
- buổi sau mouse và undmouse
- 
*/
