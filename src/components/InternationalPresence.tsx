"use client";

import Link from "next/link";

const locations = [
  {
    code: "US",
    name: "Miami (HQ)",
    country: "Estados Unidos",
    description:
      "Hub financiero estratégico con conexión directa a Latinoamérica y acceso privilegiado a mercados internacionales.",
    advantages: [
      "Acceso a mercados latinoamericanos",
      "Marco regulatorio favorable",
      "Infraestructura financiera robusta",
    ],
  },
  {
    code: "CA",
    name: "Canadá",
    country: "Canadá",
    description:
      "Presencia estratégica en el mercado norteamericano con servicios especializados para clientes canadienses.",
    advantages: [
      "Acceso al mercado norteamericano",
      "Estabilidad financiera",
      "Marco regulatorio sólido",
    ],
  },
  {
    code: "ES/EU",
    name: "Bilbao (Europa)",
    country: "España/UE",
    description:
      "Presencia estratégica en Europa con servicios adaptados al marco regulatorio europeo y conexión con la UE.",
    advantages: [
      "Acceso al mercado europeo",
      "Cumplimiento normativo UE",
      "Red de contactos europea",
    ],
  },
  {
    code: "SV",
    name: "El Salvador",
    country: "Centroamérica",
    description:
      "Cobertura integral en Centroamérica con servicios adaptados localmente y red de contactos establecida.",
    advantages: [
      "Conocimiento local profundo",
      "Servicios personalizados",
      "Red de contactos establecida",
    ],
  },
];

export default function InternationalPresence() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-light to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Cabecera */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
            Servicios Globales
          </h2>
          <p className="text-lg md:text-xl text-black font-sans max-w-2xl mx-auto">
            Zerua Capital, está más cerca de ti que nadie, a un golpe de click.
            Para llevarte de donde estás a donde necesitas estar.
          </p>
        </div>
        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, i) => {
            const gradients = [
              "from-green-100 via-white to-blue-100",
              "from-blue-100 via-white to-purple-100",
              "from-cyan-100 via-white to-blue-100",
              "from-green-100 via-white to-blue-100",
            ];
            return (
              <div
                key={loc.code}
                className={`group relative rounded-3xl p-6 md:p-6 border border-white/30 shadow-xl bg-gradient-to-br ${gradients[i]} backdrop-blur-lg flex flex-col h-full min-h-[180px] md:min-h-[150px] hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#2563eb]/20 transition-all duration-300`}
              >
                <div className="flex flex-col items-center mb-3">
                  <div className="mb-1 drop-shadow-lg">
                    <span className="inline-block text-3xl md:text-4xl font-extrabold text-[#2563eb] tracking-tight select-none">
                      {loc.code}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary tracking-tight text-center">
                    {loc.name}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium text-center">
                    {loc.country}
                  </span>
                </div>
                <p className="font-sans mb-2 text-center text-sm text-gray-700">
                  {loc.description}
                </p>
                <ul className="list-disc list-inside text-xs text-gray-600 mb-2 mx-auto max-w-xs">
                  {loc.advantages.map((adv, i) => (
                    <li key={i}>{adv}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {/* CTA debajo de las cards */}
        <div className="flex flex-col items-center mt-8">
          <p className="text-xl text-primary font-semibold mb-4 text-center">
            ¿Quieres operar globalmente con la confianza de un socio local?
            <br />
            <span className="text-gray-700 font-normal">
              Contáctanos y descubre cómo podemos ayudarte en cualquier mercado.
            </span>
          </p>
          <Link
            href="/contacto"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-medium text-base shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]/40 focus:ring-offset-2"
            style={{ minWidth: 220 }}
          >
            Solicitar información
          </Link>
        </div>
      </div>
    </section>
  );
}
