import React from "react";
// import { NavLink } from "react-router-dom";
import "./menu.css";
import NavLink from "./NavLink";

// const activeMenu = ({ isActive }) =>
//   isActive ? "current nav-link" : "nav-link";

export default function Menu() {
  return (
    <ul className="nav nav-pills flex-column">
      {/* <li className="nav-item">
        <NavLink to="/" className={activeMenu}>
          Trang chủ
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className={activeMenu}>
          Giới thiệu
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/san-pham" className={activeMenu}>
          Sản phẩm
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/lien-he" className={activeMenu}>
          Liên hệ
        </NavLink>
      </li> */}
      <NavLink href="/">Trang chủ</NavLink>
      <NavLink href="/about">Giới thiệu</NavLink>
    </ul>
  );
}
