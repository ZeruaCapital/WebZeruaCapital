"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const risks = [
  {
    id: 1,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    title: "Fraude corporativo",
    description:
      "Evite contrapartes con historial de fraudes o empresas fachada creadas para operaciones ilícitas.",
    percentage: 37,
    color: "#e6613e",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Insolvencia oculta",
    description:
      "Detecte problemas financieros no declarados que podrían afectar la viabilidad del negocio.",
    percentage: 28,
    color: "#f59e0b",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Problemas legales",
    description:
      "Identifique litigios pendientes, multas o irregularidades regulatorias no declaradas.",
    percentage: 22,
    color: "#3b82f6",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Retrasos operativos",
    description:
      "Anticipe problemas de cumplimiento o retrasos que afecten la operación del negocio.",
    percentage: 13,
    color: "#10b981",
  },
];

const stats = [
  {
    id: 1,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    value: "93%",
    description: "de fraudes detectados a tiempo por nuestros análisis",
    color: "#22c55e",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    value: "48h",
    description: "tiempo promedio de respuesta en análisis urgentes",
    color: "#3b82f6",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    value: "15+",
    description: "años de experiencia en análisis de riesgos",
    color: "#8b5cf6",
  },
];

export default function RiskCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const carouselRef = useRef(null);
  const animationControls = useAnimation();

  // Función mejorada para manejar la animación de transición
  const handleCardChange = useCallback(
    async (newIndex: number) => {
      if (isChanging) return;
      setIsChanging(true);
      // Animación de salida
      await animationControls.start({
        scale: 0.9,
        opacity: 0.5,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
      // Cambiar el índice
      setActiveIndex(newIndex);
      // Animación de entrada
      await animationControls.start({
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: "easeOut",
          type: "spring",
          stiffness: 120,
          damping: 30,
        },
      });
      setIsChanging(false);
    },
    [isChanging, animationControls],
  );

  // Auto-rotación del carrusel
  useEffect(() => {
    if (!isHovered && !isChanging) {
      const interval = setInterval(() => {
        handleCardChange((activeIndex + 1) % risks.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [activeIndex, isHovered, isChanging, handleCardChange]);

  const handlePrev = () => {
    handleCardChange((activeIndex - 1 + risks.length) % risks.length);
  };

  const handleNext = () => {
    handleCardChange((activeIndex + 1) % risks.length);
  };

  // Variantes de animación para tarjetas
  const cardVariants = {
    active: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      zIndex: 10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 30,
        duration: 0.7,
      },
    },
    prev: {
      scale: 0.6,
      opacity: 0.4,
      rotateY: 15,
      zIndex: 5,
      x: "-100%",
      y: "10%",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 30,
        duration: 0.7,
      },
    },
    next: {
      scale: 0.6,
      opacity: 0.4,
      rotateY: -15,
      zIndex: 5,
      x: "100%",
      y: "10%",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 30,
        duration: 0.7,
      },
    },
    hidden: {
      scale: 0.4,
      opacity: 0,
      zIndex: 0,
      x: 0,
      y: 50,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 30,
        duration: 0.7,
      },
    },
  };

  // Indicador de posición animado
  const indicators = Array.from({ length: risks.length }).map((_, index) => (
    <motion.button
      key={`indicator-${index}`}
      onClick={() => handleCardChange(index)}
      className={`w-2 h-2 rounded-full mx-1 focus:outline-none transition-all duration-300`}
      animate={{
        scale: activeIndex === index ? 1.5 : 1,
        backgroundColor:
          activeIndex === index ? risks[activeIndex].color : "#CBD5E0",
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Ver ${risks[index].title}`}
    />
  ));

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Encabezado con animación mejorada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              type: "spring",
              stiffness: 100,
            }}
          >
            Riesgos que puede evitar con Due Diligence
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Proteja su patrimonio y reputación con verificaciones exhaustivas
            antes de cada transacción
          </motion.p>
        </motion.div>

        {/* Carrusel 3D mejorado */}
        <div
          className="relative h-[380px] perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={carouselRef}
        >
          {/* Flechas de navegación */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Anterior riesgo"
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
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Siguiente riesgo"
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
          </motion.button>

          {/* Contenedor de tarjetas 3D */}
          <div className="relative flex items-center justify-center w-full h-full px-6">
            <div className="preserve-3d relative w-full max-w-4xl mx-auto h-[320px] flex items-center justify-center">
              <AnimatePresence>
                {risks.map((risk, index) => {
                  // Determinamos el estado de la tarjeta
                  let cardState = "hidden";
                  if (index === activeIndex) {
                    cardState = "active";
                  } else if (
                    index ===
                    (activeIndex - 1 + risks.length) % risks.length
                  ) {
                    cardState = "prev";
                  } else if (index === (activeIndex + 1) % risks.length) {
                    cardState = "next";
                  }

                  return (
                    <motion.div
                      key={risk.id}
                      className="absolute bg-white rounded-2xl p-8 border border-primary/10 cursor-pointer overflow-hidden"
                      style={{
                        width: cardState === "active" ? "400px" : "200px",
                        height: cardState === "active" ? "300px" : "180px",
                        transformStyle: "preserve-3d",
                        willChange: "transform, opacity",
                      }}
                      initial="hidden"
                      animate={cardState}
                      variants={cardVariants}
                      onClick={() => {
                        if (cardState !== "active") {
                          handleCardChange(index);
                        }
                      }}
                      whileHover={
                        cardState === "active"
                          ? {
                              scale: 1.03,
                              boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
                            }
                          : {}
                      }
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              className="text-primary"
                              animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, 0, -5, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 4,
                                ease: "easeInOut",
                              }}
                            >
                              {risk.icon}
                            </motion.div>
                            <h3
                              className={`font-bold text-gray-800 ${cardState === "active" ? "text-2xl" : "text-lg"}`}
                            >
                              {risk.title}
                            </h3>
                          </div>
                          <p
                            className={`text-gray-600 ${cardState === "active" ? "" : "text-xs"} mb-4 line-clamp-3`}
                          >
                            {risk.description}
                          </p>
                        </div>
                        <motion.div
                          className="flex items-center justify-between mt-auto"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          <div
                            className={`font-bold ${cardState === "active" ? "text-3xl" : "text-xl"}`}
                            style={{ color: risk.color }}
                          >
                            {risk.percentage}%
                          </div>
                          {cardState === "active" && (
                            <div className="text-sm text-gray-500">
                              de casos detectados
                            </div>
                          )}
                        </motion.div>
                      </div>

                      {/* Efecto de brillo en la esquina para tarjeta activa */}
                      {cardState === "active" && (
                        <motion.div
                          className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full"
                          animate={{
                            opacity: [0, 0.1, 0],
                            scale: [0.8, 1.2, 0.8],
                            rotate: 360,
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Indicadores de posición */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2 py-4">
            {indicators}
          </div>
        </div>

        {/* Estadísticas con animación mejorada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4 border border-gray-100 transition-all duration-300"
            >
              <motion.div
                className="text-primary bg-gray-50 p-3 rounded-full"
                animate={{
                  rotateY: [0, 10, 0, -10, 0],
                  scale: [1, 1.05, 1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                {stat.icon}
              </motion.div>
              <div>
                <motion.div
                  className="text-3xl font-bold"
                  style={{ color: stat.color }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
