import { useEffect, useState } from "react";
import "./UseEffect3.scss";
export default function UseEffect3() {
  const [data, setData] = useState([]);
  const [quantityPage, setQuantityPage] = useState(0);
  const limit = 10;
  const [pageActive, setPageActive] = useState(0);
  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?skip=${limit * pageActive}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      });
  }, [pageActive]);
  const handleClick = (e) => {
    console.log(e);
    setPageActive(e);
  };
  // console.log(quantityPage);
  // console.log(...Array(quantityPage));

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

      <ul className="pagination">
        {[...Array(quantityPage)].map((_, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            {index + 1}
          </li>
        ))}
      </ul>
    </>
  );
}
