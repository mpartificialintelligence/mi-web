import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://mpartificialintelligence.com";
const SITE_NAME = "Model and Processing Systems for Artificial Intelligence";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Ingeniería de Software con IA | Desarrollo de MVPs | Medellín, Colombia",
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Empresa de software con IA en Medellín, Colombia. MVPs en 4 meses, modernización de legados y 90% reducción de MTTR. Pagás por resultados, no por horas.",

  keywords: [
    "ingeniería de software con inteligencia artificial",
    "empresa de software IA Colombia",
    "desarrollo de software Medellín",
    "desarrollo de MVPs Colombia",
    "modernización de sistemas legados",
    "software house Colombia",
    "ingeniería de software aumentada",
    "agentes de IA desarrollo de software",
    "reducción time-to-market Colombia",
    "aseguramiento de calidad software",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Ingeniería de Software con IA | Medellín, Colombia",
    description:
      "Desarrollamos MVPs en 4 meses, modernizamos sistemas legados y reducimos MTTR un 90%. Software aumentado por inteligencia artificial — pagás por resultados, no por horas.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Model and Processing Systems for Artificial Intelligence — Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Ingeniería de Software con IA | Medellín, Colombia",
    description:
      "Desarrollamos MVPs en 4 meses y modernizamos sistemas legados con agentes de IA. Empresa de software en Medellín, Colombia.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "MPS AI",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      description:
        "Empresa de ingeniería de software aumentada por inteligencia artificial. Desarrollamos MVPs, modernizamos sistemas legados y garantizamos calidad con agentes de IA.",
      foundingLocation: {
        "@type": "Place",
        name: "Medellín, Antioquia, Colombia",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Medellín",
        addressRegion: "Antioquia",
        addressCountry: "CO",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+57-302-201-9237",
          contactType: "customer service",
          availableLanguage: ["Spanish", "English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+57-315-431-9882",
          contactType: "sales",
          availableLanguage: ["Spanish"],
        },
      ],
      email: "ia-manager@mpartificialintelligence.com",
      areaServed: {
        "@type": "Place",
        name: "Global",
      },
      serviceType: [
        "Desarrollo de Software con IA",
        "Modernización de Sistemas Legados",
        "Desarrollo de MVPs",
        "Aseguramiento de Calidad de Software",
        "AI-SRE y Resiliencia de Sistemas",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Ingeniería de Software con IA",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Genesis Engine — Desarrollo de MVPs",
              description:
                "Entrega de prototipos funcionales en 48 horas y MVPs en 2 a 4 meses mediante ingeniería aumentada por IA.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Shift-Right — Modernización de Sistemas Legados",
              description:
                "Modernización de sistemas COBOL, Java y .NET legacy con 80% de automatización y 87% de precisión en traducción de lógica de negocio.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sentinel Ops — AI-SRE y Resiliencia",
              description:
                "Garantía de uptime 99.9% con reducción del MTTR hasta un 90% mediante agentes de remediación autónoma.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Veritas QA — Aseguramiento de Calidad 2.0",
              description:
                "Cobertura de pruebas superior al 80% con generación agéntica de suites Playwright/Cypress cumpliendo normativas GDPR/HIPAA.",
            },
          },
        ],
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Ingeniería de Software Aumentada por IA — Empresa de software en Medellín, Colombia",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "es-CO",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Ingeniería de Software con IA | Medellín, Colombia",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      description:
        "Empresa de ingeniería de software aumentada por IA en Medellín, Colombia. MVPs en 4 meses, modernización de sistemas legados, 90% reducción de MTTR.",
      inLanguage: "es-CO",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={[
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' data: https://fonts.gstatic.com",
            "img-src 'self' data:",
            "connect-src 'self' ws: wss: https://api.web3forms.com",
            "base-uri 'self'",
            "form-action 'self' mailto:",
          ].join("; ")}
        />
        {/* Referrer policy */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>{children}</body>
    </html>
  );
}
