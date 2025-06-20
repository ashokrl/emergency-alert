import { useState } from "react";
import { UserCheck, Settings } from "lucide-react";
import EmergencyStatusToggle from "./emergency-status-toggle";
import EmergencyRouteForm from "./emergency-route-form";
import ActiveEmergency from "./active-emergency";

export default function DriverApp() {
  const [isOnDuty, setIsOnDuty] = useState(true);
  const [hasActiveEmergency, setHasActiveEmergency] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Driver Header */}
      <div className="bg-red-600 text-white p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-xl font-semibold">Ambulance Control</h1>
            <p className="text-red-200 text-sm">Emergency Response Unit</p>
          </div>
          <div className="bg-red-500 bg-opacity-30 px-3 py-1 rounded-full">
            <span className="status-dot bg-green-400"></span>
            <span className="text-sm font-medium">
              {isOnDuty ? "ON DUTY" : "IDLE"}
            </span>
          </div>
        </div>
        
        {/* Driver Profile */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <UserCheck className="text-white text-lg" />
          </div>
          <div>
            <h2 className="font-semibold">Dr. Rajesh Kumar</h2>
            <p className="text-red-200 text-sm">Ambulance ID: AMB-2024-001</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <EmergencyStatusToggle isOnDuty={isOnDuty} onToggle={setIsOnDuty} />
        <EmergencyRouteForm onStartRoute={() => setHasActiveEmergency(true)} />
        {hasActiveEmergency && (
          <ActiveEmergency onEndEmergency={() => setHasActiveEmergency(false)} />
        )}
      </div>
    </div>
  );
}
