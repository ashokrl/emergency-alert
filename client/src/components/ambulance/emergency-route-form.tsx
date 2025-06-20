import { useState } from "react";
import { Route, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmergencyRouteFormProps {
  onStartRoute: () => void;
}

export default function EmergencyRouteForm({ onStartRoute }: EmergencyRouteFormProps) {
  const [fromLocation, setFromLocation] = useState("Apollo Hospital, Jubilee Hills");
  const [toLocation, setToLocation] = useState("NIMS Hospital, Punjagutta");

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-800 font-medium mb-4 flex items-center">
        <Route className="text-blue-600 w-5 h-5 mr-2" />
        Set Emergency Route
      </h3>
      
      <div className="space-y-4">
        <div>
          <Label className="text-gray-600 text-sm font-medium">From Location</Label>
          <div className="mt-1 relative">
            <Input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              className="pl-10"
            />
            <MapPin className="text-red-600 w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        
        <div>
          <Label className="text-gray-600 text-sm font-medium">To Location</Label>
          <div className="mt-1 relative">
            <Input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              className="pl-10"
            />
            <Building2 className="text-green-600 w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
      
      <Button
        onClick={onStartRoute}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold mt-4"
      >
        START EMERGENCY ROUTE
      </Button>
    </div>
  );
}
