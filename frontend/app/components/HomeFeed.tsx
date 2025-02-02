'use client';
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { PostContext } from "@/context/PostContext";

interface PostType {
  _id: string;
  user: {
    fullname: string;
    username: string;
  };
  createdAt: string;
  content: string;
  pictures: string[];
}

export default function HomeFeed() {
  const {posts, setPosts} = useContext(PostContext);
  console.log("feed componenet");

  
  
  return (
    <div className="max-w-[900px]">
      {posts.map((post: PostType) => (
        <Post key={post._id}
          fullname={post.user.fullname}
          username={post.user.username}
          _id={post._id}
          timestamp={post.createdAt}
          content={post.content}
          pics={post.pictures}
        />
      ))}
    </div>
  );
}
