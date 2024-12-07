import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import Button from "./Button";

export default function Counter() {
  //   const [count, setCount] = useState(0);
  //   const myRef = useRef(0);
  //   const a = {
  //     value: 0,
  //   };
  //   const handleClick = () => {
  //     setCount(count + 1);
  //     a.value++;
  //     myRef.current++;
  //     console.log(myRef.current);
  //     // ref thay đổi thì không bị rerender lại --> xem được kết quả luôn không giống state
  //   };
  //   console.log(myRef.current);
  const inputRef = useRef();
  const ButtonRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.placeholder = "Email";
    console.log(ButtonRef);
    ButtonRef.current.style.color = "red";
  }, []);
  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <h2>Count : {a.value}</h2>
      <h3>My Ref : {myRef.current}</h3>
      <button onClick={handleClick}>Click Me</button> */}
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <Button ref={ButtonRef} />
    </div>
  );
}
