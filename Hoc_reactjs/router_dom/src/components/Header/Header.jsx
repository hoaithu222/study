import style from "./style.module.css";
import clsx from "clsx";

export default function Header() {
  return (
    <div>
      <button className={clsx(style.btn)}>Button one</button>
    </div>
  );
}
