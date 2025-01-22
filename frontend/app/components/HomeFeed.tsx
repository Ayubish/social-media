import Post from "./Post";
import { posts } from "@/lib/posts";
export default function HomeFeed() {
  return (
    <div className="max-w-[900px]">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
