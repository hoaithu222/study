import "./style.css";
import { NavLink, Outlet } from "react-router-dom";

export default function LayoutDefault() {
    return (
        <div className="layout-default">
            <header>
                <div className="logo">Logo</div>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="Blog">Blog</NavLink>
                            <ul className="menu_sub">
                                <li>
                                    <NavLink to="/blog/news">Blog News</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog/related">Blog Related</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="Contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/info-user">Info User</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                Copyright © 2024 by Thu
            </footer>
        </div>
    );
}
