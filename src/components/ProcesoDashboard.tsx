import React from "react";
import { useState, useEffect } from "react";
import { Target, Database, Cpu, Shield, Heart, Zap } from "lucide-react";

// Constante de diseño
const COLORS = {
  navy: "#1a3a5f",
  blue: "#3182ce",
  lightBlue: "#63b3ed",
  accent: "#2b6cb0",
  white: "#ffffff",
};

// Pasos del proceso
const steps = [
  {
    icon: <Target size={22} />,
    title: "Ecosistema Financiero",
    microIcon: "📊",
  },
  {
    icon: <Database size={22} />,
    title: "Datos",
    microIcon: "🔍",
  },
  {
    icon: <Cpu size={22} />,
    title: "Tecnología",
    microIcon: "💡",
  },
  {
    icon: <Shield size={22} />,
    title: "Blindaje Integral",
    microIcon: "🛡️",
  },
  {
    icon: <Heart size={22} />,
    title: "Su Legado",
    microIcon: "🎯",
  },
  {
    icon: <Zap size={22} />,
    title: "El último paso eres tú",
    microIcon: "✨",
  },
];

// Micro-iconos SVG para cada paso
const microIcons = [
  // Ecosistema Financiero: gráfico de línea ascendente
  <svg key="icon1" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path
      d="M3 10l3-3 2 2 4-4"
      stroke="#3182ce"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="3" cy="10" r="1.2" fill="#3182ce" />
    <circle cx="6" cy="7" r="1.2" fill="#3182ce" />
    <circle cx="8" cy="9" r="1.2" fill="#3182ce" />
    <circle cx="12" cy="5" r="1.2" fill="#3182ce" />
  </svg>,
  // Datos: base de datos
  <svg key="icon2" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <ellipse
      cx="8"
      cy="4.5"
      rx="5"
      ry="2.5"
      stroke="#3182ce"
      strokeWidth="1.5"
    />
    <path
      d="M3 4.5v7c0 1.38 2.24 2.5 5 2.5s5-1.12 5-2.5v-7"
      stroke="#3182ce"
      strokeWidth="1.5"
    />
    <ellipse
      cx="8"
      cy="11.5"
      rx="5"
      ry="2.5"
      stroke="#3182ce"
      strokeWidth="1.5"
    />
  </svg>,
  // Tecnología: microchip
  <svg key="icon3" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <rect
      x="4"
      y="4"
      width="8"
      height="8"
      rx="2"
      stroke="#3182ce"
      strokeWidth="1.5"
    />
    <path
      d="M8 1v2M8 13v2M1 8h2M13 8h2M3.5 3.5l1.5 1.5M12.5 3.5l-1.5 1.5M3.5 12.5l1.5-1.5M12.5 12.5l-1.5-1.5"
      stroke="#3182ce"
      strokeWidth="1.2"
    />
  </svg>,
  // Blindaje Integral: escudo
  <svg key="icon4" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path
      d="M8 2l5 2v4c0 3.5-2.5 5.5-5 6-2.5-.5-5-2.5-5-6V4l5-2z"
      stroke="#3182ce"
      strokeWidth="1.5"
    />
    <path d="M8 8v2" stroke="#3182ce" strokeWidth="1.2" strokeLinecap="round" />
  </svg>,
  // Su Legado: árbol
  <svg key="icon5" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <circle cx="8" cy="7" r="3" stroke="#3182ce" strokeWidth="1.5" />
    <path
      d="M8 10v3"
      stroke="#3182ce"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M6 13h4"
      stroke="#3182ce"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>,
  // El último paso: persona
  <svg key="icon6" width="16" height="16" fill="none" viewBox="0 0 16 16">
    <circle cx="8" cy="6" r="2.5" stroke="#3182ce" strokeWidth="1.5" />
    <path
      d="M3.5 13c.5-2 2.5-3 4.5-3s4 1 4.5 3"
      stroke="#3182ce"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>,
];

export default function ProcesoDashboard() {
  const [active, setActive] = useState(0);

  // Animación automática entre pasos
  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % steps.length),
      3000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-6">
      <div
        className="relative dashboard-3d-hero w-full max-w-md mx-auto"
        style={{
          perspective: "1200px",
          height: "auto",
        }}
      >
        {/* Dashboard principal con efecto 3D */}
        <div
          className="dashboard-main-3d animate-float3d-soft w-full"
          style={{
            transformStyle: "preserve-3d",
            background: "linear-gradient(135deg, #fff 60%, #eaf1fa 100%)",
            boxShadow:
              "0 8px 24px 0 rgba(41,121,255,0.10), 0 1px 4px 0 #1a3a5f11",
            borderRadius: "18px",
            position: "relative",
            zIndex: 2,
            margin: "0 auto",
            padding: "16px",
            border: "1.5px solid #e3eaf5",
            transform: "rotateY(-12deg) rotateX(8deg) scale(1.04)",
            height: "288px",
          }}
        >
          {/* Título del dashboard */}
          <div className="text-lg font-bold text-[#1a3a5f] mb-4 text-center">
            Proceso Zerua Capital
          </div>

          {/* Grid de botones */}
          <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-2 w-full px-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  relative flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
                  ${active === index ? "scale-105" : ""}
                `}
                onClick={() => setActive(index)}
              >
                {/* Icono principal con fondo solo para el activo */}
                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center mb-1
                  ${active === index ? "bg-blue-100 ring-4 ring-blue-200" : ""}
                `}
                >
                  {React.cloneElement(step.icon, {
                    size: 28,
                    className: `text-blue-500 transition-transform duration-300`,
                  })}
                </div>

                {/* Título */}
                <span className="text-xs font-medium text-center mt-1 text-[#1a3a5f]">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Panel de información en la parte inferior */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-blue-50 border-t border-blue-100 rounded-b-[18px]">
            <div className="flex items-center">
              <span className="text-blue-500 font-bold text-sm mr-2">
                {steps[active].title}
              </span>
              <p className="text-xs text-blue-700">
                {active === 0 &&
                  "Análisis completo del ecosistema financiero global."}
                {active === 1 &&
                  "Recopilación y análisis de datos para tomar decisiones."}
                {active === 2 &&
                  "Implementación de soluciones tecnológicas avanzadas."}
                {active === 3 && "Protección integral de su patrimonio."}
                {active === 4 &&
                  "Preservar y hacer crecer su legado financiero."}
                {active === 5 &&
                  "Su participación activa es clave para el éxito."}
              </p>
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
