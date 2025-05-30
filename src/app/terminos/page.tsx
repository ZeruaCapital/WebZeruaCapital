"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Terminos() {
  return (
    <main className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container-custom mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Términos y Condiciones
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Bienvenido a Zerua Capital. Al acceder y utilizar este sitio web,
              usted acepta estar sujeto a los siguientes términos y condiciones
              de uso.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-600 mb-6">
              Al acceder a este sitio web, usted acepta estar sujeto a estos
              términos y condiciones de uso, todas las leyes y regulaciones
              aplicables, y acepta que es responsable del cumplimiento de las
              leyes locales aplicables.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              2. Licencia de Uso
            </h2>
            <p className="text-gray-600 mb-6">
              Se le concede una licencia limitada, no exclusiva y no
              transferible para acceder y utilizar este sitio web para su uso
              personal y no comercial.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              3. Restricciones
            </h2>
            <p className="text-gray-600 mb-6">Está prohibido:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">Modificar o copiar los materiales</li>
              <li className="mb-2">
                Usar los materiales para cualquier propósito comercial
              </li>
              <li className="mb-2">
                Intentar descompilar o realizar ingeniería inversa de cualquier
                software contenido en el sitio web
              </li>
              <li className="mb-2">
                Eliminar cualquier copyright u otras notaciones de propiedad de
                los materiales
              </li>
              <li className="mb-2">
                Transferir los materiales a otra persona o "espejo" los
                materiales en cualquier otro servidor
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              4. Descargo de Responsabilidad
            </h2>
            <p className="text-gray-600 mb-6">
              Los materiales en el sitio web de Zerua Capital se proporcionan
              "tal cual". Zerua Capital no ofrece garantías, expresas o
              implícitas, y por la presente renuncia y niega todas las demás
              garantías, incluyendo, sin limitación, garantías implícitas o
              condiciones de comerciabilidad, idoneidad para un propósito
              particular, o no infracción de propiedad intelectual u otra
              violación de derechos.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              5. Limitaciones
            </h2>
            <p className="text-gray-600 mb-6">
              En ningún caso Zerua Capital o sus proveedores serán responsables
              por daños (incluyendo, sin limitación, daños por pérdida de datos
              o ganancias, o debido a interrupción del negocio) que surjan del
              uso o la imposibilidad de usar los materiales en el sitio web de
              Zerua Capital.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              6. Precisión de los Materiales
            </h2>
            <p className="text-gray-600 mb-6">
              Los materiales que aparecen en el sitio web de Zerua Capital
              podrían incluir errores técnicos, tipográficos o fotográficos.
              Zerua Capital no garantiza que cualquiera de los materiales en su
              sitio web sea preciso, completo o actual. Zerua Capital puede
              hacer cambios a los materiales contenidos en su sitio web en
              cualquier momento sin previo aviso.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              7. Enlaces
            </h2>
            <p className="text-gray-600 mb-6">
              Zerua Capital no ha revisado todos los sitios vinculados a su
              sitio web y no es responsable del contenido de dichos sitios
              vinculados. La inclusión de cualquier enlace no implica el
              respaldo por parte de Zerua Capital del sitio. El uso de cualquier
              sitio web vinculado es bajo el propio riesgo del usuario.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              8. Modificaciones
            </h2>
            <p className="text-gray-600 mb-6">
              Zerua Capital puede revisar estos términos de servicio para su
              sitio web en cualquier momento sin previo aviso. Al usar este
              sitio web, usted acepta estar sujeto a la versión actual de estos
              términos de servicio.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              9. Ley Aplicable
            </h2>
            <p className="text-gray-600 mb-6">
              Estos términos y condiciones se rigen e interpretan de acuerdo con
              las leyes de España y usted se somete irrevocablemente a la
              jurisdicción exclusiva de los tribunales en ese estado o
              ubicación.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
