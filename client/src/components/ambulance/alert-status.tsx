import { Shield } from "lucide-react";

export default function AlertStatus() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <Shield className="text-green-600 w-6 h-6" />
      </div>
      <h3 className="text-green-800 font-semibold text-lg">All Clear</h3>
      <p className="text-green-600 text-sm">No ambulances approaching your location</p>
    </div>
  );
}
