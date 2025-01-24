"use client";
import { useContext, useState } from "react";
import BottomNav from "./components/BottomNav";
import HomeFeed from "./components/HomeFeed";
import Friends from "./components/Friends";
import CreatePost from "./components/CreatePost";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import TopNav from "./components/TopNav";
import SignUp from "./components/SignUp";
import Auth from "./components/Auth";
import { useRouter } from 'next/navigation';
import { AuthContext } from "@/context/AuthCotext";


export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isLogged, setIsLogged] = useState(false);
  const {user} = useContext(AuthContext);

    const router = useRouter();

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <HomeFeed />;
      case "friends":
        return <Friends />;
      case "createpost":
        return <CreatePost />;
      case "message":
        return <Messages />;
      case "profile":
        return user? <Profile user={user} /> : <Auth />
      default:
        return <HomeFeed />;
    }
  };
  return (
    <div>
      <TopNav />
      <main className="w-full flex flex-col items-center">{renderPage()}</main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
