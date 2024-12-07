import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import Login01 from "./pages/Login01";
import Errors from "./pages/Errors";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Auth from "./pages/Auth/Auth";
import AuthIndex from "./pages/Auth";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/Auth/orders/Orders";
import OrdersCompleted from "./pages/Auth/orders/OrdersCompleted";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import ScrollTop from "./components/ScrollTop";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/san-pham">
              <Route index element={<Product />} />
              <Route path=":slug" element={<ProductDetail />} />
            </Route>
            <Route path="/dat-hang" element={<Checkout />} />
            <Route path="/cam-on" element={<Thankyou />} />
            <Route path="dang-nhap" element={<Login01 />} />
            <Route path="*" element={<Errors />} />
            <Route path="/auth">
              {/* index ưu tiên hiển thị trước */}
              <Route index element={<AuthIndex />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/orders" element={<AuthMiddleware />}>
              <Route index element={<Orders />} />
              <Route path="completed" element={<OrdersCompleted />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
