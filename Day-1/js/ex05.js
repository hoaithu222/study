// Javascript Module --> tách ra thành các file nhỏ
//commenJs --> Nodejs

// -ES6 Module chạy cả
// amd module
// const {a,b} = require("../modules/module1"); //chỉ chạy trên server lỗi trên trình duyêt
// console.log(a);
// console.log(b);
import c, { a as a1, b, getMessage, product } from "../modules/module2.js";
console.log(a1, b);
getMessage();
// không import được cả file chỉ import được phần đã export
// import c from "../modules/module2.js";
console.log(c);
// default băt buộc phải viết trước
console.log(product);

/*
app.js ==> modules ==> 10 file


app.js ---> Import 10 lân


Giải pháp:
trong folder modules --> tạo file index.js import 10 file để app.js sử dụng


*/
