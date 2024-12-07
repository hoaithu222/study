import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const activeMenu = ({ isActive }) => {
    return isActive ? "nav-link current" : "nav-link";
  };
  return (
    <div>
      <h2>Menu</h2>
      <ul className="nav flex-column">
        <li>
          <NavLink to="/" className={activeMenu}>
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/gioi-thieu" className={activeMenu}>
            Giới thiệu
          </NavLink>
        </li>
        <li>
          <NavLink to="/san-pham" className={activeMenu}>
            Sản phẩm
          </NavLink>
        </li>
        <li>
          <NavLink to="/dat-hang" className={activeMenu}>
            Đặt hàng
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
