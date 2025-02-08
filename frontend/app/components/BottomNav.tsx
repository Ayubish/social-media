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
    <nav className="flex fixed bottom-0 left-0 right-0 p-5 items-center justify-between bg-white border-t border-gray-200">
        <h2 className="text-2xl font-medium"><span className="font-bold text-blue-500">Z</span>social</h2>
        <div>
        <Link href="/signup">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md text-xl mr-5">Create account</button>
        </Link>
        <Link href="/signin">
        <button className="bg-slate-200 px-5 py-2 rounded-md text-xl">Signin</button>
        </Link>
        </  div>
    </nav>
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
