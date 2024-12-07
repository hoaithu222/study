import { useEffect, useState } from "react";
import "./UseEffect2.scss";
export default function UseEffect2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
      });
  }, []);

  return (
    <>
      <div className="product">
        {data.map((item) => (
          <div className="product__item" key={item.id}>
            <div className="product__image">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div className="product__name">
              <h3>{item.title}</h3>
            </div>
            <div className="product__price">
              <p>{item.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
