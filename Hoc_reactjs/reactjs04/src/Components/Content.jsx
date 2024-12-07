import { memo } from "react";

const Content = () => {
  console.log("Content render");
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        facilis.
      </div>
    </div>
  );
};
export default memo(Content);

// HOC react.memo
