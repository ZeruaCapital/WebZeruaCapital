"use client";

import { motion } from "@/lib/framer-motion";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    url: "https://linkedin.com/company/zeruacapital",
  },
  {
    name: "Twitter",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    url: "https://twitter.com/zeruacapital",
  },
];

const quickLinks = [
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "#contacto" },
];

const locations = [
  { name: "Miami", country: "Estados Unidos", flag: "🇺🇸" },
  { name: "Centroamérica", country: "Región", flag: "🌎" },
  { name: "Canadá", country: "Canadá", flag: "🇨🇦" },
  { name: "España", country: "España", flag: "🇪🇸" },
];

const legalLinks = [
  { name: "Política de privacidad", href: "/privacidad" },
  { name: "Términos de servicio", href: "/terminos" },
  { name: "Aviso legal", href: "/aviso-legal" },
  { name: "Política de cookies", href: "/cookies" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-primary pt-2 pb-2">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center min-h-[64px]">
          {/* Columna 1: Información de la empresa */}
          <div className="flex flex-col items-center md:items-start justify-center h-full">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/zerua capital def 2025.webp"
                alt="Zerua Capital"
                width={120}
                height={32}
                priority
              />
            </Link>
          </div>

          {/* Columna 2: Contacto */}
          <div className="flex flex-col items-center md:items-start justify-center h-full">
            <h3 className="text-base font-heading font-semibold mb-1">
              Contáctenos
            </h3>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-[#2563eb] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c-4.418 0-8-5.373-8-10a8 8 0 1116 0c0 4.627-3.582 10-8 10z"
                  />
                </svg>
                <span className="text-gray-600">Miami Beach, FL, 33139</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-[#2563eb] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@zerua.capital"
                  className="text-gray-600 hover:text-accent transition-colors duration-300"
                >
                  info@zerua.capital
                </a>
              </div>
            </div>
          </div>

          {/* Columna 3: Presencia internacional */}
          <div className="flex flex-col items-center md:items-start justify-center h-full">
            <h3 className="text-base font-heading font-semibold mb-1">
              Presencia global
            </h3>
            <ul className="space-y-1 text-xs">
              <li>
                <span className="text-primary font-bold">US</span> Miami (HQ)
              </li>
              <li>
                <span className="text-primary font-bold">CA</span> Centroamérica
              </li>
              <li>
                <span className="text-primary font-bold">Ca</span> Canadá
              </li>
              <li>
                <span className="text-primary font-bold">ES/EU</span> Bilbao
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de copyright y legal */}
        <div className="border-t border-gray-200 mt-2 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-500 text-xs">
              © {currentYear} Zerua Capital. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-[#1A2E4C] text-xs transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sello de los diseñadores en la esquina inferior derecha */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="https://byteforge.pro" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/logos/sello%20byteforge.png"
            alt="Diseño por Byteforge"
            width={80}
            height={80}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-xl shadow-md"
          />
        </a>
      </div>
    </footer>
  );
}
