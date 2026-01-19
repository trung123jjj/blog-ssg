import Link from "next/link";
import posts from "../data/data.json";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
