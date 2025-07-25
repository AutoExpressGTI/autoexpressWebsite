"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/camara.webp",
    title: "Fotomultas",
    description: "Impugnación con ahorro y estrategia legal personalizada.",
  },
  {
    id: 2,
    image: "/multa.webp",
    title: "Comparendos",
    description: "Alternativas legales, guía paso a paso. ",
  },
  {
    id: 3,
    image: "/alcohol.webp",
    title: "Alcoholemia",
    description: "Defensa integral para mitigar sanciones.",
  },
  {
    id: 4,
    image: "/idConduciendo.webp",
    title: "Reactivación de Licencia",
    description: "Asesoría completa. Tiempo estimado: 3 a 4 meses.",
  },
]

export default function SimpleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col md:hidden w-full max-w-sm mx-auto bg-[var(--background)]">
      {/* Contenedor del slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              {/* Imagen */}
              <div className="w-full h-48 bg-gray-100 flex justify-center items-center">
                <Image src={slide.image || "/placeholder.svg"} alt={slide.title} width={100} height={100}/>
              </div>

              {/* Contenido */}
              <div className="p-4 space-y-3">
                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 text-center">{slide.title}</h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm leading-relaxed text-center">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barra de navegación */}
      <div className="flex justify-center items-center space-x-2 py-4 bg-gray-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[var(--foreground)] w-8" : "bg-[var(--black)] w-2 hover:bg-gray-400"
            }`}
            aria-label={`Ir al servicio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
