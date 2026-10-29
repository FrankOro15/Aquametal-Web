
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const correoPrivacidad = "administracion@aqua-metal.com.mx";

const secciones = [
  {
    id: "responsable",
    numero: "01",
    titulo: "Responsable de los datos personales",
    contenido: (
      <p>
        <strong>AQUAMETAL S.A. DE C.V.</strong>, con domicilio en Calle de
        Labriego No. 3, Jilotzingo, México, es responsable del tratamiento de los
        datos personales que se recaben a través de este sitio web, de conformidad
        con la legislación aplicable en materia de protección de datos personales.
      </p>
    ),
  },
  {
    id: "datos",
    numero: "02",
    titulo: "Datos personales que recopilamos",
    contenido: (
      <>
        <p>
          A través del formulario de contacto podemos recabar los siguientes
          datos:
        </p>
        <ul>
          <li>Nombre y dirección de correo electrónico.</li>
          <li>Número telefónico y nombre de la empresa, cuando corresponda.</li>
          <li>Material de interés, volumen requerido y detalles de la solicitud.</li>
        </ul>
        <p>
          Asimismo, Google reCAPTCHA puede procesar información técnica
          necesaria para ayudar a distinguir entre usuarios y envíos
          automatizados. Se recomienda no incluir datos personales sensibles
          en los mensajes.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    numero: "03",
    titulo: "Finalidades del tratamiento",
    contenido: (
      <>
        <p>
          Los datos personales se utilizan para las siguientes finalidades:
        </p>
        <ul>
          <li>Atender dudas, comentarios y solicitudes de información.</li>
          <li>Dar seguimiento a solicitudes de cotización.</li>
          <li>
            Conocer los requerimientos relacionados con materiales, productos,
            servicios y necesidades de fabricación.
          </li>
          <li>
            Contactar al solicitante para aclarar información relacionada con su
            petición.
          </li>
          <li>
            Proteger el formulario de contacto y ayudar a prevenir mensajes
            automatizados o abusivos mediante Google reCAPTCHA.
          </li>
        </ul>
        <p>
          Los datos se utilizarán para atender estas finalidades y no para
          fines incompatibles con ellas, salvo que exista una base legal
          aplicable.
        </p>
      </>
    ),
  },
  {
    id: "conservacion",
    numero: "04",
    titulo: "Protección y conservación de los datos",
    contenido: (
      <>
        <p>
          La empresa adoptará las medidas de seguridad administrativas,
          técnicas y físicas que correspondan para proteger los datos personales
          contra el acceso, uso o divulgación no autorizados.
        </p>
        <p>
          Los datos se conservarán durante el tiempo necesario para atender y dar
          seguimiento a la solicitud recibida, así como para cumplir las
          obligaciones legales aplicables. Cuando dejen de ser necesarios, se
          procederá a su eliminación o bloqueo, según corresponda, salvo que exista
          una obligación legal de conservarlos.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    numero: "05",
    titulo: "Servicios de terceros",
    contenido: (
      <>
        <p>
          Este sitio utiliza Google reCAPTCHA como herramienta de protección del
          formulario de contacto. Su funcionamiento puede implicar el
          tratamiento de información técnica por parte de Google, conforme a sus
          propias políticas y condiciones.
        </p>
        <p>
          En caso de que otros proveedores intervengan en el alojamiento,
          funcionamiento o gestión del sitio y tengan acceso a datos personales,
          dicho tratamiento deberá realizarse conforme a la legislación aplicable
          y a las condiciones correspondientes.
        </p>
        <p>
          Las transferencias de datos personales, cuando correspondan, se
          realizarán conforme a los requisitos legales aplicables.
        </p>
      </>
    ),
  },
  {
    id: "arco",
    numero: "06",
    titulo: "Derechos ARCO",
    contenido: (
      <>
        <p>
          El titular de los datos personales puede ejercer sus derechos de
          acceso, rectificación, cancelación y oposición (ARCO), de acuerdo con
          la legislación aplicable.
        </p>
        <p>
          Para presentar una solicitud, puede escribir a{" "}
          <a
            href={`mailto:${correoPrivacidad}`}
            className="font-medium text-blue-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-900"
          >
            {correoPrivacidad}
          </a>
          , indicando el derecho que desea ejercer y proporcionando la información
          necesaria para identificar la solicitud. La empresa informará sobre
          los requisitos y el procedimiento aplicable.
        </p>
      </>
    ),
  },
  {
    id: "limitacion",
    numero: "07",
    titulo: "Limitación del uso o divulgación",
    contenido: (
      <p>
        El titular puede solicitar información sobre los mecanismos disponibles
        para limitar el uso o divulgación de sus datos personales, así como
        presentar las solicitudes correspondientes mediante el correo de contacto
        indicado en este aviso.
      </p>
    ),
  },
  {
    id: "cookies",
    numero: "08",
    titulo: "Cookies y tecnologías similares",
    contenido: (
      <>
        <p>
          El sitio puede utilizar tecnologías necesarias para su funcionamiento y
          seguridad. Actualmente, el formulario de contacto integra Google
          reCAPTCHA, que puede utilizar cookies u otras tecnologías similares
          para prestar su servicio.
        </p>
        <p>
          La presencia y el funcionamiento de estas tecnologías dependen de la
          configuración del sitio y de los servicios integrados. Para conocer
          cómo Google trata la información, puedes consultar su{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-blue-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-900"
          >
            Política de Privacidad
            <ArrowUpRight size={13} />
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "actualizaciones",
    numero: "09",
    titulo: "Actualizaciones del aviso",
    contenido: (
      <p>
        Este aviso puede actualizarse cuando existan cambios en el funcionamiento
        del sitio, en las prácticas de tratamiento de datos o en las
        disposiciones aplicables. La versión vigente estará disponible en esta
        página.
      </p>
    ),
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen bg-slate-50 pb-16 text-slate-800"
        style={{ paddingTop: "10rem" }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Encabezado de la página */}
          <header className="mb-8 border-b border-slate-200 pb-6">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
              <ShieldCheck size={16} />
              Información legal
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Aviso de Privacidad
            </h1>

            <div className="mt-3 flex flex-col gap-1 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-3">
              <span>AQUAMETAL S.A. DE C.V.</span>
              <span className="hidden text-slate-300 sm:inline">|</span>
              <span>Última actualización: 27 de octubre de 2026</span>
            </div>
          </header>

          {/* Documento */}
          <div className="border border-slate-200 bg-white shadow-sm">
            <div className="divide-y divide-slate-200">
              {secciones.map((seccion) => (
                <article
                  key={seccion.id}
                  id={seccion.id}
                  className="px-5 py-6 sm:px-8 sm:py-7"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <span className="shrink-0 border-l-2 border-blue-700 pl-2 font-mono text-sm font-semibold text-blue-700">
                      {seccion.numero}
                    </span>

                    <h2 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                      {seccion.titulo}
                    </h2>
                  </div>

                  <div className="space-y-3 pl-0 text-sm leading-7 text-slate-600 sm:pl-10 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                    {seccion.contenido}
                  </div>
                </article>
              ))}
            </div>

            {/* Contacto al final del documento */}
            <div className="border-t border-slate-200 bg-slate-50 px-5 py-5 sm:px-8">
              <p className="text-sm leading-6 text-slate-600">
                Si tienes dudas sobre este aviso o deseas ejercer tus derechos
                ARCO, puedes escribir a{" "}
                <a
                  href={`mailto:${correoPrivacidad}`}
                  className="font-semibold text-blue-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-blue-900"
                >
                  {correoPrivacidad}
                </a>
                .
              </p>
            </div>
          </div>

          {/* Volver al inicio, fuera del documento */}
          <div className="mt-7 border-t border-slate-200 pt-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
