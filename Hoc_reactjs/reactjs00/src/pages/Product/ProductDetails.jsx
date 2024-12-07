import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  return (
    <div>
      <h1>Sản phẩm {params.id}</h1>
    </div>
  );
}
