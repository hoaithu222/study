// ES6 : phiên bản Javascript được cập nhập năm 2015
// biến const là left
// ==> Block Scope

// // Global Scope
// var a;

// function message() {
//   // Function Scope
//   var b;
//   if (b) {
//     // Block Scope
//     console.log("hello");
//   }
//   for (var i = 0; i < a; i++) {
//     // block scope
//   }
// }

// var a = 10;
// if (a >= 5) {
//   let b = 20;
// }
// console.log(b);
// ==> let sẽ chặt chẽ hơn và trong 1 scope chỉ được khai báo 1 lần và chỉ cập nhâp lại thôi
// -> const dùng để gán cho function

// const user = {
//   name: "hoàng an",
//   email: "hangan@gamil.com",
// };
// user.name = "Hoàng An";
// console.log(user);

// Arrow function

// const getMessage = (a) => {
//   console.log("Học lập trinh không khó tại :", a);
// };
// getMessage("F8");

// const sum = (a, b) => a + b;
// console.log(sum(1, 2));
//  đối với obeject thì khác
// const name = "hoàng an";
// const email = "hoangan@gmail.com";
// const getUser = () => ({ name: name, email: email });
// console.log(getUser());

// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
//   {
//     id: 4,
//     name: "User 4",
//   },
// ];
// const getUser = (userId) => users.find((user) => user.id === userId);
// console.log(getUser(1));

// document.body.innerHTML = `${users
//   .map((user) => `<h3>${user.name}</h3>`)
//   .join(" ")}`;

/*
- không nên dùng để làm method của object (Bởi vì không bind được this)
- Không được dùng để tạo constructor
- Không có object prototype
- không bind được this và arguments
*/

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   console.log(this);
// });
