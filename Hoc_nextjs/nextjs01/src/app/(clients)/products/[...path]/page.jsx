import React from "react";

export default function ProductDetailPage({ params }) {
  const {
    path: [productId, productSlug],
  } = params;

  return (
    <div>
      <h1>ProductDetail</h1>
      <h3>ID:{productId}</h3>
      <h4>Slug :{productSlug}</h4>
    </div>
  );
}
