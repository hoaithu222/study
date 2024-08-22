// hàm bình thường

/*
function ham1() {
  console.log("hàm 1");
}
function ham2() {
  console.log("hàm 2");
}
ham1();
ham2();
*/
// hàm callback

// function ham1(callback) {
//   console.log("hàm 1");
//   callback();
// }
// function ham2() {
//   console.log("hàm 2");
// }
// ham1(ham2);

// ví dụ 3
// function tong(a, b, callback) {
//   let ketQua = a + b;
//   console.log(ketQua);
//   callback();
// }
// function kiemTrasoDuong(a) {
//   if (a > 0) {
//     console.log("soduong");
//   } else {
//     console.log("soam");
//   }
// }
// function kiemtraChanLe(a) {
//   if (a % 2 === 0) {
//     console.log("chẵn");
//   } else {
//     console.log("lẻ");
//   }
// }
// tong(10, 20, kiemTrasoDuong);
// tong(10, 20, kiemtraChanLe);

// var a = 10;
// var promise = new Promise((resolve, reject) => {
//   if (a !== undefined && a !== null && a !== "") {
//     resolve(a); //thành công
//   } else {
//     reject(a);
//   }
// });
// promise
//   .then((success) => {
//     console.log(success);
//     var a = 10;
//     return success + a;
//   })
//   .then((success2) => {
//     console.log(success2);
//     var b = 20;
//     return success2 + b;
//   })
//   .then((success3) => {
//     console.log(success3);
//   })
//   .catch((error) => {
//     console.log("Lỗi :", error);
//   })
//   .finally(() => {
//     console.log("luôn chạy vào đây");
//   });
// ví dụ 2
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//     // reject();
//   }, 3000);
// });
// setTimeout(() => {
//   console.log("Sau 1 giây", promise);
// }, 1000);
// setTimeout(() => {
//   console.log("Sau 2 giây", promise);
// }, 2000);
// setTimeout(() => {
//   console.log("Sau 3 giây", promise);
// }, 3000);

let a = 10;
let b = 20;
let c = 30;
let d = 40;

let sum1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(a + b);
  }, 1000);
});
let sum2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(b + c);
  }, 2000);
});
let sum3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(c + d);
  }, 3000);
});

Promise.all([sum1, sum2, sum3])
  .then(([success1, success2, success3]) => {
    let sum = success1 + success2 + success3;
    console.log(sum);
  })
  .catch((error) => {})
  .finally(() => {
    console.log("luôn chạy vào đây");
  });
