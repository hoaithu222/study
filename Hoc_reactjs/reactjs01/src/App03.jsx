import Form from "./components/Form";

export default function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

/*Thay đổi được dự liệu trong nội bộ component 
- Khi state thay đổi ==> Component sẽ bị Re-render (gọi lại)
- Không được thay đổi trực tiếp state mà phải thông qua hàm State 


Trong function component ==> Chỉ làm việc với JSX, Props 
- Nếu muốn làm việc với State, Lifecycle,...=> Sử dụng React Hook(phiên bản 16.8)
Hook là gì ?
- Hàm đặc biệt cho chép function component sử dụng các tính năng của ReactJS 
- Bắt đầu bằng từ khóa use
- Chỉ sử dụng được trong function Component
- Cho phép lập trình viên tự định nghĩa hook


- React thực hiện trên dom ảo 
- hàm setState là hàm bất đồng bộ log trong sẽ lấy gia trị cũ
- còn log ngoài là giá trị mới
- muốn uppdate đươc giao diện thì phải dung setState 
- Khi cha thay đổi thì con cũng thay đổi vd: gọi text vào trong counter thì khi counter thay đổi thì text cũng bị thay đổi


- Xử lý form.jsx


*/
