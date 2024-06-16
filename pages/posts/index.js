import Link from "next/link";
function Postlist({ posts }) {
  return (
    <>
      <h1>All List post</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              UsersPost Id
            </Link>{" "}
            <hr />
            <h1>
              {post.id} {post.title}
            </h1>
          </div>
        );
      })}
    </>
  );
}
export default Postlist;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
