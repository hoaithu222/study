import { useEffect, useState } from "react";
import "./ProductList.css"
import EditProducts from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

export default function ProductList(props) {
    const { reload } = props;
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editReload, setEditReload] = useState(false);

    const getProduct = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:3001/products");
            if (!response.ok) {
                throw new Error("Lỗi khi lấy dữ liệu");
            }
            const data = await response.json();
            setProduct(data);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    console.log(product);

    useEffect(() => {
        getProduct();
    }, [reload, editReload]);
    const handleReload = () => {
        setEditReload(!editReload)
    }

    return (
        <div className="product-list">
            {loading ? (
                <p>Đang tải...</p>
            ) : (

                <ul>
                    {product.map((item) => (
                        <li key={item.id} className="item">
                            <img src={item.thumbnail} alt={item.title} className="product-image" />
                            <h2 className="product-name">{item.title}</h2>
                            <p className="product-price">{item.price}$</p>
                            <p className="discountPercentage">{item.discountPercentage}%</p>
                            <div className="chose">
                                <EditProducts item={item} onReload={handleReload} />
                                <DeleteProduct item={item} onReload={handleReload} />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
