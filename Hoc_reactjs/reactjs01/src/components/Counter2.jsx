import { useEffect, useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // console.log("Mounted");
    // return () => {
    //   console.log("Unmount");
    // };
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`Count:${count}`);
    return () => {
      console.log(`Cleanup : ${count}`);
    };
  }, [count]);
  return (
    <div>
      <div>Counter : {count}</div>
      <button onClick={handleClick}>Click me</button>
      <hr />
    </div>
  );
}

/*
- Mounted ==> Khi component được đưa vào dom
- Unmount ===> Khi component được loại bỏ khỏi dom
quá trình đưa vào và đưa ra
- cleanup :giá trị của lần chạy trước dọn dẹp --> có thể lấy được các dữ liệu của lần thứ nhất --> tránh rò rỉ bộ nhớ
- 
Thứ tự hoạt động của Hook useEffect 
1.State thay đổi
2.Component Re-render
3.Update UI
4.Cleanup --> nếu có -> render lần thứu 2 trở đi
5.Callback
7.callback useEffect
Một số trường hợp cần giải phóng cleanup
- timer setInterval, setTimeout
- Storage : localStorage,sessionStorage, cookie , work....
- Nếu sử dụng design pattern observer ===> Cần unsubscribe
- Sử dụng với event: removeEventListener
- HTTP Request --> app load file video lên abort() hủy request
- Router --> chỉ gọi state khi componet đã được mount(đã được đưa vào dom) và chưa bị Unmount(chư bị loại bỏ)
- Effect((return:()=>{
     cleanup:
  }),[thamso1]) --> khi tham so 1 tahy đôi mới gọi lại hàm và return trong effect để xóa dữ liệu lần trước  vd Xem trước ảnh

*/
