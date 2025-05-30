import { Search } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface DueDiligenceFlipCardProps {
  label: string;
  percentage: string;
  gradient: string;
}

export default function DueDiligenceFlipCard({
  label,
  percentage,
  gradient,
}: DueDiligenceFlipCardProps) {
  return (
    <div className="perspective w-full h-full">
      <div className="flip-card w-full h-[85%] cursor-default relative">
        <div
          className="flip-front relative rounded-3xl shadow-xl flex items-center justify-center border border-gray-200 w-full h-full overflow-hidden"
          style={{ opacity: 0.96 }}
        >
          <Image
            src="/images/backgrounds/cardheroinicio.webp"
            alt=""
            fill
            className="object-cover absolute inset-0 z-0 rounded-3xl"
            style={{ opacity: 0.75, objectPosition: "center 30%" }}
            priority
          />
          <span className="absolute z-10 bottom-8 left-0 right-0 text-2xl font-bold text-white text-center w-full">
            Verificación de {label}
          </span>
        </div>
        {/* Cara trasera */}
        <div className="flip-back bg-gradient-to-br from-[#2563eb] to-[#1e40af] rounded-3xl shadow-xl p-6 flex flex-col border border-white/30 text-white w-full h-full">
          {/* Primera línea: ID y verificaciones */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium">DDZC25052</span>
            <span className="text-sm font-medium">Verificaciones: 42</span>
          </div>

          {/* Segunda línea: Barra de progreso */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-white/80">
                Nivel de Legitimidad
              </span>
              <span className="text-sm font-semibold">{percentage}</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: percentage }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Tercera línea: Estado y alertas */}
          <div className="flex justify-between items-center mb-4">
            <span
              className="px-3 py-1 rounded-full text-sm font-medium bg-green-100"
              style={{ color: "#22c55e" }}
            >
              Alto
            </span>
            <span className="text-sm font-medium">Alertas: 0</span>
          </div>

          {/* Conclusión */}
          <div className="text-sm text-white/80">
            Legitimidad alta: la contraparte ha pasado todas las verificaciones
            y no presenta alertas relevantes.
          </div>
        </div>
      </div>
    </div>
  );
}
