import { useState } from "react";
import { User, Settings } from "lucide-react";
import AlertStatus from "./alert-status";
import EmergencyAlert from "./emergency-alert";
import InfoSection from "./info-section";
import ActivitySection from "./activity-section";
import ImpactSection from "./impact-section";

export default function PublicApp() {
  const [hasActiveAlert, setHasActiveAlert] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Public Header */}
      <div className="bg-blue-600 text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-semibold">AmbulanceAlert</h1>
            <p className="text-blue-200 text-sm">Stay Alert, Save Lives</p>
          </div>
          <button className="text-white">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="text-white w-5 h-5" />
            </div>
            <div>
              <h2 className="font-medium">Priya Sharma</h2>
              <p className="text-blue-200 text-xs">Location Services: ON</p>
            </div>
          </div>
          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Active</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {hasActiveAlert ? (
          <EmergencyAlert onAcknowledge={() => setHasActiveAlert(false)} />
        ) : (
          <AlertStatus />
        )}
        <InfoSection />
        <ActivitySection />
        <ImpactSection />
      </div>
    </div>
  );
}
