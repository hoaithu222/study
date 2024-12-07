
import { useReducer, useEffect } from "react";
const init = {
    products: [],
    loading: false,
}
const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "SUCCESS") {
        return {
            products: action.products,
            loading: false,
        }
    }
    else {
        return state;

    }
}
export default function ProductReducer() {
    const [data, dispatch] = useReducer(reducer, init)
    const getProduct = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error("Lỗi khi lấy dữ liệu")
            }
            const data = await response.json();
            dispatch({
                type: "SUCCESS",
                products: data.products,
            })
            return data.products;
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 3000)
    }, []);
    console.log(data)

    return (

        <>

            {data.loading ? (
                <h2>Đang tải dữ liệu...</h2>) : (
                <ul>
                    {data.products.map((item) => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>Giá: {item.price} USD</p>
                        </li>
                    ))}
                </ul>
            )
            }

        </>
    )

}