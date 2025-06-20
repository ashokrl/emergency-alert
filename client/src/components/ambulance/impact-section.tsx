export default function ImpactSection() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
      <h3 className="text-purple-800 font-semibold mb-4">Your Impact</h3>
      
      <div className="flex justify-center space-x-8 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-700">47</div>
          <div className="text-purple-600 text-xs">Alerts Received</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-700">23</div>
          <div className="text-purple-600 text-xs">Lives Helped</div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-purple-700 text-sm">Thank you for being a life-saver! 🚑❤️</p>
      </div>
    </div>
  );
}
