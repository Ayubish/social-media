import BottomNav from "../components/BottomNav";
import HomeFeed from "../components/HomeFeed";

export default function Home() {
  return (
    <div>
     
      <main className="w-full flex flex-col items-center">
        <HomeFeed />
      </main>
      <BottomNav />
    </div>
  );
}