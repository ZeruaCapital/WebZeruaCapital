"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Brain,
  Users,
  Clock,
  Globe,
  BarChart,
  Star,
  Shield,
  Zap,
  Award,
  Gem,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";
import { elegantGradients } from "@/lib/constants";

const Navigation = dynamic(() => import("@/components/Navigation"));
const Footer = dynamic(() => import("@/components/Footer"));

// Cards de Nosotros
const nosotrosCards = [
  {
    title: "Talento Excepcional",
    icon: <Users size={24} className="text-blue-500" />,
    description:
      "Combinamos juventud e innovación con experiencia sólida del más alto nivel. Nuestro equipo reúne expertos en finanzas tradicionales y disruptivas.",
    gradient: elegantGradients[0],
  },
  {
    title: "Legado Financiero",
    icon: <Clock size={24} className="text-blue-500" />,
    description:
      "Más de 15 años construyendo relaciones de confianza y generando resultados extraordinarios para patrimonios internacionales.",
    gradient: elegantGradients[1],
  },
  {
    title: "Visión Global",
    icon: <Globe size={24} className="text-blue-500" />,
    description:
      "Conexiones estratégicas en los principales centros financieros del mundo. Perspectiva internacional con implementación local personalizada.",
    gradient: elegantGradients[2],
  },
  {
    title: "Innovación Constante",
    icon: <Sparkles size={24} className="text-blue-500" />,
    description:
      "A la vanguardia de las soluciones financieras avanzadas. Desarrollamos continuamente nuevos servicios adaptados al panorama financiero global.",
    gradient: elegantGradients[3],
  },
  {
    title: "Excelencia Técnica",
    icon: <Award size={24} className="text-blue-500" />,
    description:
      "Precisión y rigor en cada análisis, recomendación e implementación. Nuestro enfoque metódico garantiza la protección integral de su patrimonio.",
    gradient: elegantGradients[4],
  },
  {
    title: "Discreción Absoluta",
    icon: <Shield size={24} className="text-blue-500" />,
    description:
      "Confidencialidad y privacidad en cada operación. Protegemos su información y activos con los más altos estándares de seguridad.",
    gradient: elegantGradients[5],
  },
  {
    title: "Fintech Avanzado",
    icon: <Cpu size={24} className="text-blue-500" />,
    description: "Innovación tecnológica aplicada a soluciones financieras complejas. Soluciones financieras de vanguardia para un mundo digital.",
    gradient: elegantGradients[6],
  },
  {
    title: "Blockchain & IA",
    icon: <Brain size={24} className="text-blue-500" />,
    description: "Automatización inteligente y seguridad descentralizada. Tecnología disruptiva aplicada a la gestión patrimonial.",
    gradient: elegantGradients[7],
  },
  {
    title: "Estrategia Global",
    icon: <Users size={24} className="text-blue-500" />,
    description: "Perspectiva internacional con ejecución local personalizada. Visión internacional, resultados medibles.",
    gradient: elegantGradients[8],
  },
];

// Componente de Servicios a punto de llegar
function NuevosServicios() {
  const [active, setActive] = useState(1);

  // Lista de servicios con títulos más cortos para encajar mejor
  const servicios = [
    {
      title: "Protección Activos Digitales",
      icon: <Star className="text-blue-500" size={18} />,
    },
    {
      title: "Concierge 24/7",
      icon: <Star className="text-blue-500" size={18} />,
    },
    {
      title: "Vuelos Privados",
      icon: <Star className="text-blue-500" size={18} />,
    },
    {
      title: "Ciberseguridad",
      icon: <Star className="text-blue-500" size={18} />,
    },
    {
      title: "Residencia Fiscal",
      icon: <Star className="text-blue-500" size={18} />,
    },
    {
      title: "Eventos VIP",
      icon: <Star className="text-blue-500" size={18} />,
    },
  ];

  // Animación automática entre servicios
  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % servicios.length),
      3000,
    );
    return () => clearInterval(interval);
  }, [servicios.length]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="relative"
        style={{
          perspective: "1200px",
        }}
      >
        {/* Dashboard principal con efecto 3D */}
        <div
          className="animate-float3d-soft w-full"
          style={{
            transformStyle: "preserve-3d",
            background: "linear-gradient(135deg, #fff 60%, #eaf1fa 100%)",
            boxShadow:
              "0 8px 24px 0 rgba(41,121,255,0.10), 0 1px 4px 0 #1a3a5f11",
            borderRadius: "18px",
            position: "relative",
            zIndex: 2,
            margin: "0 auto",
            padding: "10px 10px 8px 10px",
            border: "1.5px solid #e3eaf5",
            transform: "rotateY(-12deg) rotateX(8deg) scale(1.04)",
            height: "220px",
          }}
        >
          {/* Título del dashboard */}
          <div className="text-base font-bold text-[#1a3a5f] mb-1 text-center">
            Servicios a punto de llegar
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-3 w-full pt-0 pb-1">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className={`
                  relative flex flex-col items-center justify-center cursor-pointer
                  ${active === index ? "scale-105" : ""}
                `}
                onClick={() => setActive(index)}
                style={{
                  height: "60px",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Icono - más grande y destacado para el activo */}
                <div
                  className={`
                  rounded-full flex items-center justify-center mb-0
                  ${
                    active === index
                      ? "bg-blue-100 ring-2 ring-blue-200 w-8 h-8"
                      : "w-6 h-6"
                  }
                  transition-all duration-300
                `}
                >
                  {React.cloneElement(servicio.icon, { size: 21 })}
                </div>

                {/* Título */}
                <p className="text-xs font-bold text-center mt-1 text-[#1a3a5f] px-1 whitespace-normal">
                  {servicio.title}
                </p>
              </div>
            ))}
          </div>

          {/* Panel de información en la parte inferior */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-start w-[90%]">
            <span className="text-blue-500 font-bold text-xs mr-1">
              {servicios[active].title}:
            </span>
            <div className="flex-1 overflow-hidden text-normal text-[10px] text-blue-700 leading-tight" style={{ minHeight: 32, maxHeight: 38 }}>
              {active === 0 &&
                "Protección integral de sus activos digitales con los más avanzados sistemas de seguridad criptográfica."}
              {active === 1 &&
                "Servicio exclusivo de asistencia personal disponible en cualquier momento, en cualquier lugar del mundo."}
              {active === 2 &&
                "Reservas inmediatas y traslados privados premium con la más alta confidencialidad y comodidad."}
              {active === 3 &&
                "Protección avanzada contra ciberataques con equipo dedicado 24/7 para clientes de alto patrimonio."}
              {active === 4 &&
                "Asesoramiento estratégico para optimizar su situación fiscal a nivel internacional según normativa vigente."}
              {active === 5 &&
                "Acceso exclusivo a clubes privados y eventos de networking de alto nivel para ampliar su red de contactos."}
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes float3d {
          0% {
            transform: rotateY(-12deg) rotateX(8deg) translateY(0);
          }
          50% {
            transform: rotateY(-10deg) rotateX(7deg) translateY(-5px);
          }
          100% {
            transform: rotateY(-12deg) rotateX(8deg) translateY(0);
          }
        }

        .animate-float3d-soft {
          animation: float3d 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Métricas animadas
function MetricCounter({
  icon,
  value,
  suffix,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200;
    const step = () => {
      start += end / (duration / 16);
      if (
        (suffix === "B" && start >= end) ||
        (suffix !== "B" && Math.round(start) >= end)
      ) {
        setCount(end);
        return;
      }
      setCount(
        suffix === "B" ? Math.round(start * 10) / 10 : Math.round(start),
      );
      requestAnimationFrame(step);
    };
    step();
  }, [value, suffix]);
  return (
    <div className="flex flex-col items-center">
      <div className="mb-1">{icon}</div>
      <div className="text-3xl md:text-5xl font-extrabold text-[#1e293b]">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-[#64748b] font-light text-center mt-1">
        {label}
      </div>
    </div>
  );
}

// Animación de fondo del hero que se repite cada 8s
function HeroAnimatedBG() {
  const [cycle, setCycle] = useState(0);
  // Repetir animación cada 8s
  useEffect(() => {
    const interval = setInterval(() => setCycle((c) => c + 1), 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    <svg
      key={cycle}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 1440 400"
      fill="none"
    >
      <motion.path
        d="M0 200 Q360 100 720 200 T1440 200"
        stroke="#2563eb22"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="720"
        cy="200"
        r="120"
        fill="none"
        stroke="#2563eb11"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </svg>
  );
}

function useCascadaAnim(numCards: number) {
  const [active, setActive] = useState(0);
  const [done, setDone] = useState(false);
  const [delayEntre, setDelayEntre] = useState(3); // Added delayEntre state
  useEffect(() => {
    if (done) return;
    let timeout: NodeJS.Timeout;
    function next(idx: number) {
      if (idx < numCards - 1) {
        setActive(idx + 1);
        timeout = setTimeout(() => next(idx + 1), delayEntre * 1000);
      } else {
        setTimeout(() => setDone(true), delayEntre * 1000);
      }
    }
    timeout = setTimeout(() => next(0), delayEntre * 1000);
    return () => clearTimeout(timeout);
  }, [numCards, done, delayEntre]);
  return { active, done };
}

export default function Nosotros() {
  return (
    <main className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-20 md:pt-28 pb-2">
        <div className="container-custom mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1e293b] mb-4">
              Líderes en Fintech Estratégico Global
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Innovación sin límites, impacto sin fronteras
            </p>
            <p className="text-base text-gray-600">
              En Zerua Capital, fusionamos expertise financiero tradicional con tecnología disruptiva. Nuestro enfoque integral transforma desafíos regulatorios en ventajas competitivas, protegiendo y optimizando el patrimonio de nuestros clientes a escala global.
            </p>
          </div>

          {/* Card de Servicios a punto de llegar */}
          <div className="mt-12">
            <NuevosServicios />
          </div>
        </div>
      </section>

      {/* Quiénes Somos - Cards 3x2 */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
              Quiénes Somos
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Combinamos talento, experiencia e innovación para ofrecer
              soluciones financieras de élite que protegen y potencian su
              patrimonio a nivel global.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {nosotrosCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl shadow p-6 bg-gradient-to-br ${card.gradient} overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/30 -mt-8 -mr-8"></div>
                <div className="flex flex-col items-start">
                  <div className="flex justify-center mb-4">
                    {React.cloneElement(card.icon, { size: 24 })}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a3a5f] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas de Impacto */}
      <section className="py-16 bg-gradient-to-b from-white to-[#f3f6fa]">
        <div className="container-custom mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-12 mb-8">
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-4xl font-bold text-[#1e293b]">15+</div>
              <div className="text-sm text-gray-600 mt-1">
                Años de experiencia
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-4xl font-bold text-[#1e293b]">25+</div>
              <div className="text-sm text-gray-600 mt-1">Países atendidos</div>
            </div>
            <div className="flex flex-col items-center">
              <BarChart className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-4xl font-bold text-[#1e293b]">1.2B</div>
              <div className="text-sm text-gray-600 mt-1">
                USD salvaguardados
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-6 h-6 text-blue-500 mb-2" />
              <div className="text-4xl font-bold text-[#1e293b]">100+</div>
              <div className="text-sm text-gray-600 mt-1">
                Clientes y familias
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 my-12"></div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-b from-white to-[#f3f6fa]">
        <div className="container-custom mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-3">
            ¿Listo para transformar tu estrategia financiera?
          </h2>
          <p className="text-base text-gray-600 mb-8">
            Descubre cómo podemos proteger y potenciar tu patrimonio
          </p>
          <a
            href="/contacto"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-colors"
          >
            Agendar Consulta Estratégica
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
