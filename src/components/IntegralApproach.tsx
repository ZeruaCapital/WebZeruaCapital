"use client";

import { motion } from "@/lib/framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Due Diligence Comercial",
    icon: (
      <motion.svg
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-14 h-14 text-primary mx-auto mb-4"
        fill="none"
        viewBox="0 0 56 56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="28"
          cy="28"
          r="26"
          stroke="#1A2E4C"
          strokeWidth="3"
          fill="#F5F7FA"
        />
        <path
          d="M24 32l4 4 8-8"
          stroke="#E6B54F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 24a8 8 0 1116 0 8 8 0 01-16 0z"
          stroke="#1A2E4C"
          strokeWidth="2.5"
        />
        <path
          d="M36 36l6 6"
          stroke="#3B5998"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </motion.svg>
    ),
    description:
      "Conozca realmente a sus contrapartes comerciales antes de cerrar acuerdos o compartir información sensible.",
    features: [
      "Verificación exhaustiva de identidad",
      "Análisis de reputación y antecedentes",
      "Evaluación de capacidad financiera",
      "Detección de señales de alerta",
    ],
    cta: "Explorar Due Diligence →",
    href: "/servicios/due-diligence",
  },
  {
    title: "Servicios de Escrow Premium",
    icon: (
      <motion.svg
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-14 h-14 text-primary mx-auto mb-4"
        fill="none"
        viewBox="0 0 56 56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="18"
          width="36"
          height="24"
          rx="6"
          fill="#F5F7FA"
          stroke="#1A2E4C"
          strokeWidth="3"
        />
        <circle
          cx="28"
          cy="30"
          r="6"
          fill="#E6B54F"
          stroke="#3B5998"
          strokeWidth="2.5"
        />
        <rect
          x="18"
          y="10"
          width="20"
          height="8"
          rx="4"
          fill="#3B5998"
          stroke="#1A2E4C"
          strokeWidth="2"
        />
      </motion.svg>
    ),
    description:
      "Asegure sus transacciones con nuestro servicio de custodia de fondos hasta que se cumplan todas las condiciones acordadas.",
    features: [
      "Cuentas segregadas y seguras",
      "Liberación condicional de fondos",
      "Estructura legal internacional",
      "Múltiples divisas disponibles",
    ],
    cta: "Conocer Escrow →",
    href: "/servicios/escrow",
  },
  {
    title: "Paymastering Profesional",
    icon: (
      <motion.svg
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-14 h-14 text-primary mx-auto mb-4"
        fill="none"
        viewBox="0 0 56 56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="18"
          width="36"
          height="20"
          rx="6"
          fill="#F5F7FA"
          stroke="#1A2E4C"
          strokeWidth="3"
        />
        <path
          d="M18 28h20M18 34h12"
          stroke="#3B5998"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M36 38l4 4 8-8"
          stroke="#E6B54F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    ),
    description:
      "Gestione pagos complejos de manera segura y eficiente a múltiples beneficiarios en transacciones internacionales.",
    features: [
      "Distribución precisa de fondos",
      "Cumplimiento regulatorio global",
      "Documentación legal completa",
      "Trazabilidad total de pagos",
    ],
    cta: "Ver Paymastering →",
    href: "/servicios/paymastering",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, type: "spring" },
  }),
};

export default function IntegralApproach() {
  return (
    <section
      id="enfoque-integral"
      className="relative py-24 bg-gradient-to-b from-white to-gray-light overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-secondary/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Una solución integral para transacciones seguras
          </h2>
          <p className="text-lg md:text-xl text-gray-medium font-sans">
            Combinamos tecnología avanzada y expertise financiero para proteger
            su patrimonio
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-light hover:-translate-y-2 cursor-pointer"
            >
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-medium mb-4 font-sans">
                {service.description}
              </p>
              <ul className="text-left mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-primary font-sans"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-accent inline-block" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center text-accent font-medium font-sans group-hover:underline transition-colors"
              >
                {service.cta}
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA General */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <Link
            href="/servicios"
            className="btn-primary text-lg px-8 py-4 font-heading font-bold shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Descubrir todos nuestros servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
