'use client';
import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

export default function HomeFeed() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);
  const formattedPosts = posts.map((post) => {
    return {
      fullname: post.user.fullname,
      username: post.user.username,
      _id: post._id,
      timestamp: post.createdAt,
      content: post.content,
      pics: post.pictures,
  }});
  console.log(formattedPosts);
  return (
    <div className="max-w-[900px]">
      {/* {posts.map((post) => (
        <Post key={post._id} 
          fullname={post.user.fullname}
          username={post.user.username}
          _id={post._id}
          timestamp={post.createdAt}
          content={post.content}
          pics={post.pictures}
          likes={post.likes}
          comments={post.comments}
        />
      ))} */}
      <h1>Hello world</h1>
    </div>
  );
}
