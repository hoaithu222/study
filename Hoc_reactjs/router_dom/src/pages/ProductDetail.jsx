import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { path } = useParams();

  // Kiểm tra nếu path tồn tại và có định dạng mong đợi
  const match = path ? path.match(/(.+)-(\d+)$/) : null;
  if (match) {
    const [, slug, id] = match;
    console.log(slug, id); // In ra slug và id
  } else {
    console.log("Định dạng URL không hợp lệ"); // Thông báo nếu URL không đúng định dạng
  }

  return <div></div>;
}
