"use client";

import Image from "next/image";
import HeroAnimations from "./HeroAnimations.lazy";
import { audits, DueDiligenceRevealCard } from "./DashboardVisual";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [zoomed, setZoomed] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.70;
      
      // Agregar evento para detectar cuando el video termina
      videoRef.current.addEventListener('ended', () => {
        setShowImage(true);
      });
    }
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-36 bg-[#f7f8fa] bg-gradient-to-br from-primary/5 to-secondary/5">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-start w-full">
            <div className="flex-1 flex flex-col justify-center items-center md:items-start">
              <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 text-center md:text-left mt-0 leading-[1.12] md:leading-[1.06]">
                ¿Navegas la complejidad del siglo XXI con herramientas del
                pasado?
              </h1>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center relative mt-0">
              <div className="relative flex items-start justify-center mt-0 ml-8">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="w-auto h-auto max-w-[198px] md:max-w-[298px] lg:max-w-[356px] rounded-2xl shadow-2xl"
                  poster="/images/logos/zerua capital def 2025.webp"
                  aria-hidden="true"
                >
                  <source
                    src="/images/introzeruacapital.webm"
                    type="video/webm"
                  />
                </video>
                {showImage && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                    style={{ borderRadius: '1rem', boxShadow: '0 10px 40px 0 rgba(0,0,0,0.15)' }}
                  >
                    <Image
                      src="/images/zeruacapitalfondo.webp"
                      alt="Zerua Capital"
                      fill
                      style={{ objectFit: 'cover', borderRadius: '1rem' }}
                      className="rounded-2xl shadow-2xl"
                      priority
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Bloque central reordenado */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 w-full">
            {/* Columna izquierda: cards y textos */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Fila 1 */}
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="flex-1 flex flex-col justify-center">
                  <HeroAnimations>
                    <div className="rounded-3xl p-6 min-h-[208px] border border-white/30 shadow-xl bg-gradient-to-br from-blue-100 via-white to-purple-100 backdrop-blur-lg">
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                        ¿Sabías que 8 de cada 10 decisiones empresariales
                        fracasan por información incompleta?
                      </h3>
                      <p className="text-gray-700 text-base">
                        En un mundo donde cada clic genera datos y cada dato
                        puede cambiar el rumbo de tu negocio, el Due Diligence
                        se ha convertido en tu mejor póliza de seguro. No
                        hablamos de papeles y formularios, sino de la diferencia
                        entre cerrar el negocio de tu vida o perder todo por no
                        conocer la historia completa.
                      </p>
                    </div>
                  </HeroAnimations>
                </div>
                <div className="w-[370px] flex items-stretch">
                  <div className="w-full flex justify-end">
                    <DueDiligenceRevealCard
                      frontText="Un inversor me propone una inversión para ampliar mi planta productiva"
                      audit={audits[2]}
                      backGradient="bg-gradient-to-br from-blue-100 via-white to-purple-100"
                    />
                  </div>
                </div>
              </div>
              {/* Fila 2 */}
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="w-[370px] flex items-stretch order-2 md:order-1">
                  <div className="w-full flex justify-start">
                    <DueDiligenceRevealCard
                      frontText="Un proveedor me solicita una carta de crédito en su banco para realizar la compra"
                      audit={audits[1]}
                      backGradient="bg-gradient-to-br from-cyan-100 via-white to-blue-100"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center order-1 md:order-2">
                  <HeroAnimations delay={0.1}>
                    <div className="rounded-3xl p-6 min-h-[208px] border border-white/30 shadow-xl bg-gradient-to-br from-cyan-100 via-white to-blue-100 backdrop-blur-lg">
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                        Nosotros convertimos montañas de información en
                        decisiones inteligentes.
                      </h3>
                      <p className="text-gray-700 text-base">
                        Mientras otros se ahogan en reportes interminables, en
                        Zerua Capital destilamos lo que realmente importa: ¿Con
                        quién haces negocios? ¿Qué riesgos ocultos existen?
                        ¿Dónde están las oportunidades que nadie más ve?
                        Transformamos el caos de datos en estrategias claras que
                        protegen tu inversión y multiplican tus resultados.
                      </p>
                    </div>
                  </HeroAnimations>
                </div>
              </div>
              {/* Fila 3 */}
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="flex-1 flex flex-col justify-center">
                  <HeroAnimations delay={0.2}>
                    <div className="rounded-3xl p-6 min-h-[208px] border border-white/30 shadow-xl bg-gradient-to-br from-green-100 via-white to-blue-100 backdrop-blur-lg">
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                        Tu legado no se construye con suerte, se construye con
                        conocimiento.
                      </h3>
                      <p className="text-gray-700 text-base">
                        Cada operación que blindamos es un escalón hacia el
                        patrimonio que dejarás a las próximas generaciones.
                        Porque al final del día, no se trata solo de ganar
                        dinero hoy, sino de construir una base sólida que
                        perdure. En Zerua Capital entendemos que tu éxito no es
                        casualidad: es el resultado de decisiones informadas,
                        respaldadas por inteligencia real.
                      </p>
                    </div>
                  </HeroAnimations>
                </div>
                <div className="w-[370px] flex items-stretch">
                  <div className="w-full flex justify-end">
                    <DueDiligenceRevealCard
                      frontText="Un cliente me solicita un pedido importante que me paga con una SBLC"
                      audit={audits[0]}
                      backGradient="bg-gradient-to-br from-green-100 via-white to-blue-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pie del Hero dentro del mismo container-custom para fondo idéntico */}
          <div className="w-full flex flex-col items-center mt-12">
            <p className="text-lg text-primary font-bold text-center max-w-2xl mb-2">
              Cada día que retrasas una Due Diligence es un día más cerca del
              riesgo. En un mercado donde la información es poder, no te muevas
              a ciegas
            </p>
            <a
              href="/contacto"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white font-medium text-base shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#2563eb]/40 focus:ring-offset-2 mb-8"
              style={{ minWidth: 220 }}
            >
              Solicita una Due Diligence
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
