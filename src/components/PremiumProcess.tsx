"use client";

import { motion, useScroll, useTransform } from "@/lib/framer-motion";
import { useRef } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 16v16M16 24h16"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Evaluación Inicial",
    description:
      "Análisis exhaustivo de la transacción, las partes involucradas y la documentación para garantizar el cumplimiento normativo.",
    visual: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 96 96">
        <rect
          x="8"
          y="8"
          width="80"
          height="80"
          rx="4"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M32 32h32M32 48h24M32 64h16"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="4"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M16 16h16M16 24h16M16 32h12"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Recopilación de Datos",
    description:
      "Obtención estructurada de información clave de todas las partes involucradas a través de canales seguros y verificables.",
    visual: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 96 96">
        <path
          d="M24 24h48v48H24z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M32 32h32M32 40h32M32 48h24"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
        <path
          d="M8 40L20 28L32 36L40 24"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="28" r="2" fill="#1A2E4C" />
        <circle cx="32" cy="36" r="2" fill="#1A2E4C" />
        <circle cx="40" cy="24" r="2" fill="#1A2E4C" />
      </svg>
    ),
    title: "Análisis Profundo",
    description:
      "Verificación exhaustiva de todos los datos utilizando tecnología avanzada y métodos de investigación especializados.",
    visual: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 96 96">
        <path
          d="M16 64L32 48L48 56L64 40L80 48"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="32" cy="48" r="4" fill="#1A2E4C" />
        <circle cx="48" cy="56" r="4" fill="#1A2E4C" />
        <circle cx="64" cy="40" r="4" fill="#1A2E4C" />
        <circle cx="80" cy="48" r="4" fill="#1A2E4C" />
      </svg>
    ),
  },
  {
    number: "04",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="16"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M16 24h16M24 16v16"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Verificación Cruzada",
    description:
      "Contraste de información con múltiples fuentes confiables para detectar inconsistencias o señales de alerta.",
    visual: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 96 96">
        <circle
          cx="48"
          cy="48"
          r="32"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M32 48h32M48 32v32"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="4"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M16 16h16M16 24h16M16 32h12"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Informe y Recomendaciones",
    description:
      "Presentación de resultados detallados con análisis de riesgos y recomendaciones prácticas para mitigarlos.",
    visual: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 96 96">
        <rect
          x="16"
          y="16"
          width="64"
          height="64"
          rx="4"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M32 32h32M32 40h32M32 48h24"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "06",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="16"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 24l4 4 8-8"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Implementación y Seguimiento",
    description:
      "Ejecución de las medidas acordadas con monitoreo continuo para garantizar el cumplimiento y la seguridad.",
    visual: (
      <svg className="w-24 h-24" fill="none" viewBox="0 0 96 96">
        <circle
          cx="48"
          cy="48"
          r="32"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M40 48l4 4 8-8"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const testimonial = {
  quote:
    "Zerua Capital ha transformado nuestra forma de realizar transacciones internacionales. Su proceso meticuloso nos da la confianza que necesitamos.",
  author: "María González",
  position: "Directora de Operaciones Internacionales",
  company: "Global Trade Solutions",
};

export default function PremiumProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="proceso-premium"
      className="py-24 bg-white relative overflow-hidden"
      ref={containerRef}
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 z-0"></div>

      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Nuestro Proceso Premium
          </h2>
          <p className="text-xl text-gray-medium font-sans">
            Un enfoque meticuloso para garantizar transacciones seguras y
            transparentes
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea de progreso */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden lg:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-accent origin-top"
              style={{ scaleY: lineProgress }}
            />
          </div>

          {/* Pasos */}
          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  i % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Número y contenido */}
                <div className="flex-1 lg:text-right">
                  <div className="inline-block">
                    <span className="text-6xl font-heading font-bold text-accent/20 mb-4 block">
                      {step.number}
                    </span>
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-medium font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 rounded-2xl p-8 shadow-sm"
                  >
                    {step.visual}
                  </motion.div>
                </div>

                {/* Punto en la línea */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-primary/5 rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-accent mx-auto mb-6"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M16 16h16v16H16z"
                stroke="#E6B54F"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M20 20h8v8h-8z"
                stroke="#E6B54F"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <blockquote className="text-xl md:text-2xl font-heading font-medium text-primary mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-gray-medium">
              <p className="font-semibold">{testimonial.author}</p>
              <p>
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/contacto"
            className="btn-primary bg-accent text-primary text-lg px-10 py-4 font-heading font-bold shadow-lg hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            Iniciar Due Diligence
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
