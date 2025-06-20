import { Ambulance, Volume2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyAlertProps {
  onAcknowledge: () => void;
}

export default function EmergencyAlert({ onAcknowledge }: EmergencyAlertProps) {
  const playAlert = () => {
    // In a real app, this would play an alert sound
    console.log("Playing alert sound");
  };

  return (
    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <Ambulance className="text-red-600 w-6 h-6 emergency-pulse" />
        </div>
        <h3 className="text-red-800 font-bold text-lg">AMBULANCE APPROACHING!</h3>
        <p className="text-red-600 text-sm">Please make way - Emergency vehicle in 300m</p>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600 text-sm">Distance:</span>
          <span className="text-red-600 font-semibold text-sm">300 meters</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 text-sm">Direction:</span>
          <span className="text-red-600 font-semibold text-sm">Behind you</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 text-sm">ETA:</span>
          <span className="text-red-600 font-semibold text-sm">45 seconds</span>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <Button
          onClick={playAlert}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white"
        >
          <Volume2 className="w-4 h-4 mr-2" />
          Sound Alert
        </Button>
        <Button
          onClick={onAcknowledge}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white"
        >
          <Check className="w-4 h-4 mr-2" />
          Got It
        </Button>
      </div>
    </div>
  );
}
