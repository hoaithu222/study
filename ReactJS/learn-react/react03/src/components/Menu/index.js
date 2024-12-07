import { MenuContext } from "../Layout";
import { useContext } from "react";

export default function Menu() {
  const menus = useContext(MenuContext);
  return (
    <>
      <ul>
        {menus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

