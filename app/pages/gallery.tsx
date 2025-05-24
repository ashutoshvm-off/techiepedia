export default function PurpleGridSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 grid-rows-6 gap-6 h-screen">
          {/* Top left small card */}
          <div className="col-span-3 row-span-2 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          {/* Center large card */}
          <div className="col-span-5 row-span-4 col-start-4 row-start-2 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          {/* Top right card */}
          <div className="col-span-4 row-span-3 col-start-9 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          {/* Left medium card */}
          <div className="col-span-3 row-span-3 row-start-3 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          {/* Right medium card */}
          <div className="col-span-4 row-span-2 col-start-9 row-start-4 bg-gradient-to-br from-purple-500 via-purple-700 to-purple-800 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          {/* Bottom card */}
          <div className="col-span-8 row-span-1 col-start-1 row-start-6 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
          
          {/* Bottom right small card */}
          <div className="col-span-4 row-span-1 col-start-9 row-start-6 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-2xl shadow-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300"></div>
        </div>
      </div>
    </div>
  );
}