"use client";

import { useState, useEffect } from "react";
import Hero from "./hero";
import { Navbar } from "./navbar";
import { About } from "./about";
import { Events } from "./events";
import { Blog } from "./blog";
import { Join } from "./join";
import { Contact } from "./contact";
import GlowingGridSection from "./gallery";
import Footer from "./footer";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      className="bg-black text-white font-sans"
      style={{
        paddingTop: isMobile ? "60px" : "80px",
        position: isMobile ? "relative" : "static",
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <div
        style={{
          marginTop: isMobile ? "0" : "2rem",
          position: isMobile ? "relative" : "static",
          width: "100%",
          maxWidth: "100%",
          padding: 0,
        }}
      >
        <Hero />
      </div>
      <About />
      <Events />
      <GlowingGridSection />
      <Blog />
      <Join />
      <Contact />
      <Footer />
    </main>
  );
}