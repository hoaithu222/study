- Authentication:xác minh danh tính

-Authorization: Xác minh quyền

2 cách xác thực (Authentication)
-Cokie-based Authentication : mẩu tin để truyền qua truyền lại giữa frontend và backend lưu trữ ở trình duyệt -> không an toàn chi lưu trữ id ở trên cookie ==> session --> lưu trữ ở phía server trả về session_id cho trình duyệt thông qua cookie
-Token-based Authentication

-Lưu trữ user vào token (JWT = Json Web Token) JWT là 1 tiêu chuẩn

-yêu cầu đăng xuất
--> Call API tới Server Lưu accessToken vào Blacklist của server ==> Xóa localStorage
