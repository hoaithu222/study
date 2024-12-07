import React from "react";
import Button from "./Button";

export default async function UserPage() {
  let users = [];
  try {
    const response = await fetch(process.env.SERVER_API + "/users");
    if (!response.ok) {
      throw new Error("Lỗi server");
    }
    users = await response.json();
  } catch (e) {
    return <h2>Lỗi khi lấy dữ liệu</h2>;
  }
  return (
    <div>
      <h1>User Page</h1>

      {users?.map((user) => (
        <div key={user.id}>
          <h2>
            {user.id}-{user.name}
          </h2>
          <h4>{user.email}</h4>
          <Button id={user.id} />
        </div>
      ))}
    </div>
  );
}

// trong server component hỗ trợ async component
