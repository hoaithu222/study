import { useState } from "react";
import "./Cart.scss";
export default function Cart() {
  const unitPrice = 120000;
  //   let quantity = 3;
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    console.log(e.target.value);
    const updateQuantity = parseInt(e.target.value);
    setQuantity(updateQuantity);
  };
  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giày thể thao nam cao cấp</td>
            <td>
              <input
                defaultValue={quantity}
                type="number"
                min={1}
                onChange={handleChange}
              />
            </td>
            <td>{unitPrice}đ</td>
            <td>{unitPrice * quantity}đ</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
