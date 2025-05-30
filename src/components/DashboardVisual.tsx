import { useState, useEffect, useRef } from "react";

export const audits = [
  {
    percentage: 92,
    status: "Alto",
    statusColor: "#22c55e", // Verde
    statusBg: "bg-green-100",
    verifications: "42/42",
    alerts: 0,
    id: "VRF-23052",
    lastCheck: "hace 2 min",
    tooltip:
      "Legitimidad alta: la contraparte ha pasado todas las verificaciones y no presenta alertas relevantes.",
  },
  {
    percentage: 75,
    status: "Precaución",
    statusColor: "#f59e0b", // Ámbar
    statusBg: "bg-yellow-100",
    verifications: "38/42",
    alerts: 2,
    id: "VRF-23478",
    lastCheck: "hace 7 min",
    tooltip:
      "Precaución: existen algunas alertas o verificaciones pendientes. Revise los detalles antes de continuar.",
  },
  {
    percentage: 45,
    status: "Bajo",
    statusColor: "#ef4444", // Rojo
    statusBg: "bg-red-100",
    verifications: "32/42",
    alerts: 5,
    id: "VRF-23125",
    lastCheck: "hace 15 min",
    tooltip:
      "Legitimidad baja: múltiples alertas detectadas. Se recomienda no continuar sin una revisión exhaustiva.",
  },
];

// La longitud del círculo debería calcularse basada en el radio real
// const circleRadius = 40;
// const circleCircumference = 2 * Math.PI * circleRadius;

export default function DashboardVisual() {
  // Estado de la auditoría activa
  const [currentAudit, setCurrentAudit] = useState(audits[0]);
  const [animationPhase, setAnimationPhase] = useState("initial");

  // Referencia para los temporizadores
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Función para avanzar a la siguiente auditoría
  const goToNextAudit = () => {
    setCurrentAudit(
      (prevAudit) => audits[(audits.indexOf(prevAudit) + 1) % audits.length],
    );
  };

  // Efecto para limpiar temporizadores al desmontar
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Efecto principal para manejar la secuencia de animación
  useEffect(() => {
    // Función asíncrona para manejar la secuencia de animación
    const animateSequence = async () => {
      try {
        // 1. Establecer fase inicial
        setAnimationPhase("initial");

        // Pequeña pausa para asegurar el reseteo
        await new Promise((resolve) => setTimeout(resolve, 50));

        // 3. Comenzar animación
        setAnimationPhase("animating");

        // 5. Marcar como completa
        setAnimationPhase("complete");

        // 6. Esperar 4 segundos y avanzar
        timerRef.current = setTimeout(() => {
          goToNextAudit();
        }, 4000);
      } catch (error) {
        // Manejo silencioso del error
      }
    };

    // Iniciar secuencia de animación
    animateSequence();

    // Limpiar temporizadores anteriores
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentAudit]);

  // Reservar espacio para el botón y el texto de conclusiones
  // const maxTooltipLength = Math.max(...audits.map((a) => a.tooltip.length));
  // const maxTooltip =
  //   audits.find((a) => a.tooltip.length === maxTooltipLength)?.tooltip || "";

  // Determinar efectos visuales según nivel de riesgo
  // const getStatusEffects = () => {
  //   switch (audits.indexOf(currentAudit)) {
  //     case 2: // Riesgo alto
  //       return {
  //         glowColor: "#ef444460",
  //         pulseColor: "#ef4444",
  //         textColor: "text-red-600",
  //         shadowEffect: "0 0 16px 4px rgba(239, 68, 68, 0.4)",
  //       };
  //     case 1: // Precaución
  //       return {
  //         glowColor: "#f59e0b60",
  //         pulseColor: "#f59e0b",
  //         textColor: "text-yellow-500",
  //         shadowEffect: "0 0 12px 2px rgba(245, 158, 11, 0.4)",
  //       };
  //     default: // Riesgo bajo
  //       return {
  //         glowColor: "#22c55e60",
  //         pulseColor: "#22c55e",
  //         textColor: "text-green-600",
  //         shadowEffect: "0 0 12px 2px rgba(34, 197, 94, 0.4)",
  //       };
  //   }
  // };

  // const statusEffects = getStatusEffects();

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 w-[340px] mx-auto my-auto relative overflow-hidden border border-gray-100 flex flex-col justify-center">
      {/* Título centrado */}
      <h3 className="text-xl font-bold text-gray-800 tracking-tight text-center mb-4">
        Due Diligence
      </h3>

      {/* Fila: nivel de legitimidad + círculo */}
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex flex-col items-start justify-center flex-1">
          <span className="text-sm font-semibold text-gray-700 select-none">
            nivel de legitimidad
          </span>
          <div className="mt-2 min-h-[32px] w-full flex items-start">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${currentAudit.statusBg} transition-all duration-300`}
              style={{
                color: currentAudit.statusColor,
                boxShadow: `0 0 8px 0px ${currentAudit.statusColor}80`,
                opacity: animationPhase === "complete" ? 1 : 0,
                pointerEvents: "none",
              }}
            >
              {currentAudit.status}
            </span>
          </div>
        </div>
        {/* Círculo de progreso */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-20 h-20 -rotate-90">
            <circle
              cx="40"
              cy="40"
              r={32}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="40"
              cy="40"
              r={32}
              fill="none"
              stroke={currentAudit.statusColor}
              strokeWidth="8"
              strokeDasharray={2 * Math.PI * 32}
              strokeDashoffset={
                2 * Math.PI * 32 * (1 - currentAudit.percentage / 100)
              }
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-xl font-bold"
              style={{ color: currentAudit.statusColor }}
            >
              {currentAudit.percentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Línea compacta de datos */}
      <div className="flex flex-row items-center justify-between gap-2 mt-2">
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">
            Verificaciones
          </span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {currentAudit.verifications}
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">
            Alertas
          </span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {currentAudit.alerts}
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">ID</span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {currentAudit.id}
          </span>
        </div>
      </div>
      
      <style jsx global>{`
        .glow-button {
          position: relative;
          border: 2.5px solid #fff;
          z-index: 1;
        }
        .glow-button::after {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 0.5rem;
          border: 3px solid #fff;
          pointer-events: none;
          z-index: 0;
          box-shadow: 0 0 16px 4px #fff;
          animation: glow-after 0.8s infinite;
        }
        @keyframes glow-after {
          0% {
            box-shadow: 0 0 16px 4px #fff;
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 32px 12px #fff;
            opacity: 0.5;
          }
          100% {
            box-shadow: 0 0 16px 4px #fff;
            opacity: 1;
          }
        }
        .glow-button:disabled {
          animation: none;
          box-shadow: none;
          border: 2.5px solid #fff;
        }
        .glow-button:disabled::after {
          animation: none;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}

export function CardDashboardVisual({
  audit,
  animateCircle = true,
}: {
  audit: (typeof audits)[0];
  animateCircle?: boolean;
}) {
  const [showDetails, setShowDetails] = useState(!animateCircle);
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (animateCircle) {
      setShowDetails(false);
      setAnimatedPercent(0);
      const duration = 3000;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        setAnimatedPercent(Math.round(audit.percentage * progress));
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setShowDetails(true);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    } else {
      setAnimatedPercent(audit.percentage);
      setShowDetails(true);
    }
  }, [animateCircle, audit.percentage]);

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 w-[340px] min-h-[208px] mx-auto my-auto relative overflow-hidden border border-gray-100 flex flex-col justify-center">
      <h3 className="text-xl font-bold text-gray-800 tracking-tight text-center mb-4">
        Due Diligence
      </h3>
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex flex-col items-start justify-center flex-1">
          <span className="text-sm font-semibold text-gray-700 select-none">
            nivel de legitimidad
          </span>
          <div className="mt-2 min-h-[32px] w-full flex items-start">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${audit.statusBg} transition-all duration-300`}
              style={{
                color: audit.statusColor,
                boxShadow: `0 0 8px 0px ${audit.statusColor}80`,
                opacity: animateCircle ? (showDetails ? 1 : 0) : 1,
                pointerEvents: "none",
                transition: "opacity 0.5s",
              }}
            >
              {showDetails ? audit.status : ""}
            </span>
          </div>
        </div>
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-20 h-20 -rotate-90">
            <circle
              cx="40"
              cy="40"
              r={32}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="40"
              cy="40"
              r={32}
              fill="none"
              stroke={audit.statusColor}
              strokeWidth="8"
              strokeDasharray={2 * Math.PI * 32}
              strokeDashoffset={2 * Math.PI * 32 * (1 - animatedPercent / 100)}
              className="transition-all duration-0"
            />
          </svg>
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
            style={{ opacity: showDetails ? 1 : 0 }}
          >
            <span
              className="text-xl font-bold"
              style={{ color: audit.statusColor }}
            >
              {showDetails ? `${audit.percentage}%` : `${animatedPercent}%`}
            </span>
          </div>
        </div>
      </div>
      {/* Línea compacta de datos y botón, fade in tras animación */}
      <div
        className={`flex flex-row items-center justify-between gap-2 mt-2 transition-opacity duration-700 ${showDetails ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">
            Verificaciones
          </span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {audit.verifications}
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">
            Alertas
          </span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {audit.alerts}
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">ID</span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {audit.id}
          </span>
        </div>
      </div>
    </div>
  );
}

export function DueDiligenceFlipCard({
  frontText,
  frontGradient,
  audit,
  backGradient,
}: {
  frontText: string;
  frontGradient: string;
  audit: (typeof audits)[0];
  backGradient: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const [animateCircle, setAnimateCircle] = useState(false);

  const handleFlip = () => {
    setFlipped(true);
    setTimeout(() => setAnimateCircle(true), 600); // Espera a que gire para animar círculo
  };

  return (
    <div className="perspective w-full h-full">
      <div
        className={`flip-card w-full h-full relative ${flipped ? "flipped" : ""}`}
        style={{ minHeight: 208 }}
      >
        {/* Cara frontal */}
        <div
          className={`flip-front absolute inset-0 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-between transition-all duration-500 ${frontGradient}`}
          style={{ backfaceVisibility: "hidden", zIndex: 2 }}
        >
          <div className="flex-1 flex flex-col items-center justify-center w-full px-4">
            <span className="text-center font-bold text-lg text-primary mb-4 mt-8">
              {frontText}
            </span>
          </div>
          <button
            className="mb-6 mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-semibold shadow-lg hover:-translate-y-1 transition-all"
            onClick={handleFlip}
            disabled={flipped}
            type="button"
          >
            Due Diligence
          </button>
        </div>
        {/* Cara trasera */}
        <div
          className={`flip-back absolute inset-0 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center transition-all duration-500 ${backGradient}`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: 1,
          }}
        >
          <CardDashboardVisual audit={audit} animateCircle={animateCircle} />
        </div>
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .flip-card {
          transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
}

export function DueDiligenceRevealCard({
  frontText,
  audit,
  backGradient,
}: {
  frontText: string;
  audit: (typeof audits)[0];
  backGradient: string;
}) {
  const [revealed, setRevealed] = useState(false);
  const [animateCircle, setAnimateCircle] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleReveal = () => {
    setIsTransitioning(true);
    setRevealed(true);
    setTimeout(() => {
      setShowCard(true);
      setAnimateCircle(true);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[340px] min-h-[208px] relative">
        {/* Frase y botón sueltos, sin card ni fondo */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-400 ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          style={{ zIndex: 2 }}
        >
          <span className="text-center font-bold text-lg text-primary mb-6 px-4">
            {frontText}
          </span>
          <button
            className="glow-button px-6 py-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-semibold hover:-translate-y-1 transition-all relative focus:outline-none"
            onClick={handleReveal}
            disabled={revealed || isTransitioning}
            type="button"
          >
            <span className="relative z-10 text-white drop-shadow-lg">Click aquí</span>
          </button>
        </div>
        {/* Card due diligence animada con gradiente */}
        {showCard && (
          <div
            className={`absolute inset-0 transition-opacity duration-400 flex items-center justify-center ${revealed && !isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ zIndex: 3 }}
          >
            <CardDashboardVisualWithGradient audit={audit} animateCircle={animateCircle} backGradient={backGradient} />
          </div>
        )}
      </div>
    </div>
  );
}

export function CardDashboardVisualWithGradient({
  audit,
  animateCircle = true,
  backGradient,
}: {
  audit: (typeof audits)[0];
  animateCircle?: boolean;
  backGradient: string;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (animateCircle) {
      setShowDetails(false);
      setAnimatedPercent(0);
      const duration = 3000;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        setAnimatedPercent(Math.round(audit.percentage * progress));
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setShowDetails(true);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    } else {
      setAnimatedPercent(audit.percentage);
      setShowDetails(true);
    }
  }, [animateCircle, audit.percentage]);

  return (
    <div className={`backdrop-blur-xl rounded-2xl shadow-xl p-4 w-[340px] h-[208px] mx-auto my-auto relative overflow-hidden border border-gray-100 flex flex-col justify-center ${backGradient}`}>
      <h3 className="text-xl font-bold text-gray-800 tracking-tight text-center mb-4">
        Due Diligence
      </h3>
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex flex-col items-start justify-center flex-1">
          <span className="text-sm font-semibold text-gray-700 select-none">
            nivel de legitimidad
          </span>
          <div className="mt-2 min-h-[32px] w-full flex items-start">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${audit.statusBg} transition-all duration-300`}
              style={{
                color: audit.statusColor,
                boxShadow: `0 0 8px 0px ${audit.statusColor}80`,
                opacity: showDetails ? 1 : 0,
                pointerEvents: "none",
                transition: "opacity 0.5s",
              }}
            >
              {showDetails ? audit.status : ""}
            </span>
          </div>
        </div>
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-20 h-20 -rotate-90">
            <circle
              cx="40"
              cy="40"
              r={32}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx="40"
              cy="40"
              r={32}
              fill="none"
              stroke={audit.statusColor}
              strokeWidth="8"
              strokeDasharray={2 * Math.PI * 32}
              strokeDashoffset={2 * Math.PI * 32 * (1 - animatedPercent / 100)}
              className="transition-all duration-0"
            />
          </svg>
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
            style={{ opacity: showDetails ? 1 : 0 }}
          >
            <span
              className="text-xl font-bold"
              style={{ color: audit.statusColor }}
            >
              {showDetails ? `${audit.percentage}%` : `${animatedPercent}%`}
            </span>
          </div>
        </div>
      </div>
      {/* Línea compacta de datos y botón, fade in tras animación */}
      <div
        className={`flex flex-row items-center justify-between gap-2 mt-2 transition-opacity duration-700 ${showDetails ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">
            Verificaciones
          </span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {audit.verifications}
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">
            Alertas
          </span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {audit.alerts}
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-xs text-gray-500 font-semibold mb-1">ID</span>
          <span className="px-2 py-1 rounded bg-gray-100 text-xs font-bold text-gray-800 border border-gray-200">
            {audit.id}
          </span>
        </div>
      </div>
    </div>
  );
}