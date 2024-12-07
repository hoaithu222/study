import { memo } from "react";

function ClearHistories({ onClick }) {
  console.log("Clear");
  return (
    <div>
      <button onClick={onClick}>Xóa lịch sử</button>
    </div>
  );
}
export default memo(ClearHistories);
