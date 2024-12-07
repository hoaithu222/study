"use client";

import { clearCache, clearCacheTag } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const addTodo = async (todo) => {
    const response = await fetch(`${process.env.SERVER_API_TODO}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    return response.ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      return alert("vui lòng nhập công việc");
    }
    const status = await addTodo({ title });
    if (status) {
      //   router.refresh();
      // CallApi dùng clear cache
      //   clearCache("/todos");
      clearCacheTag("todos");
      setTitle("");
      router.refresh();
    } else {
      alert("Thêm thất bại");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập công việc"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
