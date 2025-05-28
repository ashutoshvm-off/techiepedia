import { Navbar } from "../pages/navbar";
import { Footer } from "../pages/footer";

export default function Eventsection() {
  return (
    <main className="bg-black text-white font-sans">
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#0A002C] to-[#1E0044] text-white p-6 md:p-16 font-sans">
        {/* Event Card */}
        <div className="bg-[#1A1A40] rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Left: Image */}
          <div className="w-full md:w-1/3">
            <img
              src="./event.png"
              alt="LinkedIn Event"
              className="rounded-xl border-[1px] border-[#3f3f88] hover:scale-105 transition duration-300"
            />
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Event 001 : LinkedIn Unlocked | SKILLSYNC
            </h2>
            <div className="text-sm flex flex-col gap-1 text-[#cccccc]">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>16 Nov 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🕖</span>
                <span>7 PM IST</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌐</span>
                <span>Online</span>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between w-full">
              <div className="text-[#00D2FF] font-semibold text-base">
                Registration Fee <br />
                <span className="text-xl">₹20</span>
              </div>
              <button className="bg-transparent border border-[#00D2FF] text-[#00D2FF] px-6 py-2 rounded-full hover:bg-[#00D2FF] hover:text-black transition-all duration-300">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
          {/* About Section */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#00D2FF] mb-4">
              ABOUT THE EVENT
            </h3>
            <p className="text-[#cccccc] leading-relaxed">
              Lorem ipsum dolor sit amet, <span className="text-[#7B5CFF]">consectetur</span> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <span className="text-[#7B5CFF]"> Duis aute irure dolor in reprehenderit</span>
            </p>
          </div>

          {/* Speaker Card */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg md:text-xl font-bold text-[#00D2FF] mb-4">SPEAKER</h3>
            <img
              src="/assets/brian-mathew.png"
              alt="Brian Roy Mathew"
              className="w-40 h-40 rounded-xl border border-[#3f3f88] mb-4"
            />
            <div>
              <p className="font-semibold text-white">Brian Roy Mathew</p>
              <p className="text-sm text-[#9ca3af]">Founder, Techipedia</p>
            </div>
          </div>
        </div>
      </div>

      <Footer /> 
    </main>
  );
}
