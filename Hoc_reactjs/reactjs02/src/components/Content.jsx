import { useContext } from "react";
import { AppContext } from "../App02";
export default function Content() {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <div>
      <h1>{context.mgs}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        voluptatibus.
      </p>
      <button
        onClick={() => {
          context.onClick();
        }}
      >
        Click me
      </button>
    </div>
  );
}
