// import { useState } from "react";
// import Counter2 from "./components/Counter2";

import UploadImage from "./components/UploadImage";

export default function App() {
  // const [isShow, setIsShow] = useState("true");
  // const handleClick = () => {
  //   setIsShow(!isShow);
  // };
  return (
    <div>
      {/* {isShow ? <Counter2 /> : ""}
      <button onClick={handleClick}>Toggle</button> */}
      <UploadImage />
    </div>
  );
}
