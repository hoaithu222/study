import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const isLogin = true;
export default function AuthMiddleware() {
  return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
}
