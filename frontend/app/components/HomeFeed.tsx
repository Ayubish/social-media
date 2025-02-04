'use client';
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { PostContext } from "@/context/PostContext";
import { useQuery } from "@tanstack/react-query";

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
  // const {posts, setPosts} = useContext(PostContext);
  console.log("feed componenet");

  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`).then((res) =>
        res.data
      );
    }
  })
if(isPending) return <div>Loading posts...</div>
if(error) return <div>Shit happend</div>
  const posts = data
  return (
    <div className="max-w-[900px]">
      {posts.map((post: PostType) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}
