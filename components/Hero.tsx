"use client";

import { useEffect, useRef } from "react";

const metrics = [
  { value: "3×", label: "Más rápido" },
  { value: "12→4", label: "Meses al mercado" },
  { value: "90%", label: "Reducción MTTR" },
  { value: "80%+", label: "Cobertura de tests" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 184, 166, ${p.alpha})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Orbs */}
      <div
        className="orb absolute w-96 h-96 top-1/4 right-1/4 opacity-30"
        style={{ background: "radial-gradient(circle, #14b8a6, transparent 70%)" }}
      />
      <div
        className="orb absolute w-64 h-64 bottom-1/3 left-1/6 opacity-20"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          animationDelay: "3s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="badge mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-slow" />
            AI-First Software Engineering
          </div>

          {/* H1 */}
          <h1
            className="mb-6 leading-[1.08] tracking-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            <span style={{ color: "var(--text-primary)" }}>Ingeniería de Software </span>
            <span className="gradient-text">Aumentada por IA</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.9em" }}>
              {" "}(AIFSD).
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-6 max-w-3xl leading-relaxed"
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Transformamos intenciones de negocio en sistemas funcionales en{" "}
            <strong style={{ color: "var(--text-primary)" }}>1/3 del tiempo</strong>.
            Somos la factoría de software líder. Utilizamos la orquestación agéntica y la
            arquitectura de alta gobernanza para reducir su{" "}
            <strong style={{ color: "var(--accent-teal)" }}>Time-to-Market (MVP)</strong>{" "}
            de 12 a solo <strong style={{ color: "var(--accent-teal)" }}>4 meses</strong>.
          </p>

          {/* Hook quote */}
          <blockquote
            className="mb-10 pl-5 py-4 max-w-2xl"
            style={{
              borderLeft: "3px solid var(--accent-teal)",
              background: "rgba(20, 184, 166, 0.04)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              className="italic leading-relaxed"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'DM Sans', sans-serif",
                fontStyle: "italic",
              }}
            >
              Su próximo MVP ya no tiene que tomar 9 meses. Con Ingeniería Aumentada por
              IA, entregamos funcionalidad validada y testeada en{" "}
              <strong style={{ color: "var(--text-primary)", fontStyle: "normal" }}>
                90 días
              </strong>
              , garantizando un ciclo de Pull Request{" "}
              <strong style={{ color: "var(--accent-teal)", fontStyle: "normal" }}>
                4 veces más rápido
              </strong>
              .
            </p>
          </blockquote>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#methodology" className="btn-primary">
              Calcule su Aceleración
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn-outline">
              Ver Servicios
            </a>
          </div>
        </div>

        {/* Metrics row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.value}
              className="glass-card p-6 text-center animated-border"
            >
              <div className="metric-value mb-1">{m.value}</div>
              <div
                className="text-sm font-medium"
                style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
      />
    </section>
  );
}
