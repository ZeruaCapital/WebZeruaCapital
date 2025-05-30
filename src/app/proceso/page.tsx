"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ProcesoDashboard from "@/components/ProcesoDashboard";
import ProcesoCardsSection from "@/components/ProcesoCardsSection";

const Navigation = dynamic(() => import("@/components/Navigation"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Proceso() {
  return (
    <main className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <Navigation />
      {/* Hero Section Rediseñado */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
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
          {/* Sustituimos solo la card central por el nuevo dashboard */}
          <div className="w-full flex justify-center items-center">
            <ProcesoDashboard />
          </div>
        </div>
      </section>
      {/* Cards de proceso detallado */}
      <ProcesoCardsSection />
      <Footer />
    </main>
  );
}
