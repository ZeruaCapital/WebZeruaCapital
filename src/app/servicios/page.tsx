"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  Shield,
  Lock,
  BarChart,
  FileText,
  Coins,
  Brain,
  CheckCircle,
} from "lucide-react";

const Navigation = dynamic(() => import("@/components/Navigation"));
const Footer = dynamic(() => import("@/components/Footer"));

const elegantGradients = [
  "from-blue-100 via-white to-purple-100",
  "from-cyan-100 via-white to-blue-100",
  "from-green-100 via-white to-blue-100",
  "from-purple-100 via-white to-blue-100",
  "from-blue-100 via-white to-cyan-100",
  "from-blue-100 via-white to-green-100",
];

const blueIconClass =
  "text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300";

const servicios = [
  {
    key: "due-diligence",
    icon: <Shield size={48} className={blueIconClass} />,
    titulo: "Due Diligence Premium",
    descripcion:
      "Análisis integral de contrapartes y operaciones. Paquetes escalables para cada necesidad.",
    caracteristicas: [
      "Perfil Global Básico",
      "Verificación de Antecedentes Empresariales",
      "Due Diligence Comercial",
      "Due Diligence Financiero",
      "Due Diligence Legal y Regulatorio",
    ],
    porcentaje: "98%",
    metric: "Mitigación de Riesgos",
    gradient: elegantGradients[0],
  },
  {
    key: "escrow",
    icon: <Lock size={48} className={blueIconClass} />,
    titulo: "Servicios de Custodia y Gestión de Pagos",
    descripcion:
      "Escrow y Paymastering internacional. Seguridad, legalidad y precisión en la gestión de fondos.",
    caracteristicas: [
      "Cuentas segregadas y seguras",
      "Liberación condicional de fondos",
      "Estructura legal internacional",
      "Múltiples divisas",
      "Distribución precisa de fondos",
      "Cumplimiento regulatorio global",
    ],
    porcentaje: "100%",
    metric: "Seguridad Garantizada",
    gradient: elegantGradients[1],
  },
  {
    key: "ia-financiera",
    icon: <BarChart size={48} className={blueIconClass} />,
    titulo: "Inteligencia Artificial Financiera",
    descripcion:
      "Soluciones FinTech personalizadas y análisis predictivo para la gestión avanzada de riesgos y portafolios.",
    caracteristicas: [
      "Análisis Predictivo de Mercados",
      "Optimización de Portfolios",
      "Soluciones FinTech Personalizadas",
    ],
    porcentaje: "95%",
    metric: "Precisión Predictiva",
    gradient: elegantGradients[2],
  },
  {
    key: "smart-contracts",
    icon: <FileText size={48} className={blueIconClass} />,
    titulo: "Soluciones con Smart Contracts",
    descripcion:
      "Digitalización y automatización de acuerdos empresariales con máxima seguridad y auditoría.",
    caracteristicas: [
      "Estructuración de Acuerdos Digitales",
      "Seguridad y Auditoría",
      "Soluciones DeFi Empresariales",
    ],
    porcentaje: "99.9%",
    metric: "Automatización Segura",
    gradient: elegantGradients[3],
  },
  {
    key: "inversiones",
    icon: <Coins size={48} className={blueIconClass} />,
    titulo: "Inversiones Alternativas",
    descripcion:
      "Acceso exclusivo a oportunidades privadas, activos digitales y de impacto.",
    caracteristicas: [
      "Inversiones Privadas",
      "Activos Digitales",
      "Inversiones de Impacto",
    ],
    porcentaje: "100%",
    metric: "Rentabilidades Ajustadas a tu Perfil de Inversor",
    gradient: elegantGradients[4],
  },
];

const clubInteligencia = {
  key: "club-inteligencia",
  icon: <Brain size={48} className={blueIconClass} />,
  titulo: "Club de Inteligencia y Análisis Financiero",
  descripcion:
    "Nuestro club de servicios activos proporciona análisis de empresas internacionales (2-3 por semana), rumores verificados de fuentes confiables y análisis globales con IA por una suscripción mensual.",
  caracteristicas: [
    "Análisis detallados de empresas internacionales",
    "Rumores de mercado verificados",
    "Informes generados con IA avanzada",
  ],
  porcentaje: "99%",
  metric: "Adaptación a los Tiempos y a los Mercados",
  gradient: elegantGradients[5],
};

// Animación de porcentaje en cascada
const serviciosAnimados = [...servicios, clubInteligencia];
const duracionAnim = 1.2; // segundos para animar el número
const delayEntre = 3; // segundos entre cada card

function useCascadaAnim(numCards: number) {
  const [active, setActive] = useState(0);
  const [done, setDone] = useState(false);
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
  }, [numCards, done]);
  return { active, done };
}

interface ServicioCardProps {
  servicio: {
    key: string;
    titulo: string;
    descripcion: string;
    caracteristicas: string[];
    porcentaje: string;
    metric: string;
    icon: React.ReactNode;
    gradient: string;
  };
  mostrarAnim: boolean;
  done: boolean;
  finalizado: boolean;
  duracionAnim: number;
}

function ServicioCard({
  servicio,
  mostrarAnim,
  done,
  finalizado,
  duracionAnim,
}: ServicioCardProps) {
  const porcentaje = parseFloat(servicio.porcentaje);
  const [valor, setValor] = useState(done || finalizado ? porcentaje : 0);
  const [showBadge, setShowBadge] = useState(done || finalizado);

  useEffect(() => {
    if (done || finalizado) {
      setValor(porcentaje);
      setShowBadge(true);
      return;
    }
    if (mostrarAnim) {
      setShowBadge(false);
      let start = 0;
      let rafId: number;
      const step = () => {
        if (start < porcentaje) {
          start += Math.ceil(porcentaje / (duracionAnim * 60));
          setValor(Math.min(start, porcentaje));
          rafId = requestAnimationFrame(step);
        } else {
          setValor(porcentaje);
          setTimeout(() => setShowBadge(true), 400);
        }
      };
      step();
      return () => {
        cancelAnimationFrame(rafId);
      };
    }
    // No hacer nada si no es la activa y no está finalizada: mantener el valor actual
  }, [mostrarAnim, porcentaje, finalizado, duracionAnim, done]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`group relative rounded-3xl p-8 border border-white/30 shadow-xl bg-gradient-to-br ${servicio.gradient} backdrop-blur-lg flex flex-col h-full hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-primary/30 transition-all duration-300`}
    >
      <div className="flex flex-col items-center mb-4">
        <div className="mb-2 drop-shadow-lg">{servicio.icon}</div>
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-2 tracking-tight">
          {servicio.titulo}
        </h3>
      </div>
      <p className="font-sans mb-4 text-center text-base text-gray-700">
        {servicio.descripcion}
      </p>
      <ul className="space-y-2 mb-6">
        {servicio.caracteristicas.map((caracteristica, j) => (
          <li key={j} className="flex items-center text-gray-700 text-base">
            <CheckCircle className="w-5 h-5 text-primary mr-2" />
            {caracteristica}
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center mt-auto min-h-[70px]">
        <motion.span
          className="text-5xl font-extrabold text-gray-400 mb-1 transition-all duration-300 drop-shadow-lg"
          animate={{ scale: showBadge ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.7 }}
        >
          {valor}%
        </motion.span>
        {showBadge && (
          <motion.span
            className="inline-block mt-2 px-5 py-1 rounded-full bg-white/70 text-black font-bold text-sm shadow-md backdrop-blur-md whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              animation: showBadge
                ? "bounce-custom 0.7s cubic-bezier(0.4,0,0.6,1) 3"
                : undefined,
            }}
          >
            {servicio.metric}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}

export default function Servicios() {
  const { active, done } = useCascadaAnim(serviciosAnimados.length);
  // Estado para guardar el valor final de cada card
  const [finalizados, setFinalizados] = useState(
    Array(serviciosAnimados.length).fill(false),
  );

  useEffect(() => {
    if (done) {
      setFinalizados(Array(serviciosAnimados.length).fill(true));
    } else {
      setFinalizados(Array(serviciosAnimados.length).fill(false));
    }
  }, [done]);

  return (
    <main className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section Rediseñado */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-12 md:pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"
          />
        </div>

        <div className="container-custom mx-auto px-4 max-w-5xl text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
            >
              Zerua Capital, Tu plataforma integral de servicios financieros
              globales
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Tecnología, experiencia y soluciones integrales para cada
              necesidad a la que te enfrentes
            </motion.p>
          </motion.div>

          {/* Elemento Visual Interactivo */}
          <div className="w-full flex justify-center items-center">
            <div
              className="relative dashboard-3d-hero mx-auto"
              style={{
                perspective: "1200px",
                width: "100%",
                maxWidth: 480,
                height: 170,
              }}
            >
              {/* Dashboard principal largo */}
              <div
                className="dashboard-main-3d animate-float3d-soft"
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #fff 60%, #eaf1fa 100%)",
                  boxShadow:
                    "0 8px 24px 0 rgba(41,121,255,0.10), 0 1px 4px 0 #1a3a5f11",
                  borderRadius: 16,
                  width: "100%",
                  maxWidth: 460,
                  minHeight: 140,
                  position: "relative",
                  zIndex: 2,
                  margin: "0 auto",
                  padding: 14,
                  border: "1.5px solid #e3eaf5",
                  transform: "rotateY(-12deg) rotateX(8deg) scale(1.04)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 12,
                }}
              >
                {/* Columnas de botones a la izquierda */}
                <div
                  className="flex flex-row gap-2 items-center justify-center"
                  style={{ height: "100%" }}
                >
                  {/* Columna de monedas */}
                  <div className="flex flex-col gap-1 items-center justify-center">
                    {["$", "€", "£", "¥", "₿"].map((symbol, i) => (
                      <div
                        key={symbol}
                        style={{
                          width: 32,
                          height: 32,
                          background:
                            symbol === "€"
                              ? "linear-gradient(120deg, #e3eaff 60%, #2563eb22 100%)"
                              : "#fff",
                          borderRadius: 8,
                          boxShadow: "0 1px 4px 0 #1a3a5f11",
                          border:
                            symbol === "€"
                              ? "2px solid #2563eb"
                              : "1.5px solid #e3eaf5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 14,
                          fontWeight: 700,
                          color: symbol === "€" ? "#2563eb" : "#1a3a5f",
                          transition: "all 0.3s cubic-bezier(.4,0,.6,1)",
                        }}
                      >
                        {symbol}
                      </div>
                    ))}
                  </div>
                  {/* Columna de recuadros secundarios grandes */}
                  <div
                    className="flex flex-col gap-1 items-center justify-center"
                    style={{ height: 5 * 32 + 4 * 6 }}
                  >
                    {[
                      "Mercados Emergentes",
                      "Distribución de Activos",
                      "Análisis de Mercados",
                    ].map((label, i) => (
                      <div
                        key={label}
                        style={{
                          width: 100,
                          height: (5 * 32 + 4 * 6) / 3 - 2,
                          background:
                            label === "Mercados Emergentes"
                              ? "linear-gradient(120deg, #e3eaff 60%, #2563eb22 100%)"
                              : "#fff",
                          borderRadius: 10,
                          boxShadow: "0 1px 4px 0 #1a3a5f11",
                          border:
                            label === "Mercados Emergentes"
                              ? "2px solid #2563eb"
                              : "1.5px solid #e3eaf5",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          fontWeight: 700,
                          color:
                            label === "Mercados Emergentes"
                              ? "#2563eb"
                              : "#1a3a5f",
                          position: "relative",
                          paddingLeft: 8,
                          paddingRight: 6,
                          gap: 6,
                          transition: "all 0.3s cubic-bezier(.4,0,.6,1)",
                          fontSize: 10,
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            fontSize: 10,
                            color:
                              label === "Mercados Emergentes"
                                ? "#2563eb"
                                : "#1a3a5f",
                            minWidth: 0,
                            flex: 1,
                          }}
                        >
                          {label}
                        </span>
                        {label === "Mercados Emergentes" && (
                          <svg width="18" height="10" viewBox="0 0 18 10">
                            <polyline
                              fill="none"
                              stroke="#2563eb"
                              strokeWidth="1.2"
                              points="1,9 5,3 9,6 13,1 17,5"
                            />
                          </svg>
                        )}
                        {label === "Distribución de Activos" && (
                          <svg width="12" height="12" viewBox="0 0 12 12">
                            <circle
                              cx="6"
                              cy="6"
                              r="4.5"
                              fill="#f7fafd"
                              stroke="#5c7a99"
                              strokeWidth="1.2"
                            />
                            <path
                              d="M6 6 L6 1.5 A4.5 4.5 0 0 1 10.5 6 Z"
                              fill="#2563eb22"
                            />
                          </svg>
                        )}
                        {label === "Análisis de Mercados" && (
                          <svg width="18" height="8" viewBox="0 0 18 8">
                            <rect
                              x="1"
                              y="5"
                              width="2"
                              height="2"
                              rx="0.5"
                              fill="#2563eb22"
                            />
                            <rect
                              x="4"
                              y="1"
                              width="2"
                              height="6"
                              rx="0.5"
                              fill="#5c7a99"
                            />
                            <rect
                              x="7"
                              y="0"
                              width="2"
                              height="7"
                              rx="0.5"
                              fill="#1a3a5f"
                            />
                            <rect
                              x="10"
                              y="3"
                              width="2"
                              height="4"
                              rx="0.5"
                              fill="#2979ff"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Gráfico y métricas a la derecha */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="text-lg md:text-xl font-bold text-[#1a3a5f] mb-2 mt-2">
                    Análisis de Rendimiento Global
                  </div>
                  <div className="w-full h-28 mb-4 flex items-end">
                    <svg
                      viewBox="0 0 320 80"
                      width="100%"
                      height="100%"
                      className="block"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="320"
                        height="80"
                        rx="12"
                        fill="#f7fafd"
                      />
                      <polyline
                        fill="none"
                        stroke="rgba(41,121,255,0.8)"
                        strokeWidth="3.5"
                        strokeLinejoin="round"
                        points="10,70 50,40 90,55 130,30 170,38 210,18 250,32 290,12 310,18"
                      />
                      {[
                        [10, 70],
                        [50, 40],
                        [90, 55],
                        [130, 30],
                        [170, 38],
                        [210, 18],
                        [250, 32],
                        [290, 12],
                        [310, 18],
                      ].map(([x, y], i) => (
                        <circle key={i} cx={x} cy={y} r="5" fill="#1a3a5f" />
                      ))}
                    </svg>
                  </div>
                  {/* Métricas */}
                  <div className="flex justify-between gap-2 mt-2 mb-1 w-full max-w-md mx-auto">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-[#5c7a99] font-semibold">
                        ROI
                      </span>
                      <span className="text-base font-bold text-[#1a3a5f]">
                        +12.5%
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-[#5c7a99] font-semibold">
                        Capital
                      </span>
                      <span className="text-base font-bold text-[#1a3a5f]">
                        €200,000
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-[#5c7a99] font-semibold">
                        Calificación
                      </span>
                      <span className="text-base font-bold text-[#1a3a5f]">
                        AA+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosAnimados.map((servicio, i) => (
              <ServicioCard
                key={servicio.key}
                servicio={servicio}
                mostrarAnim={!done && i === active}
                done={done}
                finalizado={finalizados[i]}
                duracionAnim={duracionAnim}
              />
            ))}
          </div>
          {/* Botón eliminado según instrucciones */}
        </div>
      </section>

      {/* Sección CTA elegante para servicios */}
      <section className="w-full flex justify-center items-center py-20 bg-gradient-to-b from-white to-[#f3f6fa]">
        <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center px-4">
          {/* Título */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] mb-3">
            ¿Tu patrimonio está preparado para los retos globales?
          </h2>
          {/* Subtítulo */}
          <p className="text-base md:text-lg text-[#334155] mb-8 font-medium">
            Ya hay +100 personas y familias que confían en nosotros, anímate a
            ser el siguiente
          </p>
          {/* Botón CTA principal único */}
          <div className="flex w-full justify-center">
            <a
              href="/contacto"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-medium text-base shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]/40 focus:ring-offset-2"
              style={{ minWidth: 220 }}
            >
              Consultanos
            </a>
          </div>
          {/* (Opcional) Testimonio breve o logos de clientes aquí */}
        </div>
      </section>

      <Footer />
    </main>
  );
}
