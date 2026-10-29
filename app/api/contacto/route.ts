
import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function plantillaBase(contenido: string) {
  const logoUrl = "https://www.aqua-metal.com/logo.png";

  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#1e293b;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
        style="background:#f1f5f9;padding:32px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0"
              style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">

              <tr>
                <td style="height:5px;background:#1d4ed8;"></td>
              </tr>

              <tr>
                <td style="padding:24px 28px;border-bottom:1px solid #e2e8f0;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="font-size:11px;font-weight:bold;letter-spacing:1px;color:#64748b;">
                        MANUFACTURA Y SOLUCIONES INDUSTRIALES
                      </td>
                      <td align="right" width="130">
                        <img src="${logoUrl}" alt="Aquametal"
                          width="120"
                          style="display:block;width:120px;max-width:100%;height:auto;border:0;">
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:30px 28px 34px;">
                  ${contenido}
                </td>
              </tr>

              <tr>
                <td style="padding:20px 28px;background:#0f172a;color:#cbd5e1;font-size:12px;line-height:1.7;">
                  <strong style="color:#ffffff;">Aquametal</strong><br>
                  Este correo fue generado desde el formulario de contacto de nuestro sitio web. NO CONTESTAR, este es un mensaje automático.<br>
                  <a href="https://aqua-metal.com.mx"
                    style="color:#93c5fd;text-decoration:none;">aqua-metal.com.mx</a>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

// CORREO 1: NOTIFICACIÓN PARA VENTAS
function contenidoVentas(datos: {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  material: string;
  volumen: string;
  detalles: string;
}) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;">

      <span style="display:inline-block;padding:6px 12px;background:#dbeafe;color:#1e40af;font-size:11px;font-weight:bold;border-radius:20px;">
        NUEVA SOLICITUD
      </span>

      <h1 style="margin:18px 0 10px;font-size:24px;line-height:1.3;">
        Solicitud de cotización
      </h1>

      <p style="margin:0 0 28px;color:#64748b;font-size:14px;line-height:1.7;">
        Se ha recibido un nuevo formulario de contacto desde el sitio web de
        <strong>Aquametal</strong>.
      </p>

      <h2 style="font-size:15px;color:#334155;margin:0 0 12px;">
        Datos de contacto
      </h2>

      <table role="presentation" width="100%" cellpadding="10" cellspacing="0"
        style="border-collapse:collapse;font-size:14px;margin-bottom:28px;">
        <tr>
          <td width="35%" style="background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;">Nombre</td>
          <td style="border-bottom:1px solid #e2e8f0;">${datos.nombre}</td>
        </tr>
        <tr>
          <td style="background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;">Empresa</td>
          <td style="border-bottom:1px solid #e2e8f0;">${datos.empresa}</td>
        </tr>
        <tr>
          <td style="background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;">Correo</td>
          <td style="border-bottom:1px solid #e2e8f0;">
            <a href="mailto:${datos.correo}" style="color:#2563eb;text-decoration:none;">
              ${datos.correo}
            </a>
          </td>
        </tr>
        <tr>
          <td style="background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;">Teléfono</td>
          <td style="border-bottom:1px solid #e2e8f0;">${datos.telefono}</td>
        </tr>
      </table>

      <h2 style="font-size:15px;color:#334155;margin:0 0 12px;">
        Requerimientos del proyecto
      </h2>

      <table role="presentation" width="100%" cellpadding="10" cellspacing="0"
        style="border-collapse:collapse;font-size:14px;margin-bottom:28px;">
        <tr>
          <td width="35%" style="background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;">Material</td>
          <td style="border-bottom:1px solid #e2e8f0;font-weight:bold;">${datos.material}</td>
        </tr>
        <tr>
          <td style="background:#f8fafc;border-bottom:1px solid #e2e8f0;color:#64748b;">Volumen estimado</td>
          <td style="border-bottom:1px solid #e2e8f0;">${datos.volumen}</td>
        </tr>
      </table>

      <h2 style="font-size:15px;color:#334155;margin:0 0 12px;">
        Detalles adicionales
      </h2>

      <div style="padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #2563eb;border-radius:6px;font-size:14px;line-height:1.8;color:#334155;white-space:pre-wrap;overflow-wrap:anywhere;">${datos.detalles}</div>

      <p style="margin:24px 0 0;font-size:12px;color:#64748b;">
        Notificación automática de Aquametal Web System.
      </p>

    </div>
  `;
}

// CORREO 2: CONFIRMACIÓN PARA EL CLIENTE
function contenidoCliente(datos: {
  nombre: string;
  material: string;
  volumen: string;
}) {
  return `
    <div style="padding:12px 0 8px;">

      <h2 style="margin:12px 0 18px;color:#173b2b;font-size:26px;line-height:1.35;font-weight:700;">
        ¡Gracias por tu interés en Aqua Metal!
      </h2>

      <p style="margin:0 0 22px;color:#526158;font-size:15px;line-height:1.8;">
        Hola, <strong>${datos.nombre}</strong>:
      </p>

      <p style="margin:0 0 18px;color:#526158;font-size:15px;line-height:1.8;">
        Hemos recibido correctamente tu solicitud de cotización. Agradecemos que consideres a Aqua Metal para tu proyecto.
      </p>

      <p style="margin:0 0 12px;color:#173b2b;font-size:17px;font-weight:700;">
        ¿Qué sigue?
      </p>

      <p style="margin:0 0 18px;color:#526158;font-size:15px;line-height:1.8;">
        En breve, un miembro de nuestro equipo se pondrá en contacto contigo para coordinar una reunión, conocer más sobre tus necesidades y conversar acerca de las soluciones que podemos ofrecerte.
      </p>

      <p style="margin:0 0 24px;color:#526158;font-size:15px;line-height:1.8;">
        Mientras tanto, si tienes información adicional sobre tu proyecto, puedes compartirla respondiendo a este correo.
      </p>

      <div style="margin:0 0 24px;padding:20px 22px;background-color:#f2f6f3;border-left:4px solid #347653;border-radius:6px;">

        <p style="margin:0 0 8px;color:#173b2b;font-size:16px;font-weight:700;">
          El siguiente paso: agendar una reunión
        </p>

        <p style="margin:0;color:#526158;font-size:14px;line-height:1.8;">
          Nuestro equipo dará seguimiento a tu solicitud para acordar una fecha y hora convenientes.
        </p>

      </div>

      <p style="margin:0 0 6px;color:#526158;font-size:15px;line-height:1.8;">
        Atentamente,
      </p>

      <p style="margin:0 0 5px;color:#173b2b;font-size:15px;font-weight:700;">
        Equipo de Aqua Metal
      </p>

      <p style="margin:0;color:#718078;font-size:13px;line-height:1.7;">
        Manufactura de precisión y soluciones para la industria.
      </p>

    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Faltan variables de entorno de Resend.");

      return NextResponse.json(
        { ok: false, error: "El servicio de correo no está configurado." },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Validar Google reCAPTCHA antes de procesar el envío
    const captchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const captchaToken = String(body.captchaToken ?? "").trim();

    if (!captchaSecret) {
      console.error("Falta la variable RECAPTCHA_SECRET_KEY.");

      return NextResponse.json(
        {
          ok: false,
          error: "El servicio de verificación no está configurado.",
        },
        { status: 500 }
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        {
          ok: false,
          error: "Completa la verificación de seguridad.",
        },
        { status: 400 }
      );
    }

    let captchaResult: { success?: boolean };

    try {
      const captchaResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            secret: captchaSecret,
            response: captchaToken,
          }),
          cache: "no-store",
        }
      );

      if (!captchaResponse.ok) {
        throw new Error("Google reCAPTCHA no respondió correctamente.");
      }

      captchaResult = await captchaResponse.json();
    } catch (error) {
      console.error("No se pudo verificar reCAPTCHA:", error);

      return NextResponse.json(
        {
          ok: false,
          error:
            "No fue posible verificar la seguridad. Inténtalo nuevamente.",
        },
        { status: 503 }
      );
    }

    if (captchaResult.success !== true) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "La verificación de seguridad no fue válida. Inténtalo nuevamente.",
        },
        { status: 400 }
      );
    }

    const nombre = String(body.nombre ?? "").trim();
    const empresa = String(body.empresa ?? "").trim() || "No especificada";
    const correo = String(body.correo ?? "").trim();
    const telefono = String(body.telefono ?? "").trim();
    const material = String(body.material ?? "").trim() || "No especificado";
    const volumen = String(body.volumen ?? "").trim() || "No especificado";
    const detalles = String(body.detalles ?? "").trim();

    if (!nombre || !correo || !telefono) {
      return NextResponse.json(
        { ok: false, error: "Completa los campos obligatorios." },
        { status: 400 }
      );
    }

    if (
      nombre.length > 120 ||
      empresa.length > 160 ||
      correo.length > 254 ||
      telefono.length > 40 ||
      material.length > 120 ||
      volumen.length > 120 ||
      detalles.length > 1500
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "Uno o más campos exceden el límite permitido.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { ok: false, error: "Escribe un correo electrónico válido." },
        { status: 400 }
      );
    }

    const safe = {
      nombre: escapeHtml(nombre),
      empresa: escapeHtml(empresa),
      correo: escapeHtml(correo),
      telefono: escapeHtml(telefono),
      material: escapeHtml(material),
      volumen: escapeHtml(volumen),
      detalles: escapeHtml(detalles || "Sin detalles adicionales."),
    };

    const resend = new Resend(apiKey);

    // CORREO 1: VENTAS. Es el envío obligatorio.
    let correoVentas;

    try {
      correoVentas = await resend.emails.send({
        from,
        to: [to],
        replyTo: correo,
        subject: `Solicitud de cotización: ${nombre}`,
        html: plantillaBase(
          contenidoVentas({
            nombre: safe.nombre,
            empresa: safe.empresa,
            correo: safe.correo,
            telefono: safe.telefono,
            material: safe.material,
            volumen: safe.volumen,
            detalles: safe.detalles,
          })
        ),
        text: [
          "Nueva solicitud de cotización desde la página web de Aquametal.",
          "",
          `Nombre: ${nombre}`,
          `Empresa: ${empresa}`,
          `Correo: ${correo}`,
          `Teléfono: ${telefono}`,
          `Material: ${material}`,
          `Volumen estimado: ${volumen}`,
          "",
          "Detalles del proyecto:",
          detalles || "Sin detalles adicionales.",
        ].join("\n"),
      });
    } catch (error) {
      console.error("Error al enviar el correo de ventas:", error);

      return NextResponse.json(
        {
          ok: false,
          error:
            "No se pudo enviar tu solicitud. Inténtalo nuevamente más tarde.",
        },
        { status: 502 }
      );
    }

    if (correoVentas.error || !correoVentas.data?.id) {
      console.error(
        "No se pudo confirmar el envío del correo de ventas:",
        correoVentas.error
      );

      return NextResponse.json(
        {
          ok: false,
          error:
            "No se pudo enviar tu solicitud. Inténtalo nuevamente más tarde.",
        },
        { status: 502 }
      );
    }

    // CORREO 2: CONFIRMACIÓN AL CLIENTE. Es opcional.
    try {
      const correoCliente = await resend.emails.send({
        from,
        to: [correo],
        subject: "Hemos recibido tu solicitud de cotización | Aquametal",
        html: plantillaBase(
          contenidoCliente({
            nombre: safe.nombre,
            material: safe.material,
            volumen: safe.volumen,
          })
        ),
        text: [
          `Hola, ${nombre}.`,
          "",
          "Hemos recibido tu solicitud de cotización correctamente.",
          "Nuestro equipo revisará la información de tu proyecto y dará seguimiento.",
          "",
          `Material: ${material}`,
          `Volumen estimado: ${volumen}`,
          "",
          "Si cuentas con planos técnicos, nuestro equipo te indicará cómo compartirlos.",
          "",
          "Saludos,",
          "Equipo Aquametal",
        ].join("\n"),
      });

      if (correoCliente.error) {
        console.error(
          "La solicitud de ventas fue aceptada, pero falló la confirmación al cliente:",
          correoCliente.error
        );
      }
    } catch (error) {
      console.error(
        "Falló la confirmación al cliente; el correo de ventas ya fue aceptado:",
        error
      );
    }

    // El formulario depende únicamente del envío aceptado por Resend a ventas.
    return NextResponse.json({
      ok: true,
      id: correoVentas.data.id,
    });
  } catch (error) {
    console.error("Error en la ruta de contacto:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Ocurrió un error al procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}
