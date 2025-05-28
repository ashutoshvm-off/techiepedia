"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Eventsection from "./pages/event-section";

export default function App() {
  return (
    <main className="bg-black text-white font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event" element={<Eventsection />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
