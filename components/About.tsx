import Image from "next/image";
import { img } from "@/lib/basePath";

const values = [
  {
    icon: "⚙️",
    title: "Gobernanza Agéntica",
    desc: "La IA es el motor, el ser humano es el gobernador. La calidad prima sobre la velocidad.",
  },
  {
    icon: "🎯",
    title: "Valor Auténtico",
    desc: "Cobramos por el resultado entregado (Outcome-Based), alineando nuestro éxito con el ahorro e ingresos incrementales de nuestros clientes.",
  },
  {
    icon: "🔒",
    title: "Integridad Técnica",
    desc: "Cada línea de código está anclada a una especificación validada, asegurando fidelidad a los requisitos documentados. Groundedness Score > 0.9.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: "radial-gradient(ellipse at right top, #14b8a6, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="badge mb-4">Acerca de Nosotros</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--text-primary)",
            }}
          >
            El ADN de la{" "}
            <span className="gradient-text">Ingeniería Agéntica</span>
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
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(20, 184, 166, 0.15)" }}
            >
              <Image
                src={img("/images/office.png")}
                alt="Modern AI engineering office"
                width={700}
                height={480}
                className="w-full object-cover"
                style={{ filter: "brightness(0.85) contrast(1.05)" }}
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(7,13,26,0.3) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating stat */}
            <div
              className="glass-card absolute -bottom-6 -right-6 p-5"
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
                mediante la implementación de nuestro marco{" "}
                <strong style={{ color: "var(--text-primary)" }}>APEX</strong>{" "}
                (Assess-Pilot-Expand-eXcel), garantizando que la productividad se traduzca
                en una ventaja competitiva.
              </p>
            </div>

            {/* About text */}
            <div
              className="p-6 rounded-xl mb-8"
              style={{
                background: "rgba(20, 184, 166, 0.04)",
                border: "1px solid rgba(20, 184, 166, 0.1)",
              }}
            >
              <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>
                Mientras que las agencias tradicionales luchan por justificar horas
                facturables, nosotros utilizamos equipos de agentes autónomos, orquestados
                bajo nuestro marco APEX, para acelerar la entrega de productos digitales
                hasta <strong style={{ color: "var(--text-primary)" }}>3 veces</strong>.
                Reducimos el Time-to-Market de 12 meses a solo{" "}
                <strong style={{ color: "var(--accent-teal)" }}>4 meses</strong>.
              </p>
              <p
                className="leading-relaxed text-sm mt-3"
                style={{ color: "var(--text-muted)" }}
              >
                Nuestros ingenieros senior se enfocan exclusivamente en la arquitectura, la
                estrategia de negocio y la seguridad, mientras que nuestros agentes
                gestionan el{" "}
                <strong style={{ color: "var(--accent-teal)" }}>90% del código</strong>{" "}
                repetitivo, las pruebas y la refactorización.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-col gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="glass-card glass-card-hover p-4 flex gap-4 items-start"
                >
                  <span className="text-2xl">{v.icon}</span>
                  <div>
                    <div
                      className="font-semibold mb-1"
                      style={{
                        fontFamily: "'Syne', sans-serif",
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
