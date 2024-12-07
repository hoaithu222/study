import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./style.css";

export default function ProductState() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProduct = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error("Lỗi khi lấy dữ liệu");
            }
            const data = await response.json();
            setProduct(data.products);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="list-product">
            <ul>
                {loading
                    ? Array.from({ length: 9 }).map((_, index) => (
                        <li key={index} className="item">
                            <Skeleton className="product-image" />
                            <Skeleton className="product-name" />
                            <Skeleton className="product-price" />
                            <Skeleton circle={true} className="avatar-skeleton" />
                        </li>
                    ))
                    : product.map((item) => (
                        <li key={item.id} className="item">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="product-image"
                            />
                            <h2 className="product-name">{item.title}</h2>
                            <p className="product-price">Giá: {item.price} USD</p>
                            <p className="avatar">H</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
