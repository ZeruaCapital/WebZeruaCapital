"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacidad() {
  return (
    <main className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container-custom mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              En Zerua Capital, nos tomamos muy en serio la privacidad de
              nuestros usuarios. Esta política de privacidad describe cómo
              recopilamos, usamos y protegemos su información personal.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Información que Recopilamos
            </h2>
            <p className="text-gray-600 mb-6">
              Podemos recopilar información personal que usted nos proporciona
              voluntariamente cuando:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">Se registra en nuestro sitio web</li>
              <li className="mb-2">
                Solicita información sobre nuestros servicios
              </li>
              <li className="mb-2">Se comunica con nosotros</li>
              <li className="mb-2">Utiliza nuestros servicios</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Uso de la Información
            </h2>
            <p className="text-gray-600 mb-6">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">
                Proporcionar y mantener nuestros servicios
              </li>
              <li className="mb-2">Mejorar y personalizar su experiencia</li>
              <li className="mb-2">Comunicarnos con usted</li>
              <li className="mb-2">
                Cumplir con nuestras obligaciones legales
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Protección de Datos
            </h2>
            <p className="text-gray-600 mb-6">
              Implementamos medidas de seguridad técnicas y organizativas
              apropiadas para proteger su información personal contra el acceso
              no autorizado, la alteración, la divulgación o la destrucción.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Compartir Información
            </h2>
            <p className="text-gray-600 mb-6">
              No vendemos, intercambiamos ni transferimos su información
              personal a terceros sin su consentimiento, excepto cuando sea
              necesario para proporcionar nuestros servicios o cumplir con
              obligaciones legales.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Sus Derechos
            </h2>
            <p className="text-gray-600 mb-6">Usted tiene derecho a:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li className="mb-2">Acceder a su información personal</li>
              <li className="mb-2">Corregir información inexacta</li>
              <li className="mb-2">Solicitar la eliminación de sus datos</li>
              <li className="mb-2">Oponerse al procesamiento de sus datos</li>
              <li className="mb-2">Solicitar la portabilidad de sus datos</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Cookies y Tecnologías Similares
            </h2>
            <p className="text-gray-600 mb-6">
              Utilizamos cookies y tecnologías similares para mejorar su
              experiencia en nuestro sitio web. Puede controlar el uso de
              cookies a través de la configuración de su navegador.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Cambios en la Política de Privacidad
            </h2>
            <p className="text-gray-600 mb-6">
              Nos reservamos el derecho de modificar esta política de privacidad
              en cualquier momento. Los cambios entrarán en vigor inmediatamente
              después de su publicación en el sitio web.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Contacto
            </h2>
            <p className="text-gray-600 mb-6">
              Si tiene alguna pregunta sobre nuestra política de privacidad o el
              tratamiento de sus datos personales, no dude en contactarnos a
              través de nuestra página de contacto.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
