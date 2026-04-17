const models = [
  {
    name: "Outcome-Based",
    subtitle: "Basado en Resultados",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    color: "#0d9488",
    idealFor: "Startups y proyectos acotados",
    description:
      "El precio se fija por la unidad de resultado entregada (ej. «Módulo de pagos funcional» o «Ticket de soporte resuelto»).",
    benefit:
      "Elimina el riesgo para el cliente, ya que solo paga por el valor entregado.",
    examples: [
      "Módulo de pagos funcional",
      "Suite de pruebas verificada",
      "Release auditado",
      "Resolución exitosa de soporte",
    ],
    highlight: false,
  },
  {
    name: "Value-Based",
    subtitle: "Ahorros Compartidos",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/>
      </svg>
    ),
    color: "#0891b2",
    idealFor: "Empresas medianas y grandes",
    description:
      "Aplicado a modernización y optimización. La tarifa se basa en un porcentaje (15–30%) de los ahorros operativos o ingresos incrementales reales que generamos.",
    benefit:
      "Alineación total de incentivos: ganamos cuando usted gana.",
    examples: [
      "15–30% de ahorros operativos",
      "Modernización de sistemas legados",
      "Optimización de infraestructura",
      "Eliminación de deuda técnica",
    ],
    highlight: true,
  },
  {
    name: "Híbrido SaaS+Usage",
    subtitle: "Tarifa Base + Variable",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    color: "#059669",
    idealFor: "Empresas con productos en escala",
    description:
      "Tarifa fija mensual por el acceso al equipo especializado («AI-Augmented Squads») más una tarifa variable basada en el consumo real de recursos de IA (tokens, llamadas a API).",
    benefit: "Predictibilidad con flexibilidad de escala.",
    examples: [
      "Tarifa Base (Infraestructura)",
      "+ Σ (Entregable × Valor Unitario)",
      "AI-Augmented Squads",
      "Consumo real de tokens/API",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Soft orb */}
      <div
        className="orb absolute w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{ background: "radial-gradient(circle, rgba(13,148,136,0.12), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="badge mb-4">Precios & Valor</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 2.5vw, 2.6rem)",
              color: "var(--text-primary)",
            }}
          >
            <span className="gradient-text">Precios por Resultados</span>, no por Horas
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Tres modelos de precios diseñados para alinear nuestro éxito con el suyo.
            Sin sorpresas, sin horas facturables vacías.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {models.map((m) => (
            <div
              key={m.name}
              className="glass-card glass-card-hover p-7 flex flex-col gap-5 relative cursor-pointer"
              style={
                m.highlight
                  ? {
                      borderColor: `${m.color}35`,
                      boxShadow: `0 8px 40px ${m.color}15, 0 2px 8px rgba(15,23,42,0.08)`,
                    }
                  : {}
              }
            >
              {m.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${m.color}, #0d9488)`,
                    color: "#ffffff",
                    whiteSpace: "nowrap",
                    boxShadow: `0 4px 16px ${m.color}30`,
                  }}
                >
                  Más popular
                </div>
              )}

              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <span
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${m.color}10`, color: m.color }}
                >
                  {m.icon}
                </span>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
                  >
                    {m.name}
                  </h3>
                  <div className="text-sm" style={{ color: m.color }}>
                    {m.subtitle}
                  </div>
                </div>
              </div>

              {/* Ideal for */}
              <div
                className="text-xs px-3 py-1.5 rounded-full self-start"
                style={{
                  background: `${m.color}08`,
                  border: `1px solid ${m.color}20`,
                  color: "var(--text-muted)",
                }}
              >
                <span style={{ color: m.color, fontWeight: 600 }}>Ideal para: </span>
                {m.idealFor}
              </div>

              <div style={{ borderTop: "1px solid rgba(13,148,136,0.08)" }} />

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {m.description}
              </p>

              {/* Benefit callout */}
              <div
                className="p-3 rounded-xl text-sm"
                style={{
                  background: `${m.color}07`,
                  border: `1px solid ${m.color}18`,
                }}
              >
                <span style={{ color: m.color, fontWeight: 600 }}>✓ </span>
                <span style={{ color: "var(--text-primary)" }}>{m.benefit}</span>
              </div>

              {/* Examples */}
              <div className="flex flex-col gap-2 flex-1">
                {m.examples.map((ex) => (
                  <div key={ex} className="flex items-center gap-2 text-sm">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: m.color }}
                    />
                    <span style={{ color: "var(--text-muted)" }}>{ex}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="btn-outline justify-center text-sm py-2.5"
                style={{
                  color: m.color,
                  borderColor: `${m.color}35`,
                }}
              >
                Empezar con este modelo →
              </a>
            </div>
          ))}
        </div>

        {/* Formula display */}
        <div
          className="glass-card p-8 text-center"
          style={{ borderColor: "rgba(13, 148, 136, 0.18)" }}
        >
          <div
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--accent-teal)" }}
          >
            Fórmula Híbrida
          </div>
          <div
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              color: "var(--text-primary)",
            }}
          >
            Pago Total ={" "}
            <span className="gradient-text">Tarifa Base</span>{" "}
            +{" "}
            <span style={{ color: "var(--accent-cyan)" }}>
              Σ (Entregable × Valor Unitario)
            </span>
          </div>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            Infraestructura predecible + valor variable basado en resultados reales entregados.
          </p>
        </div>
      </div>
    </section>
  );
}
