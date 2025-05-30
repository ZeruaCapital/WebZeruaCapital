"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <main className="bg-[#f7f8fa] min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container-custom mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">Aviso Legal</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Bienvenido a Zerua Capital. Este aviso legal regula el uso del
              sitio web www.zeruacapital.com (en adelante, el "Sitio Web").
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Información Legal
            </h2>
            <p className="text-gray-600 mb-6">
              En cumplimiento con el deber de información recogido en artículo
              10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
              de la Información y del Comercio Electrónico, le informamos que el
              Sitio Web y el portal www.zeruacapital.com (en adelante, el "Sitio
              Web") es propiedad de Zerua Capital, con domicilio en [Dirección].
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Uso del Sitio Web
            </h2>
            <p className="text-gray-600 mb-6">
              El acceso y/o uso de este Sitio Web le otorga la condición de
              USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones
              Generales de Uso aquí reflejadas. Las mencionadas condiciones
              serán de aplicación independientemente de las Condiciones
              Generales de Contratación que en su caso resulten de obligado
              cumplimiento.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Propiedad Intelectual
            </h2>
            <p className="text-gray-600 mb-6">
              Todos los contenidos del Sitio Web, incluyendo textos,
              fotografías, gráficos, imágenes, iconos, tecnología, enlaces,
              contenidos audiovisuales o sonoros, y su diseño gráfico y códigos
              fuente, son propiedad intelectual de Zerua Capital o de terceros,
              sin que puedan entenderse cedidos al USUARIO ninguno de los
              derechos de explotación reconocidos por la normativa vigente en
              materia de propiedad intelectual.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Exclusión de Garantías y Responsabilidad
            </h2>
            <p className="text-gray-600 mb-6">
              Zerua Capital no se hace responsable, en ningún caso, de los daños
              y perjuicios de cualquier naturaleza que pudieran ocasionar, a
              título enunciativo: errores u omisiones en los contenidos, falta
              de disponibilidad del portal o la transmisión de virus o programas
              maliciosos o lesivos en los contenidos.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Modificaciones
            </h2>
            <p className="text-gray-600 mb-6">
              Zerua Capital se reserva el derecho de efectuar sin previo aviso
              las modificaciones que considere oportunas en su Sitio Web,
              pudiendo cambiar, suprimir o añadir tanto los contenidos y
              servicios que se presten a través de la misma como la forma en la
              que éstos aparezcan presentados o localizados en su Sitio Web.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Enlaces
            </h2>
            <p className="text-gray-600 mb-6">
              En el caso de que en el Sitio Web se dispusiesen enlaces o
              hipervínculos hacía otros sitios de Internet, Zerua Capital no
              ejercerá ningún tipo de control sobre dichos sitios y contenidos.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Derecho de Exclusión
            </h2>
            <p className="text-gray-600 mb-6">
              Zerua Capital se reserva el derecho de denegar o retirar el acceso
              al Sitio Web y/o los servicios ofrecidos sin necesidad de
              preaviso, a instancia propia o de un tercero, a aquellos usuarios
              que incumplan las presentes Condiciones Generales de Uso.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
              Ley Aplicable y Jurisdicción
            </h2>
            <p className="text-gray-600 mb-6">
              La relación entre Zerua Capital y el USUARIO se regirá por la
              normativa española vigente y cualquier controversia se someterá a
              los Juzgados y tribunales de la ciudad de [Ciudad].
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
