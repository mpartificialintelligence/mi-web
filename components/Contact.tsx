"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde web — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:ia-manager@mpartificialintelligence.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #14b8a6, transparent 70%)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(20,184,166,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="badge mb-4 mx-auto">Contáctenos</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 2.5vw, 2.6rem)",
              color: "var(--text-primary)",
            }}
          >
            Hablemos de su{" "}
            <span className="gradient-text">Próximo Proyecto</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            ¿Listo para acelerar su negocio? Escríbanos y le respondemos en menos de 24 horas.
          </p>
        </div>

        {/* Response time — visible before the form */}
        <div
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: "var(--accent-teal)", boxShadow: "0 0 8px rgba(20,184,166,0.6)" }}
          />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            Tiempo de respuesta:{" "}
            <strong style={{ color: "var(--text-primary)" }}>menos de 24 horas</strong>
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Location */}
            <div className="glass-card p-6 flex gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.2)" }}
              >
                📍
              </div>
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--accent-teal)" }}
                >
                  Ubicación
                </div>
                <p className="font-semibold" style={{ color: "var(--text-primary)", fontFamily: "'Syne', sans-serif" }}>
                  Medellín, Antioquia
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                  Virtual — Servicio a nivel global
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card p-6 flex gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.2)" }}
              >
                ✉️
              </div>
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--accent-teal)" }}
                >
                  Email
                </div>
                <a
                  href="mailto:ia-manager@mpartificialintelligence.com"
                  className="text-sm break-all transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-teal)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                >
                  ia-manager@mpartificialintelligence.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card p-6 flex gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.2)" }}
              >
                📞
              </div>
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--accent-teal)" }}
                >
                  Teléfono
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+573022019237"
                    className="text-sm font-semibold transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-teal)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                  >
                    302 201 9237
                  </a>
                  <a
                    href="tel:+573154319882"
                    className="text-sm font-semibold transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent-teal)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
                  >
                    315 431 9882
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8" style={{ borderColor: "rgba(20,184,166,0.2)" }}>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Syne', sans-serif", color: "var(--text-primary)" }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Le contactaremos en menos de 24 horas.
                  </p>
                  <button
                    className="btn-outline mt-6"
                    onClick={() => setSent(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "var(--accent-teal)" }}
                      >
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Juan García"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(7,13,26,0.8)",
                          border: "1px solid rgba(20,184,166,0.2)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent-teal)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(20,184,166,0.2)")}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "var(--accent-teal)" }}
                      >
                        Empresa <span style={{ color: "var(--text-muted)", fontWeight: 400, textTransform: "none" }}>(opcional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Mi Empresa S.A.S."
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                        style={{
                          background: "rgba(7,13,26,0.8)",
                          border: "1px solid rgba(20,184,166,0.2)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent-teal)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(20,184,166,0.2)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--accent-teal)" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="juan@miempresa.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(7,13,26,0.8)",
                        border: "1px solid rgba(20,184,166,0.2)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-teal)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(20,184,166,0.2)")}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--accent-teal)" }}
                    >
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Cuéntenos sobre su proyecto o necesidad..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(7,13,26,0.8)",
                        border: "1px solid rgba(20,184,166,0.2)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-teal)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(20,184,166,0.2)")}
                    />
                  </div>

                  <button type="submit" className="btn-primary justify-center py-4 text-base">
                    Enviar Mensaje
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    Sus datos son confidenciales y no se compartirán con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
