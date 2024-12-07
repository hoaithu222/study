import { productsData } from "../../data/products";
import ProductItem from "./ProductItem";

export default function ProductList() {
  return (
    <>
      <div className="product__list">
        {productsData.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
