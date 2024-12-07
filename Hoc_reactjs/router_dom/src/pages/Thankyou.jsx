import React from "react";
import { useLocation } from "react-router-dom";

export default function Thankyou() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Đặt hàng thành công</h1>

      <p>Cảm ơn bạn đã đặt hàng</p>
    </div>
  );
}
