// các cách gọi API từ JS
// 1.fetch()
// 2.XMLHttpRequest()
// 3.Thư viện: jquery ajax, axois, node fetch,...

const userApiUrl = `http://localhost:3000/users`;

// const getUsers = fetch(userApiUrl)
//   .then((response) => {
//     // response.text() và response.json() cũng là một promise có chứa response body từ server
//     // return response.text();
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);

// const addUser = async (data) => {
//   const response = await fetch(userApiUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // "Content-Type":"application/x-www-form-urlencoded"
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response);
// };
// thêm dữ liệu
// addUser({
//   name: "User 5",
//   email: "user5@gmail.com",
//   status: "active",
// });

// urlencoded: name = hoangan&email=hoangan.gmail.com&status=active

const updateUser = async (id, data) => {
  const response = await fetch(userApiUrl + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type":"application/x-www-form-urlencoded"
    },
    body: JSON.stringify(data),
  });
  console.log(response);
};
// updateUser(1, {
//   name: "User 111",
//   email: "User111@gmail.com",
//   status: "active",
// });

const deleteUser = async (id) => {
  const response = await fetch(userApiUrl + "/" + id, {
    method: "DELETE",
  });
  console.log(response);
};
deleteUser(1);

// C = Create
// R = Read
// U = Update
// D = Delete
