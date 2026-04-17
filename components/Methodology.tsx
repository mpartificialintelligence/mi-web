const apexPhases = [
  {
    code: "A",
    name: "Assess & Discovery",
    duration: "1 Semana Máx.",
    process:
      "Descubrimiento IA-First (NLP): Agentes analizan requisitos y generan el blueprint técnico, identificando contradicciones lógicas.",
    outcome: "Reducción de riesgos iniciales y minimización de retrabajo.",
    color: "#0d9488",
  },
  {
    code: "P",
    name: "Pilot & Vibe Prototyping",
    duration: "2 Sprints de 48H",
    process:
      "Generación de prototipos funcionales (código real) para validar rápidamente UX y lógica de negocio fundamental.",
    outcome: "Validación rápida de hipótesis de mercado.",
    color: "#0891b2",
  },
  {
    code: "E",
    name: "Expand & Parallel Development",
    duration: "Sprints continuos",
    process:
      "Desarrollo Agéntico Paralelo: Orquestación de equipos de agentes (Dev, QA, DevOps) trabajando simultáneamente sobre micro-tareas.",
    outcome: "Aceleración del desarrollo 3× con Integración Continua rápida.",
    color: "#059669",
  },
  {
    code: "X",
    name: "eXcel & Maintenance",
    duration: "Continuo",
    process:
      "Transición a Sentinel Ops (AI-SRE) para gestión de infraestructura autónoma, monitoreo predictivo y remediación.",
    outcome: "Código mantenible y máxima resiliencia operativa.",
    color: "#7c3aed",
  },
];

const guarantees = [
  {
    title: "Propiedad Intelectual (IP)",
    standard: "El cliente mantiene el 100% de la IP del código final.",
    sla: "Auditoría Human-in-the-loop obligatoria antes de cada integración mayor.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    color: "#0d9488",
  },
  {
    title: "Calidad de Código",
    standard: "Uso del Spec-Driven Development (SDD) para vincular código a la especificación técnica original.",
    sla: "Groundedness Score > 0.9: El código es fiel a los requisitos documentados.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    color: "#0891b2",
  },
  {
    title: "Resiliencia Operativa",
    standard: "Failover Multi-proveedor (OpenAI + Anthropic) para evitar caídas de la API.",
    sla: "Uptime: 99.9% · Latencia p95: <1.5s en interfaces inteligentes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    color: "#059669",
  },
  {
    title: "Transparencia",
    standard: '«Cerebro del Cliente»: repositorio de conocimiento contextual centraliza decisiones arquitectónicas.',
    sla: "Tasa de Alucinación: <5% en entregas documentales.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    color: "#7c3aed",
  },
];

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(13,148,136,0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(13,148,136,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="badge mb-4 mx-auto">Metodología</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--text-primary)",
            }}
          >
            Marco{" "}
            <span className="gradient-text">APEX</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Assess · Pilot · Expand · eXcel — Nuestro ciclo de vida de desarrollo agéntico
            (ADLC) diseñado para la máxima velocidad y control de calidad.
          </p>
        </div>

        {/* APEX Phases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 mb-20 relative">
          {/* Connector line */}
          <div
            className="absolute top-16 left-0 right-0 h-px hidden lg:block"
            style={{ background: "linear-gradient(to right, #0d9488, #0891b2, #059669, #7c3aed)", opacity: 0.4 }}
          />

          {apexPhases.map((phase, idx) => (
            <div key={phase.code} className="relative flex flex-col">
              {/* Phase card */}
              <div
                className="glass-card glass-card-hover m-3 p-6 flex flex-col gap-4 h-full cursor-pointer"
                style={{ borderColor: `${phase.color}20` }}
              >
                {/* Letter badge */}
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black mx-auto lg:mx-0 mb-4"
                    style={{
                      background: `${phase.color}10`,
                      border: `2px solid ${phase.color}30`,
                      fontFamily: "var(--font-syne), sans-serif",
                      color: phase.color,
                    }}
                  >
                    {phase.code}
                  </div>

                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: phase.color, textTransform: "uppercase", letterSpacing: "0.1em" }}
                  >
                    {phase.duration}
                  </div>

                  <h3
                    className="text-base font-bold mb-3"
                    style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
                  >
                    {phase.name}
                  </h3>

                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                    {phase.process}
                  </p>

                  <div
                    className="p-3 rounded-lg text-sm"
                    style={{
                      background: `${phase.color}06`,
                      border: `1px solid ${phase.color}15`,
                    }}
                  >
                    <div
                      className="text-xs font-semibold mb-1"
                      style={{ color: phase.color, textTransform: "uppercase", letterSpacing: "0.08em" }}
                    >
                      Resultado
                    </div>
                    <p style={{ color: "var(--text-muted)" }}>{phase.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Arrow between phases */}
              {idx < apexPhases.length - 1 && (
                <div
                  className="hidden lg:flex absolute right-0 top-16 z-20 items-center justify-center w-6 h-6 -translate-y-1/2 translate-x-1/2"
                  style={{ color: "var(--accent-teal)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Governance Guarantees */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3
              className="text-2xl font-bold whitespace-nowrap"
              style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
            >
              Garantías de Gobernanza
            </h3>
            <div
              className="h-px flex-1"
              style={{
                background: "linear-gradient(to right, rgba(13,148,136,0.25), transparent)",
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="glass-card glass-card-hover p-6 flex gap-5 cursor-pointer"
              >
                <div className="flex-shrink-0 mt-0.5" style={{ color: g.color }}>{g.icon}</div>
                <div>
                  <h4
                    className="font-bold mb-2"
                    style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
                  >
                    {g.title}
                  </h4>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>
                    {g.standard}
                  </p>
                  <div
                    className="text-sm font-medium px-3 py-1.5 rounded-lg inline-block"
                    style={{
                      background: `${g.color}08`,
                      color: g.color,
                      border: `1px solid ${g.color}20`,
                    }}
                  >
                    SLA: {g.sla}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
