import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./contants.js";
import { params } from "./variables.js";

const productsList = document.querySelector(".products-list");

export const drawProduct = () => {
  let categoryNew = "";
  if (params.category != "") {
    categoryNew = `&category=${params.category}`;
  }
  const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${categoryNew}`;
  fetchApi(api).then((data) => {
    const html5 = data
      .map((item) => {
        return `
                   <div class="product-item">
                      <div class="inner-image">
                          <img src="${item.thumbnail}" alt="${item.title}" />
                          <span class="product-percent">
                          ${item.discountPercentage}%</span>
                      </div>
                      <div class="product-content">
                          <h3 class="product-title">
                          ${item.title}
                          </h3>
                          <div class="product-meta">
                              <div class="product-price">
                              ${item.price}$
                              </div>
                              <div class="product-stock">Còn lại
                              ${item.stock} sp
                              </div>
          
                          </div>
                      </div>
                  </div>`;
      })
      .join("");
    productsList.innerHTML = html5;
  });
};
