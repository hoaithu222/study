const inputEl = document.querySelector("input");
const send = document.querySelector(".send");
const remove = document.querySelector(".remove");
const up = document.querySelector(".up");
const divEl = document.querySelector("div");
const clear = document.querySelector(".clear");
send.addEventListener("click", () => {
  const name = inputEl.name;
  const value = inputEl.value;
  if (value) {
    localStorage.setItem(name, value);
    const email = localStorage.getItem("email");
    divEl.innerHTML = email;
  }
});
remove.addEventListener("click", () => {
  localStorage.removeItem("email");
  divEl.innerHTML = "";
});

let count = 0;

up.addEventListener("click", () => {
  localStorage.setItem(`key${count}`, `value${count}`);
  count++;
});
clear.addEventListener("click", () => {
  localStorage.clear();
});

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(key, value);
}
