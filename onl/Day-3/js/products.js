import { drawProduct } from "./drawProduct.js";
import { params } from "./variables.js";

drawProduct();

// Search
const inputSearch = document.querySelector(".inner-search input");
const btn = document.querySelector(".inner-search .btn");
const search = () => {
  params.q = inputSearch.value;
  drawProduct();
};
btn.addEventListener("click", function (e) {
  search();
});
inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    search();
  }
});

// End Search

// filter
const filter = document.querySelector("#filter");
filter.addEventListener("change", function (e) {
  switch (e.target.value) {
    case "mac-dinh":
      params.sort = "";
      params.order = "";
      break;
    case "gia-thap-den-cao":
      params.sort = "price";
      params.order = "asc";
      break;
    case "gia-cao-den-thap":
      params.sort = "price";
      params.order = "desc";
      break;
    case "giam-gia-nhieu":
      params.sort = "discountPercentage";
      params.order = "desc";
      break;
    default:
      break;
  }
  drawProduct();
});

// end filter

// Pagination
const pagiPrev = document.querySelector(".btn-prev");
const pagiNext = document.querySelector(".btn-next");
const number = document.querySelector(".number");
pagiNext.addEventListener("click", function () {
  params.page += 1;
  number.innerText = params.page;
  drawProduct();
});
pagiPrev.addEventListener("click", function () {
  if (params.page > 1) {
    params.page -= 1;
    number.innerText = params.page;
    drawProduct();
  }
});
// Pagination
