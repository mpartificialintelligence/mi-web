"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { img } from "@/lib/basePath";

const navLinks = [
  { label: "Inicio", href: "#home", id: "home" },
  { label: "Nosotros", href: "#about", id: "about" },
  { label: "Servicios", href: "#services", id: "services" },
  { label: "Precios", href: "#pricing", id: "pricing" },
  { label: "Casos de Éxito", href: "#cases", id: "cases" },
  { label: "Contacto", href: "#contact", id: "contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: "rgba(15, 23, 42, 0.4)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(13, 148, 136, 0.1)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(15,23,42,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4 group cursor-pointer">
            <Image
              src={img("/logo.png")}
              alt="Model and Processing Systems for Artificial Intelligence"
              width={56}
              height={56}
              className="h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col gap-1">
              <span
                className="gradient-text"
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                }}
              >
                Model and Processing Systems
              </span>
              <span
                className="hidden sm:block"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                for Artificial Intelligence
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 pl-8 border-l" style={{ borderColor: "rgba(13,148,136,0.15)" }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative"
                  style={{
                    color: isActive ? "var(--accent-teal)" : "var(--text-muted)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--accent-teal)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = isActive
                      ? "var(--accent-teal)"
                      : "var(--text-muted)")
                  }
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "var(--accent-teal)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              Contáctenos
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 relative z-50 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--accent-teal)",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "",
              }}
            />
            <span
              className="w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--accent-teal)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--accent-teal)",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4 relative z-50"
            style={{ background: "rgba(255, 255, 255, 0.98)", borderTop: "1px solid rgba(13,148,136,0.1)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium py-2 border-b transition-colors duration-200"
                style={{
                  color: activeSection === link.id ? "var(--accent-teal)" : "var(--text-muted)",
                  borderColor: "rgba(13, 148, 136, 0.1)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm mt-2 justify-center" onClick={() => setMenuOpen(false)}>
              Contáctenos
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
