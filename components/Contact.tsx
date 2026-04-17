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

  const inputStyle = {
    background: "#F8FAFC",
    border: "1.5px solid rgba(13,148,136,0.18)",
    color: "var(--text-primary)",
    borderRadius: "10px",
    width: "100%",
    padding: "12px 16px",
    fontSize: "0.875rem",
    outline: "none",
    transition: "all 0.2s ease",
    fontFamily: "var(--font-dm-sans), sans-serif",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(13,148,136,0.05), transparent 70%)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(13,148,136,0.2), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="badge mb-4 mx-auto">Contáctenos</div>
          <h2
            className="mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
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

        {/* Response time indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse-slow"
            style={{ background: "var(--accent-teal)", boxShadow: "0 0 8px rgba(13,148,136,0.5)" }}
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
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.15)", color: "var(--accent-teal)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: "var(--accent-teal)" }}
                >
                  Ubicación
                </div>
                <p className="font-semibold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-syne), sans-serif" }}>
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
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.15)", color: "var(--accent-teal)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
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
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.15)", color: "var(--accent-teal)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
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
            <div className="glass-card p-8" style={{ borderColor: "rgba(13,148,136,0.15)" }}>
              {sent ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(13,148,136,0.1)", color: "var(--accent-teal)" }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-syne), sans-serif", color: "var(--text-primary)" }}
                  >
                    ¡Mensaje enviado!
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Le contactaremos en menos de 24 horas.
                  </p>
                  <button
                    className="btn-outline mt-6 cursor-pointer"
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
                        htmlFor="contact-name"
                      >
                        Nombre *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Juan García"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent-teal)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(13,148,136,0.18)")}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "var(--accent-teal)" }}
                        htmlFor="contact-company"
                      >
                        Empresa <span style={{ color: "var(--text-muted)", fontWeight: 400, textTransform: "none" }}>(opcional)</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        placeholder="Mi Empresa S.A.S."
                        value={form.company}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent-teal)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(13,148,136,0.18)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--accent-teal)" }}
                      htmlFor="contact-email"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="juan@miempresa.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-teal)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(13,148,136,0.18)")}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--accent-teal)" }}
                      htmlFor="contact-message"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Cuéntenos sobre su proyecto o necesidad..."
                      value={form.message}
                      onChange={handleChange}
                      className="resize-none"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-teal)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(13,148,136,0.18)")}
                    />
                  </div>

                  <button type="submit" className="btn-primary justify-center py-4 text-base cursor-pointer">
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
