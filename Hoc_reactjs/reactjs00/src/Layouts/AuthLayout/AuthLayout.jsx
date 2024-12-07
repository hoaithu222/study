import React from "react";
import "./style.css";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <h1>Login</h1>
      <Outlet />
    </div>
  );
}
