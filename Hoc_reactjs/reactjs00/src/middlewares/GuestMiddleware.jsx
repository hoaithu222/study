import { Outlet, Navigate } from "react-router-dom";
const isLogin = true;

export default function GuestMiddleware() {
  return !isLogin ? <Outlet /> : <Navigate to="/" />;
}
