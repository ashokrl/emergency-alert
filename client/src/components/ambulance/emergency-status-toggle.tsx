import { Circle, Pause } from "lucide-react";

interface EmergencyStatusToggleProps {
  isOnDuty: boolean;
  onToggle: (onDuty: boolean) => void;
}

export default function EmergencyStatusToggle({ isOnDuty, onToggle }: EmergencyStatusToggleProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-800 font-medium mb-3">Emergency Status</h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => onToggle(true)}
          className={`px-4 py-2 rounded-lg font-medium flex items-center ${
            isOnDuty
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          <Circle className="w-4 h-4 mr-2" />
          ON DUTY
        </button>
        <button
          onClick={() => onToggle(false)}
          className={`px-4 py-2 rounded-lg font-medium flex items-center ${
            !isOnDuty
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          <Pause className="w-4 h-4 mr-2" />
          IDLE
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-2">Toggle your availability for emergency calls</p>
    </div>
  );
}
