"use client";

import { motion } from "@/lib/framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote:
      "El proceso de due diligence de Zerua Capital nos permitió detectar irregularidades que nos habrían costado millones. Su enfoque meticuloso y profesional fue invaluable para nuestra operación.",
    profile: "Empresario, Sector Tecnológico",
    location: "México",
    service: "Due Diligence Comercial",
    avatar: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M32 16v32M16 32h32"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 2,
    quote:
      "Gracias a los servicios de escrow de Zerua Capital, pudimos concretar una transacción internacional compleja con total tranquilidad. Su equipo proporcionó la estructura legal y la seguridad que necesitábamos.",
    profile: "Inversionista Privado",
    location: "Colombia",
    service: "Servicios de Escrow Premium",
    avatar: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 24l16 16M40 24L24 40"
          stroke="#1A2E4C"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 3,
    quote:
      "Como gestores de patrimonio familiar, la confianza y discreción son fundamentales. Zerua Capital ha demostrado excepcional profesionalismo en todas nuestras operaciones internacionales y verificaciones de contrapartes.",
    profile: "Director de Family Office",
    location: "Argentina",
    service: "Due Diligence y Escrow",
    avatar: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 32c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: 4,
    quote:
      "El servicio de paymastering de Zerua Capital simplificó enormemente una estructura de pagos que involucraba a múltiples partes en diferentes países. Su conocimiento regulatorio internacional marcó la diferencia.",
    profile: "CFO, Empresa Multinacional",
    location: "Brasil",
    service: "Paymastering Profesional",
    avatar: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 24h16v16H24z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

const stats = [
  {
    value: "98%",
    label: "Índice de satisfacción de clientes",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    value: "100+",
    label: "Transacciones verificadas anualmente",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    value: "0",
    label: "Reclamaciones en los últimos 5 años",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    value: "$XXX millones",
    label: "En transacciones protegidas",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
        <path
          d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z"
          stroke="#1A2E4C"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonios"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Patrón de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Comillas decorativas */}
      <div className="absolute top-0 left-0 w-64 h-64 text-primary/5 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M40 40h40v40H40zM120 40h40v40h-40zM40 120h40v40H40zM120 120h40v40h-40z" />
        </svg>
      </div>

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
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-medium font-sans">
            Experiencias reales de quienes han confiado en Zerua Capital
          </p>
        </motion.div>

        {/* Carrusel de testimonios */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonios */}
          <div className="relative h-[400px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Avatar y perfil */}
                    <div className="flex-shrink-0 text-center">
                      <div className="text-accent mb-4">
                        {testimonial.avatar}
                      </div>
                      <div className="text-primary font-heading font-semibold">
                        {testimonial.profile}
                      </div>
                      <div className="text-gray-medium text-sm">
                        {testimonial.location}
                      </div>
                      <div className="text-accent text-sm mt-2">
                        {testimonial.service}
                      </div>
                    </div>

                    {/* Cita */}
                    <div className="flex-1">
                      <div className="text-4xl text-accent/20 mb-4">"</div>
                      <blockquote className="text-xl text-gray-medium font-sans mb-6">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-accent"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controles */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-accent" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-accent mb-4 mx-auto">{stat.icon}</div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-accent text-primary font-heading font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            Solicitar referencias verificables
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="text-sm text-gray-medium mt-4">
            Todas las referencias son verificables y mantenemos estricta
            confidencialidad
          </p>
        </motion.div>
      </div>
    </section>
  );
}
