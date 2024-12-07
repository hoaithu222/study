"use client";

import { useRouter } from "next/navigation";

export default function Button({ id }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`users/${id}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Xem Thêm </button>
    </div>
  );
}
