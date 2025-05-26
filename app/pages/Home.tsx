"use client";

import { useState, useEffect } from "react";
import type { Dimensions, ResponsiveSpacing } from "../types/styles";

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
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    const updateLayout = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(window.innerWidth <= 768);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const getResponsiveSpacing = (): ResponsiveSpacing => {
    const baseSize = Math.min(dimensions.width, dimensions.height);
    return {
      padding: {
        vertical: `${Math.max(10, Math.min(80, baseSize * 0.04))}px`,
        horizontal: `${Math.max(15, Math.min(40, baseSize * 0.03))}px`,
      },
      margin: {
        vertical: `${Math.max(5, Math.min(30, baseSize * 0.02))}px`,
        horizontal: `${Math.max(10, Math.min(20, baseSize * 0.015))}px`,
      },
    };
  };

  const spacing = getResponsiveSpacing();

  return (
    <main
      style={{
        padding: `${spacing.padding.vertical} ${spacing.padding.horizontal}`,
        position: "relative",
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
      }}
      className="bg-black text-white font-sans"
    >
      <Navbar />
      <div
        style={{
          margin: `${spacing.margin.vertical} ${spacing.margin.horizontal}`,
          position: "relative",
          width: "100%",
          maxWidth: "100%",
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