import React from "react";


/* Hero: main content. Keep max widths for better line length and responsive stack */
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

/* Page wrapper */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
