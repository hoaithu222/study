import style from "./style.module.css";
import clsx from "clsx";

export default function Footer() {
  return (
    <div>
      <button className={clsx(style.btn)}>Button two</button>
    </div>
  );
}
