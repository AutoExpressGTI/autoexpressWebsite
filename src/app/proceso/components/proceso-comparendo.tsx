"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProcesoComparendo() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            ¿Te llegó un <span className="text-green-500">comparendo</span> de tránsito?
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600"
          >
            Así es el proceso
          </motion.p>
        </motion.div>

        {/* Process Diagram */}
        <div className="relative">
          {/* Background Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-10">
              <Image src="/logoAutoExpress.webp" alt="Auto Express GTI Logo" fill className="object-contain" priority />
            </div>
          </motion.div>

          {/* Decorative Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-gray-300 opacity-10"></div>
            <div className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-2 border-gray-300 opacity-8"></div>
          </div>

          {/* Process Items */}
          <div className="relative z-10 py-12 md:py-16">
            {/* First Row - 2 items */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 md:mb-12">
              {/* Orden de comparendo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="bg-[#F3F3F3]  rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex-1"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Orden de comparendo</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Se genera al detectar la infracción y se notifica al conductor o propietario.
                </p>
              </motion.div>

              {/* Prescripción */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="bg-[#F3F3F3]  rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex-1"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Prescripción</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Si el comparendo no ha sido notificado dentro del plazo de prescripción, el afectado puede solicitar a
                  la autoridad
                </p>
              </motion.div>
            </div>

            {/* Second Row - 1 item centered */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="bg-[#F3F3F3]  rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Fallo y notificación</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Se emite la decisión. Si procede, se debe pagar la multa y tomar un curso de seguridad vial.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
