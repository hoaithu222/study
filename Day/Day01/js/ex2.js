const userApiUrl = `http://localhost:3000/users`;

const getUsers = fetch(userApiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const tbody = document.querySelector(".table tbody");
    const user = data
      .map((item, index) => {
        let statusClass;
        if (item.status === "active") {
          item.status = "Kích hoạt";
          statusClass = "bg-success";
        } else {
          item.status = "Chưa kích hoạt";
          statusClass = "bg-warning";
        }
        return `
      <tr>
                    <td>${index + 1}</td>
                    <td>${item.name
                      .replaceAll("<", "&lt;")
                      .replaceAll(">", "&gt;")}</td>
                    <td>${item.email
                      .replaceAll("<", "&lt;")
                      .replaceAll(">", "&gt;")}</td>
                    <td><span class="badge ${statusClass}">${
          item.status
        }</span></td>
                    <td><button class="btn btn-warning">Sửa</button></td>
                    <td><button class="btn btn-danger">Xóa</button></td>
                </tr>

        `;
      })
      .join("");
    tbody.innerHTML = user;
  });

// const getUsers = async () => {
//   const response = await fetch(userApiUrl);
//   const users = await response.json();
//   renderTable(users);
// };

// const renderTable = (users) => {
//   const tbody = document.querySelector(".table tbody");
//   tbody.innerHTML = users
//     .map(({ id, name, email, status }, index) => {
//       const statusClass = status === "active" ? "bg-success" : "bg-secondary";
//       const statusText = status === "active" ? "Kích hoạt" : "Chưa kích hoạt";

//       return `
//         <tr>
//           <td>${index + 1}</td>
//           <td>${name}</td>
//           <td>${email}</td>
//           <td><span class="badge ${statusClass}">${statusText}</span></td>
//           <td><button class="btn btn-warning">Sửa</button></td>
//           <td><button class="btn btn-danger">Xóa</button></td>
//         </tr>
//       `;
//     })
//     .join("");
// };

// getUsers();
