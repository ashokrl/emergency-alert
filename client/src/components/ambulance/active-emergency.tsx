import { Clock, Gauge, Users, Map, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActiveEmergencyProps {
  onEndEmergency: () => void;
}

export default function ActiveEmergency({ onEndEmergency }: ActiveEmergencyProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-red-800 font-semibold">Active Emergency</h3>
        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold emergency-pulse">
          LIVE
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-red-700">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">Started: 14:25 PM</span>
        </div>
        <div className="flex items-center text-red-700">
          <Gauge className="w-4 h-4 mr-2" />
          <span className="text-sm">Speed: 45 km/h</span>
        </div>
        <div className="flex items-center text-red-700">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm">Users Alerted: 23</span>
        </div>
      </div>
      
      {/* Live Route Tracking */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-center text-gray-500 h-24">
          <div className="text-center">
            <Map className="w-12 h-12 mx-auto mb-2 text-blue-600" />
            <p className="text-sm font-medium">Live Route Tracking</p>
          </div>
        </div>
      </div>
      
      <Button
        onClick={onEndEmergency}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
      >
        <Square className="w-4 h-4 mr-2" />
        END EMERGENCY
      </Button>
    </div>
  );
}
