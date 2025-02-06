import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import axios from "axios";
import TopNav from "./components/TopNav";
import HomeFeed from "./components/HomeFeed";

const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?page=${pageParam}&limit=10`
  );
  if (res.status !== 200) throw new Error('Failed to fetch posts');
  return res.data; 
};

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 1, // Start with page 1
  });

  return (
    <div>
      <TopNav />
      <main className="w-full flex flex-col items-center pb-14">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <HomeFeed />
        </HydrationBoundary>
      </main>
    </div>
  );
}