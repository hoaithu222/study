# package : gói

## Nặng khó di chuyển :

- Nặng, khó di chuyển
- Gỡ bỏ cập nhập gặp khó khăn

## giải pháp

-công cụ quản lý thư viện (package,dependencies)

- Thông qua store (chợ)
- với js: npm, yarn... dần đàn chuyển sang yarn

# khởi tạo dự án với npm

npm init -y
Simple Dependencies ==> Thư viện chạy dự án (Chạy ở production)
npm i tên thư viên hoặc npm install tên thư viên

npm i tên thư viên --save-dev hoặc npm install tenthuvien --save-dev

## cài đặt các dependencies

npm install hoặc npm i

## xóa thư viện đã cài đặt

npm uninstall tênthưvien

## phải bảo vệ package.json

# ==> fix xóa node_modules và cài lại

-- chỉ cài đặt dependencies production

npm install --product hoặc npm i --product

## phiên bản

- Cài đăt thư viện theo phiên bản
- npm i teenthuvien@tenphenban

- Cập nhập phiên bản của thư viên
  npm update tenthuvien -> đổi trong file

- Cập nhập tất cả thư viện
  npm update
  npm i sẽ lấy trong package-log
  npm update sẽ lấy phiên bản cao nhất của phiên bản đó

  ==> không nên sử dụng npm update --> nên dùng npm install

## noi cài đặt

-Local
\_Global: -g
