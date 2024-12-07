export const generateMetadata = async ({ params: { id } }) => {
  const postDetails = await getPostById(id);
  return {
    title: postDetails?.title,
  };
};
const getPostById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const postDetails = await response.json();
  return postDetails;
};
export default async function PostDetails({ params: { id } }) {
  const postDetails = await getPostById(id);
  return (
    <div>
      <h1>{postDetails.title}</h1>
      <h2>{postDetails.body}</h2>
      <h3>
        {postDetails.userId}-{postDetails.id}
      </h3>
    </div>
  );
}
