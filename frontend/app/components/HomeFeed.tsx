'use client';
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { PostContext } from "@/context/PostContext";

export default function HomeFeed() {
  const {posts, setPosts} = useContext(PostContext);

  

  // useEffect(() => {
  //   axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`)
  //     .then(res => setPosts(res.data))
  //     .catch(err => console.error(err));
  // }, []);
  
  return (
    <div className="max-w-[900px]">
      {posts.map((post) => (
        <Post key={post._id}
          fullname={post.user.fullname}
          username={post.user.username}
          _id={post._id}
          timestamp={post.createdAt}
          content={post.content}
          pics={post.pictures}
        />
      ))}
      <h1>Hello world</h1>
    </div>
  );
}
