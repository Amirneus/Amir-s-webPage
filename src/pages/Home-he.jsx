import React from "react";
import Hero from "../components/Hero-he";
import About from "../components/About-he";
import Services from "../components/Services-he";
import Portfolio from "../components/Portfolio-he";
import Articles from "../components/Articles-he";
import Contact from "../components/Contact-he";

export default function HomeHe() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Articles />
      <Contact />
    </div>
  );
}