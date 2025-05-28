"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Eventsection from "./pages/event-section";
import BlogSection from "./pages/blog-section";

export default function App() {
  return (
    <main className="bg-black text-white font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<Eventsection />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
