"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import CaseStudies from "@/components/portfolio/CaseStudies";
import Education from "@/components/portfolio/Education";
import Leadership from "@/components/portfolio/Leadership";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function PortfolioHome() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    document.documentElement.style.scrollBehavior = reducedMotion
      ? "auto"
      : "smooth";
  }, []);

  return (
    <div className="App min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CaseStudies />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}
