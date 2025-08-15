"use server"

import { Resend } from "resend"

type ActionState = { success: boolean; message: string }

function getResend(): Resend | null {
  // 1) Intentar la convención estándar
  let key = process.env.RESEND_API_KEY?.trim()

  // 2) Auto-descubrir (útil cuando la key se inyecta con su propio nombre,
  //    por ejemplo `re_Abc123=actual_key`)
  if (!key) {
    for (const [envName, envValue] of Object.entries(process.env)) {
      if (envName.startsWith("re_")) {
        key = envName.trim() // el valor está en el nombre de la variable
        break
      }
      if (typeof envValue === "string" && envValue.startsWith("re_")) {
        key = envValue.trim()
        break
      }
    }
  }

  // 3) Validaciones
  if (!key) {
    console.warn(
      "[Resend] No se encontró ninguna API Key. Añádela como RESEND_API_KEY o variable que empiece por re_.*",
    )
    return null
  }
  if (!key.startsWith("re_")) {
    console.error(`[Resend] API Key inválida (no empieza con 're_'): "${key}"`)
    return null
  }

  return new Resend(key)
}

export async function sendPresupuestoEmail(_prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const nombre = formData.get("nombre") as string
  const email = formData.get("email") as string
  const telefono = formData.get("telefono") as string
  const tipoProyecto = formData.get("tipoProyecto") as string
  const mensaje = formData.get("mensaje") as string

  try {
    const resend = getResend()
    if (!resend) {
      return {
        success: false,
        message:
          "Error de configuración: la API Key de Resend es inválida o falta. Verifica tu RESEND_API_KEY y vuelve a intentarlo.",
      }
    }

    const { error } = await resend.emails.send({
      // Usar dominio de prueba de Resend mientras configuras el tuyo
      from: "TJF Construcciones <onboarding@resend.dev>",
      to: ["obras@grupotjf.com"],
      subject: `Nueva solicitud de presupuesto - ${tipoProyecto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">
            Nueva Solicitud de Presupuesto
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Teléfono:</strong> <a href="tel:${telefono}">${telefono}</a></p>
            <p><strong>Tipo de Proyecto:</strong> ${tipoProyecto}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Detalles del Proyecto:</h3>
            <p style="background: #f0f0f0; padding: 15px; border-radius: 5px; line-height: 1.6;">
              ${mensaje}
            </p>
          </div>
          <hr style="border: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            Este email fue enviado desde el formulario de presupuesto de TJF CONSTRUCCIONES
          </p>
        </div>
      `,
      reply_to: email,
    })

    if (error) {
      console.error("Resend API error:", error)
      return { success: false, message: error.message ?? "Error al enviar email" }
    }

    return { success: true, message: "Presupuesto enviado correctamente. Te contactaremos pronto." }
  } catch (err: any) {
    console.error("Unhandled error:", err)
    return { success: false, message: err.message ?? "Error desconocido" }
  }
}

export async function sendContactEmail(_prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const nombre = formData.get("nombre") as string
  const email = formData.get("email") as string
  const telefono = formData.get("telefono") as string
  const mensaje = formData.get("mensaje") as string

  try {
    const resend = getResend()
    if (!resend) {
      return {
        success: false,
        message:
          "Error de configuración: la API Key de Resend es inválida o falta. Verifica tu RESEND_API_KEY y vuelve a intentarlo.",
      }
    }

    const { error } = await resend.emails.send({
      from: "TJF Construcciones <onboarding@resend.dev>",
      to: ["obras@grupotjf.com"],
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFD700; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">
            Nuevo Mensaje de Contacto
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Teléfono:</strong> <a href="tel:${telefono}">${telefono}</a></p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Mensaje:</h3>
            <p style="background: #f0f0f0; padding: 15px; border-radius: 5px; line-height: 1.6;">
              ${mensaje}
            </p>
          </div>
          <hr style="border: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            Este email fue enviado desde el formulario de contacto de TJF CONSTRUCCIONES
          </p>
        </div>
      `,
      reply_to: email,
    })

    if (error) {
      console.error("Resend API error:", error)
      return { success: false, message: error.message ?? "Error al enviar email" }
    }

    return { success: true, message: "Mensaje enviado correctamente. Te responderemos pronto." }
  } catch (err: any) {
    console.error("Unhandled error:", err)
    return { success: false, message: err.message ?? "Error desconocido" }
  }
}
