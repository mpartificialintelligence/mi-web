import Image from "next/image";
import { img } from "@/lib/basePath";

const services = [
  {
    name: "Genesis Engine",
    subtitle: "Desarrollo de MVPs",
    tag: "3× Aceleración",
    tagColor: "#0d9488",
    uvp: "Entrega de prototipos funcionales en 48 horas y MVPs en 2 a 4 meses.",
    ai: "AI-First Discovery: Agentes de NLP detectan inconsistencias en requisitos. Spec-Driven Development: Generación de código basado en especificación validada.",
    pricing: "Outcome-Based: Precio fijo por hito funcional validado (ej. «Módulo de pagos funcional»).",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    ideal: "Startups y empresas que quieren lanzar rápido",
  },
  {
    name: "Shift-Right",
    subtitle: "Modernización de Legados",
    tag: "80% Automatización",
    tagColor: "#0891b2",
    uvp: "Eliminación Rápida de Deuda Técnica: Modernización de códigos obsoletos (COBOL, Java/.NET legacy).",
    ai: "Refactorización Agéntica: Agentes analizan y traducen lógica de negocio con 87% de precisión. Patrón «Estrangulador».",
    pricing: "Shared Savings (Value-Based): 15–30% de los ahorros operativos generados en mantenimiento.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23,4 23,10 17,10"/><polyline points="1,20 1,14 7,14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
    ideal: "Empresas con sistemas legados costosos de mantener",
  },
  {
    name: "Sentinel Ops",
    subtitle: "AI-SRE & Resiliencia",
    tag: "99.9% Uptime",
    tagColor: "#059669",
    uvp: "Máxima Resiliencia: Garantía de continuidad mediante la reducción del MTTR hasta en un 90%. Uptime garantizado del 99.9%.",
    ai: "Remediación Autónoma: Ejecución de correcciones bajo guardrail (ej. rollback de despliegues). Investigación Paralela: Agentes identifican la causa raíz en segundos.",
    pricing: "Híbrido: Suscripción base + tarifa por incidente resuelto exitosamente.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    ideal: "Productos en producción con alta demanda de disponibilidad",
  },
  {
    name: "Veritas QA",
    subtitle: "Aseguramiento de Calidad 2.0",
    tag: "+80% Cobertura",
    tagColor: "#7c3aed",
    uvp: "Calidad a la Izquierda: Cobertura de pruebas superior al 80% sin exposición de datos sensibles (GDPR/HIPAA).",
    ai: "Generación Agéntica de Pruebas: Creación automática de suites Playwright/Cypress. Datos Sintéticos: Pruebas masivas que cumplen normativas de privacidad.",
    pricing: "Outcome-Based: Tarifa por «Suite de Pruebas Verificada» o «Release Auditado».",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9,11 12,14 22,4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    ideal: "Equipos que necesitan calidad regulatoria (GDPR/HIPAA)",
  },
];


export default function Services() {
  return (
    <section
      id="services"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(13,148,136,0.04), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(8,145,178,0.04), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 max-w-3xl">
          <div className="badge mb-4">Catálogo de Servicios</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 2.5vw, 2.6rem)",
              color: "var(--text-primary)",
            }}
          >
            Desarrollo de Software con{" "}<span className="gradient-text">Inteligencia Artificial</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Cuatro pilares de servicio diseñados para acelerar cada etapa de su ciclo de
            vida de software.
          </p>
        </div>

        {/* Service pillars grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((s) => (
            <div
              key={s.name}
              className="glass-card glass-card-hover p-7 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.tagColor}10`, color: s.tagColor }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <h3
                      className="font-bold text-xl"
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {s.name}
                    </h3>
                    <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {s.subtitle}
                    </div>
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{
                    background: `${s.tagColor}10`,
                    color: s.tagColor,
                    border: `1px solid ${s.tagColor}25`,
                  }}
                >
                  {s.tag}
                </span>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid rgba(13,148,136,0.08)" }} />

              {/* UVP */}
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: s.tagColor }}
                >
                  Propuesta de Valor
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {s.uvp}
                </p>
              </div>

              {/* AI Acceleration */}
              <div
                className="p-4 rounded-xl text-sm"
                style={{
                  background: `${s.tagColor}06`,
                  border: `1px solid ${s.tagColor}15`,
                }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  Aceleración por IA
                </div>
                <p style={{ color: "var(--text-muted)" }}>{s.ai}</p>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-2 text-sm">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--accent-teal)", flexShrink: 0 }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span style={{ color: "var(--text-muted)" }}>{s.pricing}</span>
              </div>

              {/* Ideal for */}
              <div
                className="text-xs px-3 py-2 rounded-lg"
                style={{
                  background: `${s.tagColor}06`,
                  border: `1px solid ${s.tagColor}15`,
                  color: "var(--text-muted)",
                }}
              >
                <span style={{ color: s.tagColor, fontWeight: 600 }}>Ideal para: </span>
                {s.ideal}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-lg transition-all duration-200 cursor-pointer"
                style={{
                  color: s.tagColor,
                  border: `1.5px solid ${s.tagColor}30`,
                  background: `${s.tagColor}06`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${s.tagColor}12`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${s.tagColor}60`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `${s.tagColor}06`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${s.tagColor}30`;
                }}
              >
                Consultar este servicio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Image banner */}
        <div className="mt-20 relative rounded-2xl overflow-hidden" style={{ height: "300px", boxShadow: "0 8px 40px rgba(15,23,42,0.1)" }}>
          <Image
            src={img("/images/laptops.png")}
            alt="AI Engineering Stack"
            fill
            className="object-cover object-center"
            style={{ filter: "brightness(0.55) contrast(1.05)" }}
          />
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
            style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.6) 0%, rgba(8,145,178,0.4) 100%)" }}
          >
            <p
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-syne), sans-serif", color: "#ffffff" }}
            >
              90% del código generado por agentes.{" "}
              <span style={{ color: "#ccfbf1" }}>100% supervisado por humanos.</span>
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)" }}>
              Ingenieros senior enfocados en arquitectura, estrategia y seguridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
