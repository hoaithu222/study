# Vấn đề khi sử dụng state

- Trong 1 component có quá nhiều State ==> Logic xử lý phức tạp
- Tái sử dụng lại logic cập nhật state
- hmaf reducer return và state luon

## Triển khai hệ thống quản lý global State

- State chỉ ở 1 component
- muốn chia sẻ phải đẩy lên component cha
- Muốn có 1 state dùng cho toàn bộ project --> Thông tin đăng nhập

* Dùng thư viện Zustand, Redux,....
* Dùng context + useReducer
