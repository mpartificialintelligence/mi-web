"use client";

import { useEffect, useRef } from "react";

const metrics = [
  { value: "3×", label: "Más rápido al mercado", icon: "🚀" },
  { value: "12→4", label: "Meses Time-to-Market", icon: "📅" },
  { value: "90%", label: "Reducción de MTTR", icon: "⚡" },
  { value: "80%+", label: "Cobertura de tests", icon: "✅" },
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

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    for (let i = 0; i < 70; i++) {
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
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.08 * (1 - dist / 130)})`;
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />

      {/* Orbs */}
      <div className="orb absolute w-[500px] h-[500px] top-1/4 right-0 opacity-20"
        style={{ background: "radial-gradient(circle, #14b8a6, transparent 70%)" }} />
      <div className="orb absolute w-72 h-72 bottom-1/4 left-0 opacity-15"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)", animationDelay: "3s" }} />

      {/* Content — 2-column grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Text */}
          <div>
            <div className="badge mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-slow" />
              Ingeniería de Software Agéntica
            </div>

            <h1
              className="mb-6 leading-[1.1] tracking-tight"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.6rem)",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              <span style={{ color: "var(--text-primary)" }}>Ingeniería de Software</span>
              <br />
              <span className="gradient-text">Aumentada por IA</span>
            </h1>

            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "var(--text-muted)",
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Transformamos intenciones de negocio en sistemas funcionales en{" "}
              <strong style={{ color: "var(--text-primary)" }}>1/3 del tiempo</strong>.
              Reducimos su{" "}
              <strong style={{ color: "var(--accent-teal)" }}>Time-to-Market</strong>{" "}
              de 12 a solo <strong style={{ color: "var(--accent-teal)" }}>4 meses</strong>.
            </p>

            <blockquote
              className="mb-10 pl-5 py-4"
              style={{
                borderLeft: "3px solid var(--accent-teal)",
                background: "rgba(20, 184, 166, 0.04)",
                borderRadius: "0 8px 8px 0",
              }}
            >
              <p
                className="leading-relaxed text-sm"
                style={{ color: "var(--text-muted)", fontStyle: "italic", fontFamily: "'DM Sans', sans-serif" }}
              >
                Su próximo MVP ya no tiene que tomar 9 meses. Entregamos
                funcionalidad validada en{" "}
                <strong style={{ color: "var(--text-primary)", fontStyle: "normal" }}>90 días</strong>,
                con un ciclo de Pull Request{" "}
                <strong style={{ color: "var(--accent-teal)", fontStyle: "normal" }}>4× más rápido</strong>.
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Ver nuestros Servicios
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Contáctenos
              </a>
            </div>
          </div>

          {/* RIGHT — Metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.value}
                className="glass-card glass-card-hover p-6 flex flex-col gap-3"
              >
                <span className="text-2xl">{m.icon}</span>
                <div className="metric-value" style={{ fontSize: "2.2rem" }}>{m.value}</div>
                <div
                  className="text-sm font-medium leading-snug"
                  style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>
          Explorar
        </span>
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1px solid rgba(20,184,166,0.3)" }}
        >
          <div
            className="w-1 h-2.5 rounded-full"
            style={{
              background: "var(--accent-teal)",
              animation: "scrollDot 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
      />
    </section>
  );
}
