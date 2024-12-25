import {
  FiHome,
  FiUsers,
  FiPlusCircle,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const tabs = [
    { id: "home", icon: FiHome, label: "Home" },
    { id: "friends", icon: FiUsers, label: "Friends" },
    { id: "createpost", icon: FiPlusCircle, label: "Post" },
    { id: "message", icon: FiMessageSquare, label: "Message" },
    { id: "profile", icon: FiUser, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <ul className="flex justify-around">
        {tabs.map((tab) => (
          <li key={tab.id} className="flex-1">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`w-full py-2 flex flex-col items-center ${
                activeTab === tab.id ? "text-blue-600" : "text-gray-500"
              }`}
            >
              <tab.icon size={24} />
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
