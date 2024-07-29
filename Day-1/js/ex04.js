// spread
// const arr1 = ["item1", "item2", "item3"];
// const arr2 = ["item4", ...arr1, "item5", "item6"];

// console.log(arr2);

// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// // yêu cầu thêm todo 4 vào mảng todos và lưu vào biến mới

// const newTodos = [...todos, "Todo 4"];
// console.log(newTodos);
// console.log(todos);

// const from = {
//   name: "Hoàng An",
//   email: "hoangan@gmail.com",
// };
// // Cập nhập lại email và lưu object vào biến mới
// const newForm = { ...from, email: "contact@fullstack.edu.vn" };
// console.log(newForm);

// const somethings = (args1, args2, args3) => {
//   console.log(args1);
//   console.log(args2);
//   console.log(args3);
// };
// const data = ["Data 1", "Data 2", "Data 3"];
// // somethings(...data);
// somethings.apply(null, data);

// Enhanced Object Literal

// const name = "Hoàng An";
// const email = "hoangan@gmail.com";
// let address;

// const user = {
//   name,
//   email,
//   address,
//   getName: function () {
//     return this.name;
//   },
//   getEmail() {
//     return this.email;
//   },
// };
// console.log(user);

// // Trường hợp 1 : chỉ muốn truyển name
// somethings("hoàng an");
// // trường hợp 2 : chỉ muốn truyển email

// somethings(undefined, "hoangan.web@gmail.com");
// // Trường hợp 3 chỉ muốn truyển address
// somethings(undefined, undefined, "hà nội");

// Xây dựng hàm hỗ trợ named arguments(áp dụng destructuring và Enhanced)

// const somethings = ({ name, email, address }) => {
//   console.log(`Name: ${name}`);
//   console.log(`Email: ${email}`);
//   console.log(`Address:${address}`);
// };
// // somethings({ email: "Hoàng an" });

// const address = "hà nội";
// somethings({ address });

class User {
  // từ es13 có thể khai báo bên ngoài

  name;
  email;
  // # là private là bên ngoài không truy cập được --> không muốn bên ngoiaf truy cập vào được
  #age = 32;
  #data = ["Item1", "Item2", "Item3"];

  static message = "f8";
  constructor(name, email) {
    console.log("User Constructor");
    this.name = name;
    this.email = email;
  }
  //   định nghĩa phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getAge() {
    return this.#age;
  }
  #getInfo() {
    return [this.getName(), this.getEmail(), this.getAge()];
  }
  get latest() {
    return this.#data[this.#data.length - 1];
  }
}
const user = new User("Hoàng An", "hoangan@gmail.com");
console.log(user);

// console.log(user.getInfo());
// console.log(User.message);
console.log(user.latest);
// element.innerHTML ==> lấy nội dung

// Element.innerHTML= "nội dung" ==> Cập nhập nội dung mới
