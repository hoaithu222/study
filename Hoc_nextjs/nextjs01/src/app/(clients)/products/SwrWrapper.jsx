"use client";
import { SWRConfig } from "swr";
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";

export default function SwrWrapper() {
  return (
    // có thể  thiết lập mặc định thêm fetcher và fallbackData :[]
    <div>
      <SWRConfig value={{ refreshInterval: 2000 }}>
        <ProductList />
        <ProductAdd />
      </SWRConfig>
    </div>
  );
}
