import Image from "next/image";
import { img } from "@/lib/basePath";

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Metodología", href: "#methodology" },
  { label: "Precios", href: "#pricing" },
  { label: "Casos de Éxito", href: "#cases" },
];

const services = [
  "Genesis Engine",
  "Shift-Right",
  "Sentinel Ops",
  "Veritas QA",
  "Doc-Intelligence Fabric",
  "Concierge Agent",
  "Code Auditor Pro",
];

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid rgba(20, 184, 166, 0.1)",
      }}
    >
      {/* Orb */}
      <div
        className="orb absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 opacity-10"
        style={{ background: "radial-gradient(ellipse, #14b8a6, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src={img("/logo.png")}
              alt="Model and Processing Systems"
              width={200}
              height={60}
              className="h-12 w-auto object-contain mb-5"
            />
            <p
              className="text-sm leading-relaxed mb-6 max-w-sm"
              style={{ color: "var(--text-muted)" }}
            >
              La factoría de software líder. Orquestación agéntica y arquitectura de alta
              gobernanza para transformar su negocio en 1/3 del tiempo.
            </p>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <div className="flex items-center gap-2">
                <span style={{ color: "var(--accent-teal)" }}>▸</span>
                <span>Groundedness Score &gt; 0.9</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "var(--accent-teal)" }}>▸</span>
                <span>Uptime del Sistema: 99.9%</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "var(--accent-teal)" }}>▸</span>
                <span>Latencia p95: &lt;1.5s</span>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="font-bold mb-4 text-sm uppercase tracking-widest"
              style={{ color: "var(--text-primary)", fontFamily: "'Syne', sans-serif" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--accent-teal)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-bold mb-4 text-sm uppercase tracking-widest"
              style={{ color: "var(--text-primary)", fontFamily: "'Syne', sans-serif" }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--accent-teal)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "var(--text-muted)")
                    }
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div
          className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12"
          style={{ borderColor: "rgba(20, 184, 166, 0.2)" }}
        >
          <div>
            <div
              className="font-bold text-lg mb-1"
              style={{ fontFamily: "'Syne', sans-serif", color: "var(--text-primary)" }}
            >
              ¿Listo para acelerar su negocio?
            </div>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              Calcule su aceleración con el Marco APEX
            </div>
          </div>
          <a href="#methodology" className="btn-primary whitespace-nowrap">
            Vea el Marco APEX
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(20, 184, 166, 0.08)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Model and Processing Systems for Artificial Intelligence.
            Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse-slow"
              style={{ background: "var(--accent-teal)" }}
            />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Sistemas operativos · Uptime 99.9%
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
