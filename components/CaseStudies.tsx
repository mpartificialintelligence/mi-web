import Image from "next/image";
import { img } from "@/lib/basePath";

const cases = [
  {
    title: "Fintech Global logró 3× Aceleración en validación de productos con Ingeniería Aumentada",
    sector: "Fintech",
    challenge:
      "El cliente enfrentaba un lento Time-to-Market (estimado en 10 meses) y una alta deuda técnica en su plataforma heredada de procesamiento de pagos.",
    solution:
      "Implementamos Genesis Engine bajo nuestro marco de aceleración. Utilizamos Vibe Prototyping y Spec-Driven Development para generar código de alta gobernanza.",
    results: [
      { metric: "10→3", label: "Meses Time-to-Market", color: "#0d9488" },
      { metric: "+45%", label: "Productividad incrementada", color: "#0891b2" },
      { metric: "$250K", label: "Ahorros operativos anuales", color: "#059669" },
    ],
    testimony:
      "Pagamos por el resultado entregado, no por el esfuerzo o las horas. Es una filosofía completamente diferente que nos permitió lanzar en tiempo récord.",
    author: "CTO, Fintech Global",
    image: img("/images/laptop.png"),
  },
  {
    title: "Empresa Aseguradora eliminó deuda técnica COBOL con 80% de automatización agéntica",
    sector: "Seguros",
    challenge:
      "Sistema legado COBOL de 30 años impedía la innovación. Mantenimiento costoso consumía el 60% del presupuesto tecnológico anual.",
    solution:
      "Aplicamos Shift-Right con Refactorización Agéntica y el Patrón Estrangulador, preservando la lógica de negocio crítica con 87% de precisión.",
    results: [
      { metric: "80%", label: "Automatización en modernización", color: "#0d9488" },
      { metric: "60%↓", label: "Reducción costos de mantenimiento", color: "#0891b2" },
      { metric: "87%", label: "Precisión en traducción de lógica", color: "#7c3aed" },
    ],
    testimony:
      "Creíamos que modernizar nuestro sistema COBOL tomaría años. Con el modelo de ahorros compartidos, el proyecto se financió solo con los ahorros que generó.",
    author: "Director IT, Aseguradora Nacional",
    image: img("/images/keyboard.png"),
  },
];

const templateSteps = [
  {
    label: "El Desafío (SDLC 1.0)",
    desc: "Lento Time-to-Market y alta deuda técnica",
    color: "#ef4444",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    label: "La Solución de Ingeniería Aumentada (SDLC 2.0)",
    desc: "Genesis Engine + Vibe Prototyping + SDD",
    color: "#f59e0b",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
  },
  {
    label: "Resultados Cuantitativos",
    desc: "Métricas de aceleración medibles y auditables",
    color: "#0d9488",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/>
      </svg>
    ),
  },
  {
    label: "Testimonio Clave",
    desc: "Valor entregado desde la perspectiva del cliente",
    color: "#0891b2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
];

export default function CaseStudies() {
  return (
    <section
      id="cases"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(13,148,136,0.2), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(13,148,136,0.2), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="badge mb-4">Casos de Éxito</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 2.5vw, 2.6rem)",
              color: "var(--text-primary)",
            }}
          >
            Casos de Éxito en{" "}
            <span className="gradient-text">Ingeniería de Software con IA</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Métricas reales de aceleración en proyectos reales bajo nuestra metodología de entrega.
          </p>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-8 mb-20">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden"
              style={{ boxShadow: "0 4px 24px rgba(15,23,42,0.08)" }}
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image side */}
                <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover object-center"
                    style={{ filter: "brightness(0.75) contrast(1.05)" }}
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,148,136,0.7) 0%, transparent 60%)",
                    }}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#ccfbf1" }}
                    >
                      {c.sector}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-3 p-8 flex flex-col gap-6">
                  <h3
                    className="text-xl font-bold leading-snug"
                    style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
                  >
                    {c.title}
                  </h3>

                  {/* Challenge + Solution */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "#dc2626" }}
                      >
                        El Desafío
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "var(--accent-teal)" }}
                      >
                        La Solución de Ingeniería Aumentada
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results metrics */}
                  <div className="flex flex-wrap gap-4">
                    {c.results.map((r) => (
                      <div
                        key={r.label}
                        className="flex-1 min-w-[120px] p-4 rounded-xl text-center"
                        style={{
                          background: `${r.color}07`,
                          border: `1px solid ${r.color}20`,
                        }}
                      >
                        <div
                          className="text-2xl font-black mb-1"
                          style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            color: r.color,
                          }}
                        >
                          {r.metric}
                        </div>
                        <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Testimony */}
                  <blockquote
                    className="p-4 rounded-xl"
                    style={{
                      background: "rgba(13, 148, 136, 0.04)",
                      border: "1px solid rgba(13, 148, 136, 0.1)",
                      borderLeft: "3px solid var(--accent-teal)",
                    }}
                  >
                    <p
                      className="text-sm italic leading-relaxed mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      &ldquo;{c.testimony}&rdquo;
                    </p>
                    <cite
                      className="text-xs font-semibold not-italic"
                      style={{ color: "var(--accent-teal)" }}
                    >
                      — {c.author}
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case study template */}
        <div
          className="glass-card p-8"
          style={{ borderColor: "rgba(13, 148, 136, 0.15)" }}
        >
          <div className="text-center mb-8">
            <div className="badge mb-3 mx-auto">Plantilla de Caso de Éxito</div>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
            >
              Estructura de Todo Caso de Éxito
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {templateSteps.map((s, idx) => (
              <div key={s.label} className="flex flex-col gap-2 text-center items-center">
                <div style={{ color: s.color }}>{s.icon}</div>
                <div
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--accent-teal)" }}
                >
                  Paso {idx + 1}
                </div>
                <div
                  className="font-bold text-sm"
                  style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
                >
                  {s.label}
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
