"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const pathName = usePathname();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    const query = new URLSearchParams(formData).toString();
    router.push(`${pathName}?q=${query}`);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}> 
        <select name="status">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">InActive</option>
        </select>
        <input type="search" name="q" placeholder="Vui lòng nhập từ khóa" />
        <button>Search</button>
      </form>
    </div>
  );
}
