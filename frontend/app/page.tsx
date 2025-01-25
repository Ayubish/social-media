"use client";
import { lazy, Suspense, useContext, useState } from "react";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";

const HomeFeed = lazy(() => import('./components/HomeFeed'));

// const Friends = lazy(() => import('./components/Friends'));
// const CreatePost = lazy(() => import('./components/CreatePost'));
// const Messages = lazy(() => import('./components/Messages'));
// const Profile = lazy(() => import('./components/Profile'));
// const Auth = lazy(() => import('./components/Auth'));

// import { useRouter } from 'next/navigation';
// import { AuthContext } from "@/context/AuthCotext";
// import { TabContext } from "@/context/tabContext";


export default function Home() {
  // const {user} = useContext(AuthContext);
  // const {activeTab, setActiveTab} = useContext(TabContext);


  
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
