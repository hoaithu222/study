import { createContext, useState } from "react";
import Content from "./components/content";

export const AppContext = createContext();

export default function App() {
  const [mgs, setMgs] = useState("Học react không khó");

  const handleClick = () => {
    setMgs("Học react js quá kho");
  };

  return (
    <div>
      <AppContext.Provider value={{ mgs, onClick: handleClick }}>
        <Content />
      </AppContext.Provider>
    </div>
  );
}

// A->B->C

//context bọc app thì các con sẽ sử dụng được context
/*
Khỏi tạo đối tượng context ==> Dùng hàm createContext
_ Bọc component Provider (của context) 
-Lấy dự liệu từ context: Dùng component Consumer hoặc hook useContext
*/
