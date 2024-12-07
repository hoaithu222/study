import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Authentication</h1>
      <button onClick={() => navigate("login")}>Login</button>
      <button onClick={() => navigate("register")}>Register</button>
      <Outlet />
      {/*Outlet Phần con hiển thị bên trong  */}
    </div>
  );
}
