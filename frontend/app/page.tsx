import TopNav from "./components/TopNav";
import { lazy, Suspense } from "react";
const HomeFeed = lazy(()=> import("./components/HomeFeed"));

export default function Home() {
  console.log("what am i?")

  return (
    <div>
      <TopNav />
        <main className="w-full flex flex-col items-center">
          <Suspense fallback={<div>Loading...</div>}>
          <HomeFeed />
            </Suspense>
        </main>
    </div>
  );
}
