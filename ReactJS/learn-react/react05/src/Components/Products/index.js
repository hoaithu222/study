
import CreateProducts from "./CreateProducts";
import ProductList from "./ProductList";
import { useState } from "react";

export default function Products() {
    const [reload, setReload] = useState(false);
    const handleReload = () => {
        setReload(!reload);
    }
    return (
        <>
            <h1>Danh sách các sản phẩm</h1>
            <CreateProducts onReload={handleReload} />
            <ProductList reload={reload} />

        </>
    )
}
