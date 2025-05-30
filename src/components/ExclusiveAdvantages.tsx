"use client";

import React from "react";
import { TrendingUp, Shield, User, Handshake } from "lucide-react";
import Link from "next/link";

const advantages = [
  {
    icon: (
      <TrendingUp
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Rendimiento Superior",
    description:
      "Nuestro enfoque en inversiones de alto rendimiento nos permite ofrecer retornos significativamente superiores al mercado tradicional.",
  },
  {
    icon: (
      <Shield
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Protección de Capital",
    description:
      "Implementamos estrategias avanzadas de gestión de riesgo para proteger su inversión en cualquier condición de mercado.",
  },
  {
    icon: (
      <User
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Gestión Personalizada",
    description:
      "Cada cliente recibe atención individualizada y estrategias de inversión adaptadas a sus objetivos específicos.",
  },
  {
    icon: (
      <Handshake
        size={44}
        className="text-[#2563eb] group-hover:text-[#2563eb] transition-colors duration-300"
      />
    ),
    title: "Transparencia Total",
    description:
      "Mantenemos una comunicación clara y constante sobre el rendimiento y las estrategias de inversión.",
  },
];

export default function ExclusiveAdvantages() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-light to-white relative overflow-hidden">
      {/* Partículas decorativas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-pulse" />
      </div>
      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
            Ventajas Exclusivas
          </h2>
          <p className="text-lg md:text-xl text-black font-sans max-w-2xl mx-auto">
            Descubre el valor diferencial de trabajar con Zerua Capital:
            experiencia, protección y resultados a tu medida.
          </p>
        </div>
        {/* Grid de ventajas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, i) => {
            const gradients = [
              "from-green-100 via-white to-blue-100",
              "from-blue-100 via-white to-purple-100",
              "from-cyan-100 via-white to-blue-100",
              "from-green-100 via-white to-blue-100",
            ];
            return (
              <div
                key={adv.title}
                className={`group relative rounded-3xl p-6 md:p-6 border border-white/30 shadow-xl bg-gradient-to-br ${gradients[i]} backdrop-blur-lg flex flex-col h-full min-h-[180px] md:min-h-[150px] hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#2563eb]/20 transition-all duration-300`}
              >
                <div className="flex flex-col items-center mb-3">
                  <div className="mb-1 drop-shadow-lg">{adv.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-primary tracking-tight text-center">
                    {adv.title}
                  </h3>
                </div>
                <p className="font-sans mb-2 text-center text-sm text-gray-700">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* CTA debajo de las cards */}
        <div className="flex flex-col items-center mt-8">
          <p className="text-xl text-primary font-semibold mb-4 text-center">
            ¿Listo para potenciar tu patrimonio con inteligencia y seguridad?
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

/* Agrega a tu CSS global o tailwind.config.js:
.perspective { perspective: 1200px; }
.group:hover .group-hover\:rotate-y-180 { transform: rotateY(180deg); }
*/
