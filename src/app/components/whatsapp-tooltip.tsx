"use client"

import Link from "next/link";
import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppTooltip() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar el tooltip después de 1 segundo
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Ocultar el tooltip después de 4 segundos
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 4000)

    // Repetir el ciclo cada 6 segundos
    const repeatTimer = setInterval(() => {
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 3000)
    }, 6000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
      clearInterval(repeatTimer)
    }
  }, [])

  return (
    <div className=" bottom-6 right-6 z-10 flex items-center gap-3">
      {/* Tooltip de texto que aparece y desaparece hacia la izquierda */}
      <div
        className={`
          bg-[var(--foreground)] text-white px-4 py-3 rounded-lg shadow-lg relative
          transition-all duration-500 ease-in-out transform
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"}
        `}
      >
        <span className="text-sm font-medium whitespace-nowrap">¡Escríbenos por WhatsApp!</span>
        {/* Flecha apuntando hacia el ícono */}
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-t-4 border-b-4 border-l-[var(--foreground)] border-t-transparent border-b-transparent"></div>
      </div>

      {/* Ícono de WhatsApp que siempre está visible */}
      <div className="bg-[var(--green)] text-white p-3 rounded-full shadow-lg cursor-pointer transition-colors duration-200">

        <Link href="https://api.whatsapp.com/send?phone=573002172285&text=Hola%2C%20quiero%20asesor%C3%ADa%20%F0%9F%98%83" target="_blank">
         <FaWhatsapp className="w-6 h-6" />
        </Link>
      </div>
    </div>
  )
}
