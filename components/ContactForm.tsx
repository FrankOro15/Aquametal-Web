
"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Send,
  CheckCircle,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [detallesLength, setDetallesLength] = useState(0);

  const captchaRef = useRef<ReCAPTCHA>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const inputClass =
    "w-full rounded-md border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/10";

  const labelClass =
    "mb-1.5 block text-xs font-semibold text-slate-700";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "sending" || status === "success") return;

    if (!captchaToken) {
      setStatus("error");
      setErrorMessage(
        "Completa la verificación de Google antes de enviar tu solicitud."
      );
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    const payload = {
      nombre: String(formData.get("nombre") ?? "").trim(),
      empresa: String(formData.get("empresa") ?? "").trim(),
      correo: String(formData.get("correo") ?? "").trim(),
      telefono: String(formData.get("telefono") ?? "").trim(),
      material: String(formData.get("material") ?? "").trim(),
      volumen: String(formData.get("volumen") ?? "").trim(),
      detalles: String(formData.get("detalles") ?? "").trim(),
      captchaToken,
    };

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ||
            "No se pudo enviar tu solicitud. Inténtalo nuevamente."
        );
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo conectar con el servidor. Inténtalo nuevamente."
      );

      setCaptchaToken(null);
      captchaRef.current?.reset();
    }
  }

  if (!siteKey) {
    return (
      <div
        role="alert"
        className="border border-red-200 bg-red-50 p-4 text-sm text-red-700"
      >
        No se encontró la clave pública de reCAPTCHA. Revisa tu archivo
        .env.local y reinicia el servidor.
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="w-full overflow-hidden border border-slate-200 bg-white shadow-sm">
        <div className="h-1 w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300" />

        <div className="flex min-h-[360px] flex-col items-center justify-center px-6 py-10 text-center sm:px-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
            <CheckCircle className="h-7 w-7 text-blue-700" />
          </div>

          <h2 className="mt-4 text-xl font-bold text-slate-900">
            ¡Solicitud enviada!
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
            Recibimos tu solicitud correctamente. Nuestro equipo revisará
            la información y se pondrá en contacto contigo para coordinar
            una reunión y conocer mejor tus necesidades.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-300" />

      <form onSubmit={handleSubmit}>
        <div className="p-5 sm:p-6 lg:p-7">
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
              Atención personalizada
            </span>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
              Solicita una cotización
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Cuéntanos sobre tu proyecto y los requerimientos de tu pieza.
            </p>
          </div>

          {/* Datos de contacto */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className={labelClass}>
                Nombre completo *
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                maxLength={120}
                required
                placeholder="Ej. Carlos Mendoza"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="empresa" className={labelClass}>
                Empresa / Industria
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                autoComplete="organization"
                maxLength={160}
                placeholder="Nombre de tu empresa (opcional)"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="correo" className={labelClass}>
                Correo electrónico *
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                placeholder="contacto@empresa.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="telefono" className={labelClass}>
                Teléfono / WhatsApp *
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                required
                placeholder="55 0000 0000"
                className={inputClass}
              />
            </div>
          </div>

          {/* Requerimientos del proyecto */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <h3 className="mb-4 text-sm font-bold text-slate-900">
              Requerimientos del proyecto
            </h3>

            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
              <div>
                <label htmlFor="material" className={labelClass}>
                  Material requerido
                </label>
                <select
                  id="material"
                  name="material"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="">Seleccionar material...</option>
                  <option value="acero">Acero (carbono / inoxidable)</option>
                  <option value="aluminio">Aluminio</option>
                  <option value="bronce">Bronce</option>
                  <option value="laton">Latón</option>
                  <option value="cobre">Cobre</option>
                  <option value="otro">Otro material especial</option>
                </select>
              </div>

              <div>
                <label htmlFor="volumen" className={labelClass}>
                  Volumen estimado
                </label>
                <input
                  id="volumen"
                  name="volumen"
                  type="text"
                  maxLength={120}
                  placeholder="Ej. 5,000 piezas"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Documentación técnica */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <h3 className="text-sm font-bold text-slate-900">
              Documentación técnica
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              ¿Cuentas con un plano técnico? Envíanos tu solicitud y nuestro
              equipo te indicará cómo compartir la documentación necesaria
              para cotizar tu proyecto.
            </p>
          </div>

          {/* Detalles adicionales */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <label htmlFor="detalles" className={labelClass}>
              Detalles adicionales
            </label>
            <textarea
              id="detalles"
              name="detalles"
              rows={3}
              maxLength={1500}
              onChange={(event) =>
                setDetallesLength(event.currentTarget.value.length)
              }
              placeholder="Dimensiones, tolerancias, tratamientos o fecha de entrega..."
              className={`${inputClass} resize-y`}
            />
            <p className="mt-1 text-right text-xs text-slate-500">
              Te quedan {1500 - detallesLength} caracteres
            </p>
          </div>

          {/* Google reCAPTCHA */}
          <div className="mt-6 border-t border-slate-100 pt-5">
            <p className={labelClass}>
              Verificación de seguridad *
            </p>

            <ReCAPTCHA
              ref={captchaRef}
              sitekey={siteKey}
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
              onErrored={() => {
                setCaptchaToken(null);
                setErrorMessage(
                  "No se pudo cargar la verificación. Revisa tu conexión e inténtalo nuevamente."
                );
                setStatus("error");
              }}
            />
          </div>

          {/* Mensaje de error */}
          {status === "error" && (
            <div
              role="alert"
              className="mt-5 flex items-start gap-2 border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Envío */}
          <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="min-w-0 flex-1 space-y-2">
              <p className="text-xs text-slate-500">
                Los campos marcados con * son obligatorios.
              </p>
              <p className="break-words text-xs leading-5 text-slate-500">
                Al enviar esta solicitud, puedes consultar cómo tratamos tus
                datos personales en nuestro{" "}
                <a
                  href="/privacidad"
                  className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  Aviso de privacidad
                </a>
                .
              </p>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-md bg-blue-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar solicitud
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
