import React, { useEffect, useLayoutEffect, useState } from "react";
import Form from "./Components/Form";
import Content from "./Components/Content";

export default function App() {
  const [status, setStatus] = useState(false);
  useLayoutEffect(() => {
    setStatus(true);
  }, []);
  return <div>{status ? <Form /> : <Content />}</div>;
}
/*
useEffect 
1.State thay đổi 
2.Component rerender 
3. Update UI
4. Clearup
5. Callback Effect 


useLayoutEffect 
1.State thay đổi 
2.Component Rerender 
3.Clearnup 
4.Callback Effect
5. Update ui cuối cùng trì hoãn update ui cuối cùng hook này ko dùng để xủ lý các tác vụ bất đồng bộ
*/
