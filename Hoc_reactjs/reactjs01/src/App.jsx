import React, { useLayoutEffect, useState } from "react";

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useLayoutEffect(() => {
    const status = localStorage.getItem("user_token");
    if (status) {
      setAuthenticated(true);
    }
  }, []);

  return <div>{isAuthenticated ? <h1>Profile</h1> : <h1>Login</h1>}</div>;
}
// useLayoutEffect

/*
1.State thay đổi
2.Component re-render
3. Cleanup useLayoutEffect
4. callback useLayoutEffect
5. Update UI (Khi callback chạy xong) 

--> chờ callback thự hiện xong mới render ra giao diện
--> Không sử dụng trong trường hợp callapi 
--> Chỉ sử dụng trong trường hợp đơn giản 
--> ít khi sử dụng


*/
