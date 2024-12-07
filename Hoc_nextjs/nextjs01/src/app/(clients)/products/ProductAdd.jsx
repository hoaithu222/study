"use client";

import { mutate } from "swr";
import { useState } from "react";

export default function ProductAdd() {
  const [product, setProduct] = useState("");

  const addProduct = async (newProduct) => {
    const response = await fetch(`${process.env.SERVER_API_LOCAL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
      throw new Error("Lỗi khi thêm sản phẩm");
    }
    return { status: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product) {
      return alert("Vui lòng nhập tên sản phẩm");
    }
    const { status } = await addProduct({ title: product });
    if (status) {
      mutate({ url: `${process.env.SERVER_API_LOCAL}/products` });
      setProduct("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          name="title"
          onChange={(e) => setProduct(e.target.value)}
          value={product}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
