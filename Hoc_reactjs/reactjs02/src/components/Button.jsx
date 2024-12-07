import { forwardRef } from "react";
function Button(props, ref) {
  return <button ref={ref}>Click me</button>;
}
// Higher Order Component
export default forwardRef(Button);
