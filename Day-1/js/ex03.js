// Destructuring (Mảng và Object) phá cấu trúc array, object để truy cập vào các key và lưu trữ vao các  biến riêng biệt

// const user = {
//   username: "hoang an",
//   email: "hoangan@gamil.com",
//   password: "123456",
//   age: 32, // giá trị mạc định
// };
// ---> cách bình thường

// const username = user.username;
// const email = user.email;

//--> cách khác

// const { username, email: userEmail, age = 30 } = user;

// console.log(username, userEmail, age);
// const { username, email, ...rest } = user;
// console.log(rest);
// rest tham số còn lại

// const users = [
//   "hoàng an",
//   "hoangan@gmail.com",
//   32,
//   "Hà Nội",
//   { displayName: "Hoàng An F8" },
// ];
// const [username, email, , address] = users;
// console.log(username, email);
// console.log(address);
// const [username, email, ...rest] = users;
// console.log(username, email, rest);
// const [, , , , { displayName }] = users;
// console.log(displayName);

// const output = {
//   displayName: "Hoàng An F8",
//   emails: [
//     {
//       email: "hoangan.web@gmail.com",
//     },
//   ],
// };
// const {
//   displayName,
//   emails: [{ email }],
// } = output;
// console.log(displayName);
// console.log(email);

const users = [
  {
    id: 1,
    name: "Hoàng An 1",
  },
  {
    id: 2,
    name: "Hoàng An 2",
  },
  {
    id: 3,
    name: "Hoàng An 3",
  },
  {
    id: 4,
    name: "Hoàng An 4",
  },
];

users.forEach(({ name }) => {
  console.log(name);
});
