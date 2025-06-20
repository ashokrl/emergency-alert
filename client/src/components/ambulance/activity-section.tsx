import { CheckCircle, Info } from "lucide-react";

export default function ActivitySection() {
  const activities = [
    {
      type: "success",
      icon: CheckCircle,
      message: "Ambulance passed safely",
      time: "Today, 6:35 PM • Jubilee Hills Road"
    },
    {
      type: "info",
      icon: Info,
      message: "Alert received",
      time: "Today, 11:30 AM • Banjara Hills"
    },
    {
      type: "success",
      icon: CheckCircle,
      message: "Successfully made way",
      time: "Yesterday, 4:45 PM • Hitech City"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-800 font-semibold mb-4">Recent Activity</h3>
      
      <div className="space-y-3">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-center space-x-3">
              <Icon className={`w-4 h-4 ${activity.type === 'success' ? 'text-green-600' : 'text-blue-600'}`} />
              <div className="flex-1">
                <p className="text-gray-800 text-sm">{activity.message}</p>
                <p className="text-gray-500 text-xs">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
