'use client';
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?page=${pageParam}&limit=10`
  );
  if (res.status !== 200) throw new Error('Failed to fetch posts');
  return res.data;
};

export default function HomeFeed() {  

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor || null;
    },
    initialPageParam: 1,
  });
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: () => {
  //     return axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`).then((res) =>
  //       res.data
  //     );
  //   }
  // })

  // useEffect(()=>{
  //   fetchNextPage();

  // },[!isFetchingNextPage]);

  const posts = data?.pages.flatMap(page => page.posts) || [];
  console.log(posts);

  function handleLoadMore(){
    if(hasNextPage){
      fetchNextPage();
    } else {
      console.log("No more posts")
    }
  }
if(isLoading) return <div>Loading posts...</div>
if(error) return <div>Shit happend</div>
  return (
    <div className="max-w-[900px]">
      {posts.map((post: PostType) => (
        <Post key={post._id} post={post} />
      ))}
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
}
