"use client";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/utils/fetch";
import { useState } from "react";
export default function ProductList() {
  const [productId, setProductId] = useState();
  const {
    data: productList,
    error,
    isLoading,
    mutate,
  } = useSWR({ url: `${process.env.SERVER_API_LOCAL}/products` }, fetcher, {
    fallbackData: [],
    // refreshInterval: 1000,
    // refreshInterval sau 1 thời gian thì sẽ tự gọi lại
  });
  const {
    data: [productDetails],
  } = useSWR(
    productId
      ? {
          url: `${process.env.SERVER_API_LOCAL}/product-details?productId=${productId}`,
        }
      : null,
    fetcher,
    {
      fallbackData: [],
    }
  );
  console.log(productDetails);

  const deleteProduct = async (id) => {
    const response = await fetch(
      `${process.env.SERVER_API_LOCAL}/products/${id}`,
      {
        method: "DELETE",
      }
    );
    return response.ok;
  };
  const handleClick = async (id) => {
    const status = await deleteProduct(id);
    if (status) {
      mutate(
        productList.filter((product) => product.id !== id),
        {
          revalidate: false,
        }
      );
    }
  };
  const handleOpenDetail = (id) => {
    console.log(id);
    setProductId(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Lỗi khi lấy dữ liệu</div>;

  return (
    <div>
      <h1>Product List</h1>
      {productList?.map((product) => (
        <div key={product.id}>
          <h2>
            {product.title}
            <button
              onClick={() => {
                handleClick(product.id);
              }}
            >
              &times;
            </button>
            <button onClick={() => handleOpenDetail(product.id)}>Mở</button>
          </h2>
          {productDetails && productDetails.id === product.id && (
            <p>{productDetails.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
