"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { sendPresupuestoEmail } from "@/lib/send-email"
import { useActionState } from "react"

interface PresupuestoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PresupuestoModal({ isOpen, onClose }: PresupuestoModalProps) {
  const [state, formAction, isPending] = useActionState(sendPresupuestoEmail, null)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-md rounded-lg bg-black border border-yellow-500/20 p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-yellow-500/20 p-1 text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="mb-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-center drop-shadow-lg" style={{ width: 60, height: 60 }}>
              <Image
                src="/logo-tjf-new.png"
                alt="TJF CONSTRUCCIONES Logo"
                width={60}
                height={60}
                className="object-contain drop-shadow-md opacity-70"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white">Solicitar Presupuesto</h3>
          <p className="mt-2 text-sm text-gray-400">Complete el formulario y nos pondremos en contacto a la brevedad</p>
        </div>

        {state?.success && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-md">
            <p className="text-green-400 text-sm">{state.message}</p>
          </div>
        )}

        {state?.success === false && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md">
            <p className="text-red-400 text-sm">{state.message}</p>
          </div>
        )}

        <form action={formAction} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="modal-name" className="text-sm font-medium text-white">
              Nombre
            </label>
            <input
              id="modal-name"
              name="nombre"
              required
              className="rounded-md border border-gray-700 bg-black px-3 py-2 text-white"
              placeholder="Tu nombre"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="modal-email" className="text-sm font-medium text-white">
              Email
            </label>
            <input
              id="modal-email"
              name="email"
              type="email"
              required
              className="rounded-md border border-gray-700 bg-black px-3 py-2 text-white"
              placeholder="tu@email.com"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="modal-phone" className="text-sm font-medium text-white">
              Teléfono
            </label>
            <input
              id="modal-phone"
              name="telefono"
              type="tel"
              required
              className="rounded-md border border-gray-700 bg-black px-3 py-2 text-white"
              placeholder="+54 000 000 0000"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="modal-project" className="text-sm font-medium text-white">
              Tipo de Proyecto
            </label>
            <select
              id="modal-project"
              name="tipoProyecto"
              required
              className="rounded-md border border-gray-700 bg-black px-3 py-2 text-white"
            >
              <option value="">Seleccione una opción</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
              <option value="industrial">Industrial</option>
              <option value="remodelacion">Remodelación</option>
              <option value="mantenimiento">Mantenimiento</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="modal-message" className="text-sm font-medium text-white">
              Detalles del Proyecto
            </label>
            <textarea
              id="modal-message"
              name="mensaje"
              required
              className="min-h-[100px] rounded-md border border-gray-700 bg-black px-3 py-2 text-white"
              placeholder="Describa brevemente su proyecto"
            />
          </div>
          <Button type="submit" disabled={isPending} className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">
            {isPending ? "Enviando..." : "Enviar Solicitud"}
          </Button>
        </form>
      </div>
    </div>
  )
}
