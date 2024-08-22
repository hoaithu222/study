// // get Category
// const fetchApi = (url) => {
//   const result = fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
//   return result;
// };
// fetchApi("https://dummyjson.com/products/categories").then((data) => {
//   var html = "";
//   data.forEach((item) => {
//     html += ` <div class="category-item">${item.name}</div>`;
//   });
//   var categories = document.querySelector(".category");
//   categories.innerHTML = html;
// });

// //  get Product

// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data.products);
//     let html = "";
//     data.products.forEach((item) => {
//       html += `
//          <div class="product-item">
//             <img src="${item.thumbnail}" alt="Tiêu đề ...">
//             <h3>${item.title}</h3>
//             <p>${item.price}</p>
//         </div>`;
//     });
//     var products = document.querySelector(".product-list");
//     products.innerHTML = html;
//   });
// end  get Product

import { fetchApi } from "./fetchApi.js";
fetchApi("http://localhost:3000/categories").then((data) => {
  var html = "";
  data.forEach((item) => {
    html += ` <div class="category-item">${item.name}</div>`;
  });
  var categories = document.querySelector(".category");
  categories.innerHTML = html;
});
fetchApi("http://localhost:3000/products").then((data) => {
  let html = "";
  data.forEach((item) => {
    html += `
           <div class="product-item">
              <img src="${item.thumbnail}" alt="Tiêu đề ...">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
          </div>`;
  });
  var products = document.querySelector(".product-list");
  products.innerHTML = html;
});
