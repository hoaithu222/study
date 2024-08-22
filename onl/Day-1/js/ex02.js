// let infoUser = {
//   name: "Đặng Phương Nam",
//   email: "nam@gmail.com",
//   age: 18,
// };

// let infoUserJSON = `{
//   "name": "Đặng Phương Nam",
//   "email": "nam@gmail.com",
//  "age": 18
// }`;
// let infoUserJSONToJS = JSON.parse(infoUserJSON);
// let infoUserString = JSON.stringify(infoUserJSONToJS);
// console.log(infoUserString);
// console.log(infoUserJSONToJS);

// let number = `5`;
// console.log(number);
// console.log(JSON.parse(number));
// let word = `"Hello"`;
// console.log(word);
// console.log(JSON.parse(word));
const innerUser = document.querySelector(".inner-user");
const arr = `[
    {"id":1,
        "name":"Le van a",
        "age":1
    },
    {"id":2,
        "name":"Le van b",
       "age":2
    },
    {"id":3,
        "name":"Le van c",
        "age":3
    }
]`;
const newArr = JSON.parse(arr);
let tableContent = `<table border="1">
<thead>
<tr>
<th>ID</th>
<th>NAME</th>
<th>AGE</th>
</tr>
</thead>
<tbody>`;

newArr.forEach(function (item) {
  tableContent += `<tr>
  <td>${item.id}</td>
  <td>${item.name}</td>
  <td>${item.age}</td>
  </tr>`;
});
tableContent += `</tbody></table>`;
innerUser.innerHTML = tableContent;
