import Header from "../header";
import { createContext } from "react";
export const MenuContext = createContext();

export default function Layout() {
  const menu = ["Trang chu", "tin tuc", "Gioi Thieu", "Lien He"];
  return (
    <>
      <MenuContext.Provider value={menu}>
        <Header menus={menu} />
      </MenuContext.Provider>
      <div>MAIN</div>
      <div>FOOTER</div>
    </>
  );
}
