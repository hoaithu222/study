import { useState } from "react";
export default function Lamp() {
  //   let status = false;
  const [status, setState] = useState(false);
  function handleClick() {
    setState(!status);
    console.log(status);
  }
  return (
    <>
      <button onClick={handleClick}>{status ? "Tắt đi" : "Bật lên"}</button>
      {status ? "Đèn đang bật" : "Đèn đang tắt"}
    </>
  );
}
