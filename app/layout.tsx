import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Model and Processing Systems for Artificial Intelligence",
  description:
    "Ingeniería de Software Aumentada por IA. Transformamos intenciones de negocio en sistemas funcionales en 1/3 del tiempo.",
  icons: {
    icon: process.env.NODE_ENV === "production" ? "/mi-web/logo.png" : "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
