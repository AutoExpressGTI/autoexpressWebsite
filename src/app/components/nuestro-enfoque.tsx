"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function NuestroEnfoque() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true })
  const isInView2 = useInView(ref2, { once: true })

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-100 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          
          {/* Círculos decorativos */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-96 h-96 rounded-full border-4 border-gray-300"></div>
            <div className="absolute w-80 h-80 rounded-full border-2 border-gray-300"></div>
            <div className="absolute w-64 h-64 rounded-full border-2 border-gray-300"></div>
          </div>

          {/* Logo de fondo */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-5 relative">
              <Image
                src="/logoAutoExpress.webp"
                alt="Logo de la empresa"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Contenido visible */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-12 md:mb-16"
            >
              Nuestro enfoque
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Misión */}
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8"
              >
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--yellow)] text-center">Misión</h3>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                  Nuestra misión es proporcionar asesoramiento y representación legal especializada en tránsito,
                  mediante un equipo de expertos que aplican leyes y decretos vigentes, garantizando la satisfacción y
                  tranquilidad de nuestros clientes.
                </p>
              </motion.div>

              {/* Visión */}
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8"
              >
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--yellow)] text-center">Visión</h3>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                  Ser la empresa líder en soluciones legales, protegiendo los derechos de nuestros clientes,
                  proporcionando una experiencia eficiente y transparente en la resolución de fórmulas y comprendemos.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
