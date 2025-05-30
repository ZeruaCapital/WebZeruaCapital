"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Cookies() {
  return (
    <main className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container-custom mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              En Zerua Capital, utilizamos cookies y tecnologías similares para
              mejorar su experiencia en nuestro sitio web. Esta política explica
              cómo y por qué utilizamos estas tecnologías.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              ¿Qué son las cookies?
            </h2>
            <p className="text-gray-600 mb-6">
              Las cookies son pequeños archivos de texto que se almacenan en su
              dispositivo cuando visita nuestro sitio web. Nos ayudan a recordar
              sus preferencias y a mejorar su experiencia de navegación.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Tipos de cookies que utilizamos
            </h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">
                Cookies esenciales: Necesarias para el funcionamiento básico del
                sitio
              </li>
              <li className="mb-2">
                Cookies de rendimiento: Nos ayudan a entender cómo los
                visitantes interactúan con nuestro sitio
              </li>
              <li className="mb-2">
                Cookies de funcionalidad: Permiten recordar sus preferencias y
                personalizar su experiencia
              </li>
              <li className="mb-2">
                Cookies de análisis: Nos ayudan a mejorar nuestro sitio web
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              ¿Cómo controlar las cookies?
            </h2>
            <p className="text-gray-600 mb-6">
              Puede controlar y/o eliminar las cookies según desee. Puede
              eliminar todas las cookies que ya están en su computadora y puede
              configurar la mayoría de los navegadores para evitar que se
              coloquen. Sin embargo, si hace esto, es posible que deba ajustar
              manualmente algunas preferencias cada vez que visite un sitio.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Actualizaciones de la política
            </h2>
            <p className="text-gray-600 mb-6">
              Nos reservamos el derecho de modificar esta política de cookies en
              cualquier momento. Cualquier cambio será publicado en esta página.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Contacto
            </h2>
            <p className="text-gray-600 mb-6">
              Si tiene alguna pregunta sobre nuestra política de cookies, no
              dude en contactarnos a través de nuestra página de contacto.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
