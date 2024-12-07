/* storage bộ nhớ trình duyệt 

1.localStorage : lưu trữ không giới hạn thời gian, dung lượng lớn,khoảng 10mb,server không thể đọc ghi
- phân biệt theo origin:scheme + hostname + port 

2.sessionStorage : lưu trữ theo phiên, tắt trình duyệt đi sẽ bị xóa 
3.cookie : lưu trữ theo phiên học thời gian chỉ định 
-dung lượng nhỏ có thể đọc ghi 
- chỉ lưu trữ text 
- server có thể đọc ghi (làm việc với http request, http response )
- phân biệt theo tên gạch 
- Cookie có thể share tới tất cả các tên miền con (subdomain)

trong cùng 1 tên mien: set cookie /a và /b


*/

if (typeof Storage !== "undefined") {
  // hỗ trợ localStorage
  //   localStorage.setItem("email", "thu@gmail.com");
  //   const email = localStorage.getItem("email");
  //   console.log(email);
  //   localStorage.clear(); //xóa tất cả
  // làm việc giống 1 object
  //   localStorage.email = "thu@gmail.com";
  //   console.log(localStorage.email);
  // lưu ý sủ dụng cách nào thì lấy ra và in vào bằng cách đấy
}

// cookie
//- tạo cookie ở phía client
// document.cookie = "email =Thu@gmail.com;max-age = 600;path = /";
// document.cookie = "name =t;max-age = 600;path = /";

console.log(document.cookie); // giá trị trả vè name=Thu; email=Thu@gmail.com muốn lấy giá trị thì cắt chuỗi

// xóa cookie set thời gian về quá khứ
document.cookie = `email=; expires= ${new Date().toString()};path = /`;
// cập nhật set thời gian
