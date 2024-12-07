// export const metadata = {
//   title: "Danh sách bài viết",
//   description: "Danh sách các bài viết trên trang",
// };
export const generateMetadata = async ({ searchParams }) => {
  const s = searchParams?.s || "";
  return { title: s ? `Tim kiếm từ khóa: ${s}` : "Danh sách bài viết" };
};
import Link from "next/link";

export default async function PostList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link href={`/posts/${post.id}`}>Xem chi tiết</Link>
        </div>
      ))}
    </div>
  );
}
