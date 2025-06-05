import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const drones = [
  {
    name: "RR-Raptor 18 12S BNF",
    category: "Cinematic",
    image: "/blog3.png", // Fixed relative path
  },
  {
    name: "GEPRC MARK5 DJI O3 HD",
    category: "Freestyle",
    image: "/blog1.png", // Fixed relative path
  },
  {
    name: "AOS Cine35 EVO",
    category: "CineWhoop",
    image: "/blog2.png", // Fixed relative path
  },
  {
    name: "Flywoo Venom H20 Mini",
    category: "Toothpick",
    image: "/blog1.png", // Fixed relative path
  },
  {
    name: "RR-Rhino 5 x8 V4 BNF",
    category: "Long Range",
    image: "/blog3.png", // Fixed relative path
  },
  {
    name: "RR-Raptor 18 12S BNF",
    category: "Cinematic",
    image: "/blog2.png", // Fixed relative path
  },
  {
    name: "GEPRC MARK5 DJI O3 HD",
    category: "Freestyle",
    image: "/blog3.png", // Fixed relative path
  },
];

export default function AppleCardsCarouselDroneSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
    <style>{`
      ::-webkit-scrollbar {
    display: none;
`}
    </style>
    <section
      id="drones-section"
      className="bg-[#0A0118] text-white h-[100vh] flex flex-col justify-center align-center"   
    >
      <div className="max-w-[80%] mx-auto px-6">
        <h2 className="text-7xl md:text-3xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="relative">
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          >
            {drones.map((drone, index) => (
              <motion.div
                key={index}
                className="relative min-w-[200px] sm:min-w-[320px] h-[300px] sm:h-[600px] bg-black/5 rounded-3xl overflow-hidden shadow-lg snap-start shrink-0 cursor-pointer"
              >
                <Image
                  src={drone.image}
                  alt={drone.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <p className="text-sm text-white/70 font-semibold mb-1">
                    {drone.category}
                  </p>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {drone.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on small screens */}
          {showArrows && (
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => scroll("left")}
                className="bg-black/20 hover:bg-black/40 p-3 rounded-full transition"
              >
                <ChevronLeft className="text-white w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="bg-black/20 hover:bg-black/40 p-3 rounded-full transition"
              >
                <ChevronRight className="text-white w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
