import Image from "next/image";
import { img } from "@/lib/basePath";

const cases = [
  {
    title: "Fintech Global logró 3× Aceleración en validación de productos con Ingeniería Aumentada",
    sector: "Fintech",
    challenge:
      "El cliente enfrentaba un lento Time-to-Market (estimado en 10 meses) y una alta deuda técnica en su plataforma heredada de procesamiento de pagos.",
    solution:
      "Implementamos Genesis Engine bajo el marco APEX. Utilizamos Vibe Prototyping y Spec-Driven Development para generar código de alta gobernanza.",
    results: [
      { metric: "10→3", label: "Meses Time-to-Market", color: "#14b8a6" },
      { metric: "+45%", label: "Productividad incrementada", color: "#06b6d4" },
      { metric: "$250K", label: "Ahorros operativos anuales", color: "#34d399" },
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
      "Aplicamos Shift-Right con Refactorización Agéntica bajo el Patrón Estrangulador, preservando la lógica de negocio crítica con 87% de precisión.",
    results: [
      { metric: "80%", label: "Automatización en modernización", color: "#14b8a6" },
      { metric: "60%↓", label: "Reducción costos de mantenimiento", color: "#06b6d4" },
      { metric: "87%", label: "Precisión en traducción de lógica", color: "#a78bfa" },
    ],
    testimony:
      "Creíamos que modernizar nuestro sistema COBOL tomaría años. Con el modelo de ahorros compartidos, el proyecto se financió solo con los ahorros que generó.",
    author: "Director IT, Aseguradora Nacional",
    image: img("/images/keyboard.png"),
  },
];

const templateSteps = [
  { label: "El Desafío (SDLC 1.0)", desc: "Lento Time-to-Market y alta deuda técnica", icon: "🔴" },
  { label: "La Solución APEX (SDLC 2.0)", desc: "Genesis Engine + Vibe Prototyping + SDD", icon: "🟡" },
  { label: "Resultados Cuantitativos", desc: "Métricas de aceleración medibles y auditables", icon: "🟢" },
  { label: "Testimonio Clave", desc: "Valor entregado desde la perspectiva del cliente", icon: "⭐" },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "var(--bg-secondary)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(20,184,166,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="badge mb-4">Casos de Éxito</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--text-primary)",
            }}
          >
            Resultados que{" "}
            <span className="gradient-text">Hablan por Sí Solos</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Métricas reales de aceleración en proyectos reales bajo el marco APEX.
          </p>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-8 mb-20">
          {cases.map((c, idx) => (
            <div key={idx} className="glass-card overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image side */}
                <div className="lg:col-span-2 relative min-h-[250px]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover object-center"
                    style={{ filter: "brightness(0.35) contrast(1.1)" }}
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(7,13,26,0.9) 0%, transparent 60%)",
                    }}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--accent-teal)" }}
                    >
                      {c.sector}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-3 p-8 flex flex-col gap-6">
                  <h3
                    className="text-xl font-bold leading-snug"
                    style={{ fontFamily: "'Syne', sans-serif", color: "var(--text-primary)" }}
                  >
                    {c.title}
                  </h3>

                  {/* Challenge + Solution */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "#ef4444" }}
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
                        La Solución APEX
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
                          background: `${r.color}0A`,
                          border: `1px solid ${r.color}20`,
                        }}
                      >
                        <div
                          className="text-2xl font-black mb-1"
                          style={{
                            fontFamily: "'Syne', sans-serif",
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
                      background: "rgba(20, 184, 166, 0.04)",
                      border: "1px solid rgba(20, 184, 166, 0.1)",
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
          style={{ borderColor: "rgba(20, 184, 166, 0.2)" }}
        >
          <div className="text-center mb-8">
            <div className="badge mb-3 mx-auto">Plantilla APEX</div>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "'Syne', sans-serif", color: "var(--text-primary)" }}
            >
              Estructura de Todo Caso de Éxito
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {templateSteps.map((s, idx) => (
              <div key={s.label} className="flex flex-col gap-2 text-center">
                <div className="text-3xl">{s.icon}</div>
                <div
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--accent-teal)" }}
                >
                  Paso {idx + 1}
                </div>
                <div
                  className="font-bold text-sm"
                  style={{ fontFamily: "'Syne', sans-serif", color: "var(--text-primary)" }}
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
