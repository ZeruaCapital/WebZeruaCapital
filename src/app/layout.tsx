import "./globals.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import CookieBanner from "@/components/CookieBanner";

// const aldo = localFont({
//   src: [
//     { path: "../../public/fonts/aldo/Aldo-Regular.woff2", weight: "400" },
//     { path: "../../public/fonts/aldo/Aldo-Bold.woff2", weight: "700" },
//   ],
//   variable: "--font-aldo",
//   display: "swap",
// });

const aptos = localFont({
  src: [{ path: "../../public/fonts/aptos/Aptos.woff2", weight: "400" }],
  variable: "--font-aptos",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zerua Capital | Servicios Premium para Personas Premium",
  description:
    "Especialistas en Due Diligence Comercial y Servicios de Escrow para HNWI y empresarios latinoamericanos. Sede en Miami con presencia internacional.",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/icons/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1A2E4C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${aptos.variable}`}>
      <head>
        {/* <link rel="preload" href="/fonts/aldo/Aldo-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/aldo/Aldo-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        <link
          rel="preload"
          href="/fonts/aptos/Aptos.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href="https://zerua.capital/" />
        <meta property="og:title" content="Zerua Capital | Servicios Premium para Personas Premium" />
        <meta property="og:description" content="Especialistas en Due Diligence Comercial y Servicios de Escrow para HNWI y empresarios latinoamericanos. Sede en Miami con presencia internacional." />
        <meta property="og:image" content="https://zerua.capital/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zerua.capital/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zerua Capital | Servicios Premium para Personas Premium" />
        <meta name="twitter:description" content="Especialistas en Due Diligence Comercial y Servicios de Escrow para HNWI y empresarios latinoamericanos. Sede en Miami con presencia internacional." />
        <meta name="twitter:image" content="https://zerua.capital/images/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zerua Capital",
              "url": "https://zerua.capital",
              "logo": "https://zerua.capital/images/og-image.jpg"
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
