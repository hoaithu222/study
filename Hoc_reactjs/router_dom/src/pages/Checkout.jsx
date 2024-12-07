import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function Checkout() {
  const isLogin = true; // Biến kiểm tra người dùng đã đăng nhập hay chưa
  const navigate = useNavigate(); // Hook useNavigate trả về hàm navigate để điều hướng trang

  return (
    <div>
      {isLogin ? ( // Nếu người dùng đã đăng nhập, hiển thị trang Checkout
        <>
          <h1>Checkout</h1>
          <button onClick={() => navigate("/cam-on", { state: { id: "091" } })}>
            {/* navigate("/cam-on") chuyển hướng đến trang /cam-on và truyền state với id */}
            Checkout
          </button>
        </>
      ) : (
        <Navigate to="/dang-nhap" /> // Nếu chưa đăng nhập, điều hướng đến trang đăng nhập
      )}
    </div>
  );
}

// useNavigate: Hook để lấy hàm navigate, cho phép điều hướng trang một cách lập trình
// navigate: Hàm điều hướng được trả về từ useNavigate, sử dụng để chuyển đến một đường dẫn cụ thể
// Navigate: Component được dùng để điều hướng một cách khai báo, chuyển hướng ngay khi render
