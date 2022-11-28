import Link from "next/link";

const fetchSinglePosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
};

export default async function Post({ params }) {
  const { id } = params;
  const post = await fetchSinglePosts(id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
    </article>
  );
}
