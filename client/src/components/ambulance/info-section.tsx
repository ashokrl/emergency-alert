import { MapPin, Bell, Heart } from "lucide-react";

export default function InfoSection() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-800 font-semibold mb-4">How It Works</h3>
      
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
            <MapPin className="text-blue-600 w-4 h-4" />
          </div>
          <div>
            <p className="font-medium text-gray-800 text-sm">Location Tracking</p>
            <p className="text-gray-600 text-xs">We track your location to send relevant alerts</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
            <Bell className="text-yellow-600 w-4 h-4" />
          </div>
          <div>
            <p className="font-medium text-gray-800 text-sm">Smart Alerts</p>
            <p className="text-gray-600 text-xs">Get notified 300m before ambulance arrives</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
            <Heart className="text-green-600 w-4 h-4" />
          </div>
          <div>
            <p className="font-medium text-gray-800 text-sm">Save Lives</p>
            <p className="text-gray-600 text-xs">Help ambulances reach patients faster</p>
          </div>
        </div>
      </div>
    </div>
  );
}
