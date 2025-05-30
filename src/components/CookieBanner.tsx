"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accepted = localStorage.getItem("cookieAccepted");
      if (!accepted) setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border border-blue-200 shadow-lg p-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="text-gray-700 text-sm md:text-base">
              <p className="font-semibold text-blue-800 mb-2 text-lg">
                Zerua Capital: Exclusividad y Confidencialidad
              </p>
              <p>
                Zerua Capital LLC, con sede en Miami, Florida, utiliza cookies
                para mejorar su experiencia y personalizar nuestros servicios
                premium. Cumplimos con todas las regulaciones federales
                aplicables de EE.UU., incluyendo las directrices de la FTC
                (Federal Trade Commission) y la Securities Act. Sus datos
                permanecen estrictamente confidenciales, en línea con nuestra
                filosofía de gestión patrimonial discreta.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
                <a
                  href="/politica-privacidad"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors font-medium"
                >
                  Política de privacidad
                </a>
                <a
                  href="/terminos-legales"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors font-medium"
                >
                  Términos legales
                </a>
              </div>
            </div>
          </div>
          <div className="flex md:flex-shrink-0">
            <button
              onClick={handleAccept}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 min-w-32 text-center"
            >
              Aceptar y confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
