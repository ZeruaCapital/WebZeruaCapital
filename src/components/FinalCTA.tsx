"use client";

import { motion } from "@/lib/framer-motion";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { elegantGradients } from "@/lib/constants";

const countries = [
  "Argentina",
  "Bahamas",
  "Barbados",
  "Belice",
  "Bolivia",
  "Brasil",
  "Canadá",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Dominica",
  "Ecuador",
  "El Salvador",
  "Estados Unidos",
  "Granada",
  "Guatemala",
  "Guyana",
  "Haití",
  "Honduras",
  "Jamaica",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "República Dominicana",
  "San Cristóbal y Nieves",
  "San Vicente y las Granadinas",
  "Santa Lucía",
  "Surinam",
  "Trinidad y Tobago",
  "Uruguay",
  "Venezuela",
  "España",
  "Portugal",
  "Otro",
].sort((a, b) => a.localeCompare(b));

const services = [
  "Due Diligence Premium",
  "Servicios de Custodia y Gestión de Pagos",
  "Inteligencia Artificial Financiera",
  "Soluciones con Smart Contracts",
  "Inversiones Alternativas",
  "Club de Inteligencia y Análisis Financiero",
  "Otro",
].sort((a, b) => a.localeCompare(b));

const benefits = [
  {
    icon: (
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    text: "Confidencialidad garantizada",
    description:
      "Protegemos tu información y operaciones con los más altos estándares de confidencialidad y seguridad, cumpliendo con normativas internacionales.",
  },
  {
    icon: (
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    text: "Respuesta en 24 horas",
    description:
      "Nuestro equipo responde a todas las consultas en menos de 24 horas, brindando atención personalizada y soluciones ágiles a cada cliente.",
  },
  {
    icon: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    text: "Equipo especializado",
    description:
      "Contamos con especialistas en finanzas, legal, tecnología y compliance para acompañarte en cada etapa de tu operación o inversión.",
  },
];

export default function FinalCTA() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    fetch("https://formspree.io/f/mwpogjva", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) setShowModal(true);
      });
  }

  return (
    <section
      id="contacto-cta"
      className="pt-32 md:pt-36 pb-24 bg-[#f7f8fa] relative overflow-hidden"
    >
      {/* Fondo gris, sin gradiente azul */}
      <div className="absolute inset-0 z-0" />

      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
            Su éxito financiero comienza aquí
          </h2>
          <p className="text-xl md:text-2xl text-primary font-sans">
            Reserve su sesión estratégica y obtenga un plan personalizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form action="https://formspree.io/f/mwpogjva" method="POST" className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-300"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-300"
                  placeholder="ejemplo@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-300"
                  placeholder="+XX XXX XXX XXXX"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  País
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Seleccione su país</option>
                  {countries.map((country) => (
                    <option
                      key={country}
                      value={country}
                      style={{ backgroundColor: "#fff", color: "#000" }}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Seleccione un servicio</option>
                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                      style={{ backgroundColor: "#fff", color: "#000" }}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-all duration-300"
                  placeholder="Cuéntenos brevemente sobre su proyecto"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-semibold text-lg shadow-md hover:from-[#1e40af] hover:to-[#2563eb] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/40 focus:ring-offset-2"
              >
                Enviar formulario
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Sus datos están protegidos y serán tratados con absoluta
              confidencialidad
            </p>
            <p className="text-xs text-gray-500 mt-1 text-center">Al enviar el formulario acepta nuestra <a href="/privacidad" className="underline text-blue-600 hover:text-blue-800">política de privacidad</a>.</p>
          </motion.div>

          {/* Beneficios */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex flex-col gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className={`rounded-xl shadow p-6 bg-gradient-to-br ${elegantGradients[i]} flex items-start gap-4`}>
                    <div className="flex-shrink-0 text-blue-500">{benefit.icon}</div>
                    <div>
                      <div className="font-bold text-primary mb-1">{benefit.text}</div>
                      <div className="text-sm text-gray-700">{benefit.description}</div>
                    </div>
                  </div>
                ))}
                <div className="mt-4 font-bold text-gray-700 text-sm">Solo se responderán comunicaciones que incluyan un email válido y un teléfono legítimo.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Modal de agradecimiento actualizado */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" role="dialog" aria-modal="true">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col justify-center items-center text-center relative min-h-[420px]">
            <img 
              src="/images/zerua capital def 2025.webp" 
              alt="Logo de Zerua Capital en modal de confirmación" 
              className="w-20 h-20 absolute top-6 right-6 object-contain drop-shadow" 
            />
            <div className="flex-1 flex flex-col justify-center items-center w-full">
              <h3 className="text-2xl font-bold text-primary mb-4">¡Felicidades por tomar esta decisión!</h3>
              <p className="text-base text-gray-700 mb-2">Acaba de dar el primer paso hacia un futuro financiero más brillante.</p>
              <p className="text-base text-gray-700 mb-2">Nuestro equipo de expertos revisará su consulta y se comunicará con usted en un máximo de 24 horas para comentar su situación personal.</p>
              <p className="text-base text-gray-700">¡El cambio que busca está más cerca de lo que imagina!</p>
            </div>
            <button
              className="mt-8 px-6 py-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-semibold shadow hover:from-[#1e40af] hover:to-[#2563eb] transition-all mx-auto"
              aria-label="Cerrar modal"
              onClick={() => { setShowModal(false); router.push("/"); }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
