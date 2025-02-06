'use client'
import { FiHome, FiUsers, FiPlusCircle, FiMessageSquare, FiUser, } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/context/AuthCotext";
import { useContext } from "react";

export default function BottomNav() {
  const {user} = useContext(AuthContext);
  const pathname = usePathname();
  const tabs = [
    { id: "home", icon: FiHome, label: "Home", href: "/" },
    { id: "friends", icon: FiUsers, label: "Friends", href: "/friends" },
    { id: "createpost", icon: FiPlusCircle, label: "Post", href: "/createpost" },
    { id: "message", icon: FiMessageSquare, label: "Message", href: "/message" },
    { id: "profile", icon: FiUser, label: "Profile", href: "/profile" },
  ];
  if(!user){
    return(
      <div className="flex p-5 bg-slate-300">
        <div>Sign Up</div>
        <div>or</div>
        <div>Log In</div>
      </div>
    )
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <ul className="flex justify-around">

        {tabs.map((tab) => {
          const isActive = pathname == tab.href;
          return (
          <li key={tab.id} className="flex-1">
            <Link href={tab.href} >
            <button className={`w-full py-2 flex flex-col items-center ${isActive? "text-blue-600" : "text-gray-500"}`}>
              <tab.icon size={24} />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
              </Link>
          </li>)
          }
        )}
      </ul>
    </nav>
  );
}
