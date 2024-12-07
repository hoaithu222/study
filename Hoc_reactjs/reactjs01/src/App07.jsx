import { useState } from "react";
import UsdVnd from "./ConvertMoney/UsdVnd";
import VndUsd from "./ConvertMoney/VndUsd";

export default function App() {
  const [usd, setUsd] = useState("");
  const [vnd, setVnd] = useState("");
  const handleOnChangeVndUsd = (e) => {
    const vndValue = e.target.value;
    setVnd(vndValue);
    // chuyển thành usd
    setUsd(vndValue / 25000);
  };
  const handleOnChangeUsdVnd = (e) => {
    const usdValue = e.target.value;
    setUsd(usdValue);
    // chuyển thanh việt nam dồng
    setVnd(usdValue * 25000);
  };

  return (
    <div>
      <UsdVnd value={usd} onChange={handleOnChangeUsdVnd} />
      <VndUsd value={vnd} onChange={handleOnChangeVndUsd} />
    </div>
  );
}
