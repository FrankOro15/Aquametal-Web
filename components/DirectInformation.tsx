import { Mail, Phone, MapPin, Clock3 } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "CORREO ELECTRÓNICO",
    value: "ventas@aqua-metal.com.mx",
    href: "mailto:ventas@aqua-metal.com.mx",
  },
  {
    icon: Phone,
    label: "TELÉFONO DE CONTACTO",
    value: "55 5084 6281",
    href: "tel:+525550846281",
  },
  {
    icon: MapPin,
    label: "UBICACIÓN",
    value: "Santa Ana Jilotzingo, Estado de México",
  },
];

export default function DirectInformation() {
  return (
    <aside
      className="relative isolate flex h-full w-full flex-col justify-between overflow-hidden border border-slate-800 bg-slate-900 p-6 text-white sm:p-8"
      style={{
        backgroundImage: "url('/images/contacto-info.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa oscura sobre la imagen */}
      <div
        className="absolute inset-0 -z-10 bg-slate-950/75"
        aria-hidden="true"
      />

      {/* Sección superior */}
      <div>
        <div className="mb-7">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            Estamos para ayudarte
          </span>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight">
            Información directa
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Ponte en contacto con nuestro equipo para resolver tus dudas o
            consultar los detalles de tu proyecto.
          </p>
        </div>

        {/* Datos de contacto */}
        <div className="space-y-6">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-blue-400/30 bg-blue-500/10">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>

                <div className="min-w-0 pt-1">
                  <p className="text-[11px] font-bold tracking-widest text-slate-400">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block break-words text-sm font-semibold text-white transition-colors hover:text-blue-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold leading-6 text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sección inferior: horario */}
      <div className="mt-8">
        <div className="border border-white/15 bg-slate-950/50 p-5">
          <div className="flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-blue-400" />

            <h3 className="text-sm font-bold text-white">
              Horario de atención
            </h3>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Lunes a viernes
            <br />
            9:00 a. m. a 6:00 p. m.
          </p>
        </div>

        <div className="mt-6 h-1 w-20 bg-blue-600" />
      </div>
    </aside>
  );
}