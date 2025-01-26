"use client";
import TopNav from "./components/TopNav";
import HomeFeed from "./components/HomeFeed";

export default function Home() {
  return (
    <div>
      <TopNav />
        <main className="w-full flex flex-col items-center">
          <HomeFeed />
        </main>
    </div>
  );
}
