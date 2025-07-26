"use client"

import { AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (

    <section className="w-full flex flex-col bg-[var(--background)]">
      
<div className="w-ful">
  <div className="max-w-[1200px] mx-auto flex flex-wrap md:flex-nowrap w-full">
    
    {/* Primera imagen */}
    <article className="relative flex flex-col gap-6 text-white  justify-center items-center w-full md:w-1/2 h-[300px] md:h-[400px] bg-[url('/empresariaConduciendo.webp')] bg-cover bg-center bg-no-repeat">
      <Image
        src="/lupa.webp"
        alt="Icono de lupa"
        width={100}
        height={100}
        className="object-contain"
      />
      <strong>Evita pérdida de tiempo</strong>
    </article>

    {/* Segunda imagen */}
    <article className="relative flex flex-col gap-6 text-white justify-center items-center w-full md:w-1/2 h-[300px] md:h-[400px] bg-[url('/negocios.webp')] bg-cover bg-center bg-no-repeat">
      <Image
        src="/reloj.webp"
        alt="Icono de reloj"
        width={100}
        height={100}
        className="object-contain"
      />
      <strong>Asesoría personalizada</strong>

    </article>

  </div>
</div>




      <div className="w-full bg-[var(--red)] overflow-hidden">
        <div className="flex banner-scroll min-w-max">
          <div className="flex items-center gap-3 text-white font-medium text-sm md:text-base whitespace-nowrap px-4 py-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <span>
              Los tiempos dependen de la Secretaría de Tránsito, no de AutoExpress. AutoExpress garantiza la gestión
              transparente, no el resultado.
            </span>
            <span className="mx-8">•</span>
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <span>
              Los tiempos dependen de la Secretaría de Tránsito, no de AutoExpress. AutoExpress garantiza la gestión
              transparente, no el resultado.
            </span>
            <span className="mx-8">•</span>
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <span>
              Los tiempos dependen de la Secretaría de Tránsito, no de AutoExpress. AutoExpress garantiza la gestión
              transparente, no el resultado.
            </span>
            <span className="mx-8">•</span>
          </div>

          {/* Duplicamos el contenido para el efecto infinito */}
          <div className="flex items-center gap-3 text-yellow-900 font-medium text-sm md:text-base whitespace-nowrap px-4 py-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <span>
              Los tiempos dependen de la Secretaría de Tránsito, no de AutoExpress. AutoExpress garantiza la gestión
              transparente, no el resultado.
            </span>
            <span className="mx-8">•</span>
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <span>
              Los tiempos dependen de la Secretaría de Tránsito, no de AutoExpress. AutoExpress garantiza la gestión
              transparente, no el resultado.
            </span>
            <span className="mx-8">•</span>
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <span>
              Los tiempos dependen de la Secretaría de Tránsito, no de AutoExpress. AutoExpress garantiza la gestión
              transparente, no el resultado.
            </span>
            <span className="mx-8">•</span>
          </div>
        </div>
      </div>
    </section>
  )
}

