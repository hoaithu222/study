"use client";
import "./Menu.css";
import clsx from "clsx";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Menu() {
  const pathname = usePathname();
  const activeMenu = (path) => {
    return pathname === path ? "active" : "";
  };
  return (
    <div>
      <ul>
        <li>
          <Link href="/" className={clsx(activeMenu("/"))}>
            Trang chủ
          </Link>
        </li>
        <li>
          <Link href="/about" className={clsx(activeMenu("/about"))}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={clsx(activeMenu("/contact"))}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/products" className={clsx(activeMenu("/products"))}>
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
}
