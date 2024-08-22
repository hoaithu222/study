import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./contants.js";
import { params } from "./variables.js";
import { drawProduct } from "./drawProduct.js";
const categoryList = document.querySelector(".category-list");
fetchApi(API_CATEGORY).then((data) => {
  const html5 = data
    .map((item) => {
      return `<div class="category-item" data-category = "${item.name}">${item.name}</div>`;
    })
    .join("");
  categoryList.innerHTML = html5;
  const litsCategoryItem = document.querySelectorAll(".category-item");
  litsCategoryItem.forEach((item) => {
    item.addEventListener("click", function () {
      params.category = item.dataset.category.toLowerCase().replace(" ", "-");
      drawProduct();
    });
  });
});
