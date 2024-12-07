import { useEffect } from "react";
export default function UseEffect1() {
  useEffect(() => {
    let listLi = document.querySelectorAll("ul li");
    console.log(listLi);
  });
  return (
    <>
      <ul>
        <li>Mục 1</li>
        <li>Mục 2</li>
        <li>Mục 3</li>
        <li>Mục 4</li>
      </ul>
    </>
  );
}
