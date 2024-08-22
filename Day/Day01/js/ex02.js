const apiUrl = "http://localhost:3000";

var variables = {
  q: "",
};
const getUsers = async () => {
  const response = await fetch(apiUrl + "/users");
  const users = await response.json();
  renderTable(users);
};
const addUsers = async (data) => {
  try {
    const response = await fetch(apiUrl + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
};

const nameFind = () => {
  const inputFind = document.querySelector("#find");
  const btnFind = document.querySelector(".btn-find");

  btnFind.addEventListener("click", function () {
    variables.q = fixWord(inputFind.value);
    inputFind.value = "";
    findUser();
  });
};

const findUser = async () => {
  const response = await fetch(`${apiUrl}/users?q=${variables.q}`);
  const users = await response.json();
  renderTable(users);
};

nameFind();

const fixWord = (word) => {
  return word.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
};

const renderTable = (users) => {
  const tbody = document.querySelector(".table tbody");
  const user = users
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
          <td>${fixWord(item.name)}</td>
          <td>${fixWord(item.email)}</td>
          <td><span class="badge ${statusClass}">${item.status}</span></td>
          <td><button class="btn btn-warning">Sửa</button></td>
          <td><button class="btn btn-danger">Xóa</button></td>
        </tr>
      `;
    })
    .join("");
  tbody.innerHTML = user;
};
const addEventFormSubmit = () => {
  const form = document.querySelector(".form-update");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries([...new FormData(form)]);
    const status = await addUsers(formData);
    if (status) {
      getUsers();
      form.reset();
    } else {
      alert("Thêm thất bại");
    }
  });
};
addEventFormSubmit();
getUsers();
