// alert("hoc js khong kho"); đồng  bộ
// confirm("ok chưa");       --------

// console.log("Ok chua");

// hàm setTimeout là 1 hàm bất đồng bộ
// setTimeout(() => {
//   console.log("Bắt đầu");
// }, 0);

// console.log("Học js không khó");

// ES6 --> Promise
// Callback --> Callback hell
// Promise --> vẫn tồn tại callback nhưng sẽ viết dưới dạng Chaining
// Object.method1().method2().method3()

// Các trạng thái của Promise
/*
-pending
-fulfilled
-rejected
để làm việc với promise có 2 bước
 1. Khỏi tạo obejct promise và đưa dữ liệu vào Promise
 2.Gọi promise và trả về kết quả

*/
// const getA = (callback) => {
//   setTimeout(() => {
//     const user = {
//       name: "Hoàng an",
//       email: "hoangan@gmail.com",
//     };
//     callback(user);
//   }, 3000);
// };
// getA((data) => {
//   console.log(data);
//   getB((data) => {
//     console.log(data);
//   });
// });
// const getB = (callback) => {
//   setTimeout(() => {
//     const course = {
//       name: "fullstackoffline",
//     };
//     callback(course);
//   }, 1000);
// };
// getA()
//   .then((data) => {
//     console.log(data);
//     return "A";
//   })
//   .then((data) => {
//     console.log(data);
//     return "B";
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     // thành công hay thất bại đều phải vào finally
//     console.log("Xong rồi");
//   });

// getA()
//   .then((data) => {
//     console.log(data);
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const getA = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = {
//         name: "Hoàng an",
//         email: "hoangan@gmail.com",
//       };
//       //   Nếu dữ liệu thành công thì gọi hàm resolve
//       // Nếu thất bại --> gọi hàm reject để trả về lỗi

//       resolve(user);
//       //   chỉ chạy  1 cái

//       reject("Lỗi rồi");
//     }, 3000);
//   });
// };
// const getB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const course = {
//         name: "fullstack offline",
//       };
//       resolve(course);
//     }, 1000);
//   });
// };

// getA()
//   .then((dataA) => {
//     console.log(dataA);
//     return getB();
//   })
//   .then((dataB) => {
//     console.log(dataB);
//   });

const getUser = (userId) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 1000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 2000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 3000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 4000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id }) => userId === id);
      resolve(user);
    }, 1000);
  });
};
const ids = [1, 3, 4];

let sum = 0;
let completed = 0;

ids.forEach(function (id) {
  getUser(id).then((data) => {
    sum += data.salary;
    completed += 1;
    if (completed === ids.length) {
      console.log(sum);
    }
  });
});

const getTotal = () => {
  let total = 0;
  for (var i = 0; i < ids.length; i++) {
    const id = ids[i];
    const isLast = i === ids.length - 1;
    const promise = getUser(id).then((data) => {
      const salary = data.salary;
      total += salary;
      return total;
    });
    if (isLast) {
      return promise;
    }
  }
};
getTotal().then((data) => {
  console.log(data);
});

// getUser(1).then((data) => {
//   console.log(data);
// });

// yêu cầu tính tổng thu nhập của 3 user trên lưu ý không dùng async await, Promise.all

// Promise.all() ==> Thực thi nhiều promise cùng 1 lúc và trả về 1 mảng mới chứa các  dữ liệu đã được resolve

// const promiseArr = ids.map((id) => getUser(id));
// // console.log(promiseArr);

// Promise.all(promiseArr).then((users) => {
//   const total = users.reduce((total, user) => total + user.salary, 0);
//   console.log(total);
// });

// Promise.resolve()
// Promise.reject()

// try catch

try {
  //something();
  let a;
  if (!a) {
    throw new Error("Biến a phải có dữ liệu");
  }
} catch (e) {
  //   console.log(e.message);
  document.body.innerHTML = `<h3 style = "color:red">${e.message}</h3>`;
} finally {
  console.log("đã xong");
}
