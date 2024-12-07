# Luồng của next

Request==> Middleware ==> Root Layout(Khong xoa duoc) ==> Layout ==> Page ==> Render HTML==> Response
Component mặc định của NextJs là Server Component (SSR)

## lưu ý khi làm việc vói middlewares

- Tiếp nhận request --> Xử lý ==> response ==> Trả về client (vd json)

- Tiếp nhận request ==> xử lý --> next response --> router --> layout --> page --> trả về client

## các thư viện hỗ trợ data fetching ở client

- swr : không hỗ trợ server component
- tandstack : hỗ trợ cả
- redux toolkit query : hỗ trợ cả server component và client
