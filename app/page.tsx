"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navigation />
      <div className="section-fade">
        <Hero />
      </div>
      <div className="section-fade">
        <About />
      </div>
      <div className="section-fade">
        <Services />
      </div>
      <div className="section-fade">
        <Methodology />
      </div>
      <div className="section-fade">
        <Pricing />
      </div>
      <div className="section-fade">
        <CaseStudies />
      </div>
      <Footer />
    </main>
  );
}
