import { Ambulance, Users } from "lucide-react";

interface TabNavigationProps {
  activeTab: "driver" | "public";
  onTabChange: (tab: "driver" | "public") => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex bg-gray-50">
      <button
        onClick={() => onTabChange("driver")}
        className={`flex-1 py-4 px-6 text-center font-medium border-b-2 ${
          activeTab === "driver"
            ? "text-red-600 border-red-600 bg-white"
            : "text-gray-500 border-transparent"
        }`}
      >
        <Ambulance className="w-4 h-4 inline mr-2" />
        Driver App
      </button>
      <button
        onClick={() => onTabChange("public")}
        className={`flex-1 py-4 px-6 text-center font-medium border-b-2 ${
          activeTab === "public"
            ? "text-blue-600 border-blue-600 bg-white"
            : "text-gray-500 border-transparent"
        }`}
      >
        <Users className="w-4 h-4 inline mr-2" />
        Public App
      </button>
    </div>
  );
}
