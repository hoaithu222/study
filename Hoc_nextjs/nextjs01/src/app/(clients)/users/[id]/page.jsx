import { notFound } from "next/navigation";
import React from "react";

export default async function UserPageId({ params }) {
  let user = {};
  const { id } = params;
  try {
    const response = await fetch(process.env.SERVER_API + "/users/" + id);
    if (!response.ok) {
      throw new Error("Lỗi khi lấy dữ liệu");
    }
    user = await response.json();
  } catch (e) {
    return notFound();
  }

  return (
    <div>
      <h1>User Page ID : {id}</h1>
      <h2>{user.name}</h2>
      <h3>
        {user.email}-{user.phone}
      </h3>
    </div>
  );
}
