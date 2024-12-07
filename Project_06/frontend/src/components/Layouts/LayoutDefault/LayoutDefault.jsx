import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

export default function LayoutDefault() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="inner-wrap">
            <div className="logo">Nhóm 6 L02</div>
            <ul className="menu">
              <li>
                <NavLink className="item" to="/TableUser">
                  Bảng khách hàng
                </NavLink>
              </li>
              <li>
                <NavLink className="item" to="/actions">
                  Các thao tác
                </NavLink>
              </li>
              <li>
                <NavLink className="item" to="/queries">
                  Truy vấn
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container">
          <h3>Cuối trang</h3>
        </div>
      </footer>
    </>
  );
}
