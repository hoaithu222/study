//  Async Function
// Resolve Promise không cần dùng then (Ko có callback)

// Sử dụng cách viết như đồng bọ (tuần tự)

// lưu ý : Hàm async luôn trả về 1 promise
// const something = async () => {
//   return "F8";
// };
// console.log(something());

const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        name: "Hoàng an",
        email: "hoangan@gmail.com",
      };
      //   Nếu dữ liệu thành công thì gọi hàm resolve
      // Nếu thất bại --> gọi hàm reject để trả về lỗi

      resolve(user);
      //   chỉ chạy  1 cái

      //   reject("Lỗi rồi");
    }, 3000);
  });
};

// const handleGetA = async () => {
//   const user = await getA();
//   console.log(user);
// };
// handleGetA();

(async () => {
  const user = await getA();
  console.log(user);
})();
// buổi sau
// tìm hiểu thư viện json-server
// tìm hiểu hàm fetch()
// Ôn lại HTTP Request, HTTP Response
