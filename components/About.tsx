import Image from "next/image";
import { img } from "@/lib/basePath";

const values = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z"/>
      </svg>
    ),
    title: "Gobernanza Agéntica",
    desc: "La IA es el motor, el ser humano es el gobernador. La calidad prima sobre la velocidad.",
    color: "#0d9488",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: "Valor Auténtico",
    desc: "Cobramos por el resultado entregado (Outcome-Based), alineando nuestro éxito con el ahorro e ingresos incrementales de nuestros clientes.",
    color: "#0891b2",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Integridad Técnica",
    desc: "Cada línea de código está anclada a una especificación validada, asegurando fidelidad a los requisitos documentados. Groundedness Score > 0.9.",
    color: "#0d9488",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-40"
        style={{
          background: "radial-gradient(ellipse at right top, rgba(13,148,136,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="badge mb-4">Acerca de Nosotros</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 2.5vw, 2.6rem)",
              color: "var(--text-primary)",
            }}
          >
            Empresa de Software con IA en{" "}
            <span className="gradient-text">Medellín, Colombia</span>
          </h2>
          <p
            className="max-w-2xl text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            En Model and Processing Systems, no vendemos horas; entregamos velocidad y valor
            sin precedentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative pb-8 pr-8">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(13, 148, 136, 0.12)",
                height: "460px",
                boxShadow: "0 8px 40px rgba(15,23,42,0.1)",
              }}
            >
              <Image
                src={img("/images/office.png")}
                alt="Modern AI engineering office"
                fill
                className="object-cover"
              />
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(13,148,136,0.08) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating stat */}
            <div
              className="glass-card absolute bottom-0 right-0 p-5"
              style={{ minWidth: "180px" }}
            >
              <div className="metric-value text-3xl">3×</div>
              <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                Aceleración en entrega
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            {/* Vision */}
            <div className="mb-8">
              <h3
                className="text-sm font-semibold mb-2 uppercase tracking-widest"
                style={{ color: "var(--accent-teal)" }}
              >
                Visión
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Ser la entidad de ingeniería de software líder a nivel mundial,
                estableciendo el estándar para la fabricación de productos digitales de
                alta calidad, escalables y seguros mediante la orquestación avanzada de
                agentes de inteligencia artificial.
              </p>
            </div>

            {/* Mission */}
            <div className="mb-8">
              <h3
                className="text-sm font-semibold mb-2 uppercase tracking-widest"
                style={{ color: "var(--accent-cyan)" }}
              >
                Misión
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Acelerar el valor de negocio de nuestros clientes en un{" "}
                <strong style={{ color: "var(--text-primary)" }}>30% a 55%</strong>{" "}
                mediante la implementación de nuestra{" "}
                <strong style={{ color: "var(--text-primary)" }}>Metodología de Desarrollo de Alta Velocidad</strong>,
                garantizando que la productividad se traduzca en una ventaja competitiva.
              </p>
            </div>

            {/* About text */}
            <div
              className="p-6 rounded-xl mb-8"
              style={{
                background: "rgba(13, 148, 136, 0.04)",
                border: "1px solid rgba(13, 148, 136, 0.1)",
              }}
            >
              <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>
                Mientras que las agencias tradicionales luchan por justificar horas
                facturables, nosotros utilizamos equipos de agentes autónomos, orquestados
                bajo{" "}
                <strong style={{ color: "var(--text-primary)" }}>nuestra metodología propietaria de entrega</strong>,
                para acelerar los productos digitales hasta{" "}
                <strong style={{ color: "var(--text-primary)" }}>3 veces</strong>.
                Reducimos el Time-to-Market de 12 meses a solo{" "}
                <strong style={{ color: "var(--accent-teal)" }}>4 meses</strong>.
              </p>
              <p
                className="leading-relaxed text-sm mt-3"
                style={{ color: "var(--text-muted)" }}
              >
                Nuestra filosofía es clara:{" "}
                <strong style={{ color: "var(--text-primary)" }}>IA como el motor, Humano como el Gobernador</strong>.
                Nuestros ingenieros senior se enfocan en arquitectura, estrategia y seguridad,
                mientras que nuestros agentes gestionan el{" "}
                <strong style={{ color: "var(--accent-teal)" }}>90% del código</strong>{" "}
                repetitivo, las pruebas y la refactorización.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="glass-card glass-card-hover p-4 flex gap-4 items-start cursor-pointer"
                >
                  <span style={{ color: v.color, flexShrink: 0, marginTop: "2px" }}>{v.icon}</span>
                  <div>
                    <div
                      className="font-semibold mb-1"
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {v.title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {v.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
