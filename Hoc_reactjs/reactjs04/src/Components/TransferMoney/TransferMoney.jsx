import { useMemo } from "react";
import { useState } from "react";
import ClearHistories from "./ClearHistories";
import { useCallback } from "react";

export default function TransferMoney() {
  const [money, setMoney] = useState("");
  const [histories, setHistories] = useState([]);

  const handleChangeValue = (e) => {
    setMoney(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([...histories, +money]);
    setMoney("");
  };

  const total = useMemo(() => {
    return histories.reduce((total, history) => {
      console.log("Reducer function called");
      return total + history;
    }, 0);
  }, [histories]);
  const handleClick = useCallback(() => {
    setHistories([]);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền ..."
          onChange={handleChangeValue}
          value={money}
        />
        <button>Add</button>
      </form>
      <h2>Lịch sử : {total}</h2>
      <div>
        {histories.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))}
      </div>
      <ClearHistories onClick={handleClick} />
    </div>
  );
}
