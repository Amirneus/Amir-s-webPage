import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Articles from "../components/Articles";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Articles />
      <Contact />
    </div>
  );
}