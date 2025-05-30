"use client";

import { motion } from "@/lib/framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  ShieldAlert,
  Banknote,
  Gavel,
  Link2,
  FileWarning,
  Award,
} from "lucide-react";
import { useAnimatedCounter } from "@/lib/animations";

const progressBar = "bg-[#2563eb]"; // azul corporativo Zerua

const risks = [
  {
    icon: (
      <ShieldAlert
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Fraude corporativo",
    text: "Evite contrapartes con historial de fraudes o empresas fachada creadas para operaciones ilícitas.",
    stat: "37% de las transacciones comerciales fallidas involucran algún tipo de fraude no detectado.",
    barWidth: "20%",
    badge: "37%",
    gradient: "from-blue-100 via-white to-purple-100",
  },
  {
    icon: (
      <Banknote
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Insolvencia oculta",
    text: "Detecte problemas financieros no revelados que podrían comprometer la transacción.",
    stat: "42% de las empresas en dificultades financieras ocultan su verdadera situación durante negociaciones.",
    barWidth: "20%",
    badge: "42%",
    gradient: "from-green-100 via-white to-blue-100",
  },
  {
    icon: (
      <Gavel
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Litigios no declarados",
    text: "Identifique litigios pendientes o amenazas legales que podrían afectar su inversión o acuerdo.",
    stat: "24% de las empresas objeto de transacciones tienen litigios no revelados voluntariamente.",
    barWidth: "40%",
    badge: "24%",
    gradient: "from-yellow-100 via-white to-blue-100",
  },
  {
    icon: (
      <Link2
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Vínculos problemáticos",
    text: "Descubra conexiones con personas o entidades sancionadas o de alto riesgo.",
    stat: "29% de los fraudes implican a terceros relacionados no verificados adecuadamente.",
    barWidth: "40%",
    badge: "29%",
    gradient: "from-cyan-100 via-white to-blue-100",
  },
  {
    icon: (
      <FileWarning
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Incumplimiento regulatorio",
    text: "Verifique el cumplimiento de normas vigentes para evitar sanciones futuras.",
    stat: "51% de las adquisiciones problemáticas revelan incumplimientos regulatorios tras el cierre.",
    barWidth: "60%",
    badge: "51%",
    gradient: "from-orange-100 via-white to-blue-100",
  },
  {
    icon: (
      <Award
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "La mejor inversión",
    text: "Invertir en una Due Diligence es el 100% de las veces más barato que una sola operación fallida en un año.",
    stat: "",
    barWidth: "100%",
    badge: "100%",
    gradient: "from-green-100 via-white to-blue-100",
  },
];

const stats = [
  {
    icon: (
      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="#38A169"
          strokeWidth="2.5"
          fill="#F0FFF4"
        />
        <path
          d="M12 16l4 4 6-6"
          stroke="#38A169"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: 93,
    suffix: "%",
    label: "de fraudes detectados a tiempo por nuestros análisis",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 32 32">
        <path
          d="M8 24V10a2 2 0 012-2h12a2 2 0 012 2v14"
          stroke="#E6B54F"
          strokeWidth="2.5"
          fill="#FFFBEA"
        />
        <path
          d="M16 24v-4"
          stroke="#E6B54F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="13" y="14" width="6" height="4" rx="1" fill="#E6B54F" />
      </svg>
    ),
    value: 150,
    suffix: "M+",
    label: "en transacciones protegidas en el último año",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 32 32">
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="#3182CE"
          strokeWidth="2.5"
          fill="#EBF8FF"
        />
        <path
          d="M12 16l4 4 6-6"
          stroke="#3182CE"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: 1200,
    suffix: "+",
    label: "contrapartes verificadas para nuestros clientes",
  },
];

const dashboardVariants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const riskBarColors = [
  "bg-red-500",
  "bg-yellow-400",
  "bg-orange-400",
  "bg-blue-500",
  "bg-accent",
];

export default function AvoidableRisks() {
  // Para animar los contadores
  const stat1 = useAnimatedCounter(93);
  const stat2 = useAnimatedCounter(150);
  const stat3 = useAnimatedCounter(1200);

  // Estado para animar las barras solo una vez
  const [barsAnimated, setBarsAnimated] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barsAnimated) return;
    function handleScroll() {
      if (!barsRef.current) return;
      const rect = barsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setBarsAnimated(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [barsAnimated]);

  return (
    <section
      id="riesgos-evitables"
      className="py-24 bg-gradient-to-b from-gray-light to-white relative overflow-hidden"
    >
      {/* Partículas decorativas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-pulse" />
      </div>
      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
            ¿Por qué pagar por una due diligence?
          </h2>
          <p className="text-lg md:text-xl text-black font-sans">
            Proteja su patrimonio y reputación con verificaciones exhaustivas
            antes de cada transacción
          </p>
        </motion.div>
        {/* Layout principal: ahora grid de 2 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={barsRef}>
          {risks.map((risk, i) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group relative rounded-3xl p-6 md:p-6 border border-white/30 shadow-xl bg-gradient-to-br ${risk.gradient} backdrop-blur-lg flex flex-col h-full min-h-[180px] md:min-h-[150px] hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#2563eb]/20 transition-all duration-300`}
            >
              <div className="flex flex-col items-center mb-3">
                <div className="mb-1 drop-shadow-lg">{risk.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-primary tracking-tight">
                  {risk.title}
                </h3>
              </div>
              <p className="font-sans mb-2 text-center text-sm text-gray-700">
                {risk.text}
              </p>
              {risk.stat && (
                <span className="text-xs text-gray-500 font-medium font-sans block mb-1 text-center">
                  {risk.stat}
                </span>
              )}
              {/* Barra de riesgo individual y badge animado */}
              <div className="flex flex-col items-center mt-auto min-h-[40px] w-full">
                <motion.span
                  className="text-2xl font-extrabold text-blue-700 mb-1 transition-all duration-300 drop-shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.7 }}
                >
                  {risk.badge}
                </motion.span>
                <div className="flex items-center gap-3 w-full">
                  <span className={`w-3 h-3 rounded-full ${progressBar}`} />
                  <div className="flex-1 h-2 bg-[#e0e7ef] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: barsAnimated ? risk.barWidth : "0%" }}
                      transition={{
                        duration: 1.2,
                        delay: barsAnimated ? 0.3 + i * 0.2 : 0,
                      }}
                      className={`h-2 rounded-full ${progressBar} transition-all`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Estadísticas destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`group relative rounded-3xl p-8 border border-white/30 shadow-xl bg-gradient-to-br from-white via-blue-50 to-blue-100 backdrop-blur-lg flex flex-col items-center h-full hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#2563eb]/20 transition-all duration-300`}
            >
              <div className="mb-2 drop-shadow-lg">{stat.icon}</div>
              <motion.span
                className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-1 transition-all duration-300 drop-shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.7 }}
              >
                {i === 0
                  ? `${stat1}${stat.suffix}`
                  : i === 1
                    ? `$${stat2}${stat.suffix}`
                    : `${stat3}${stat.suffix}`}
              </motion.span>
              <div className="text-center text-gray-600 font-sans text-lg mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA personalizado debajo de las cards */}
        <div className="flex flex-col items-center mt-8">
          <p className="text-xl text-primary font-semibold mb-4 text-center">
            ¿Quieres blindar tus operaciones con la máxima seguridad y
            experiencia?
            <br />
            <span className="text-gray-700 font-normal">
              Habla con nuestros expertos y recibe una asesoría personalizada.
            </span>
          </p>
          <Link
            href="/contacto"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-medium text-base shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]/40 focus:ring-offset-2"
            style={{ minWidth: 220 }}
          >
            Solicitar asesoría
          </Link>
        </div>
      </div>
    </section>
  );
}
