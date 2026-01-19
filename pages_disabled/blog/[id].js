import posts from "../../data/data.json";

export default function BlogDetail({ post }) {
  if (!post) return <p>Loading...</p>;

  return (
    <main style={{ padding: 40 }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.id === params.id) || null;

  return {
    props: { post },
  };
}
