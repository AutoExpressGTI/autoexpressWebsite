"use client"

import { motion } from "framer-motion"
import { Lightbulb } from "lucide-react"

export default function PrescripcionComparendo() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[var(--background)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Info */}
          <div>
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                ¿Tu comparendo ya prescribió?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600">Esto debes saber</p>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex">
                <div className="bg-orange-500 p-6 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                </div>
                <div className="p-6 flex-1 bg-[#D9D9D9] ">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-gray-800 font-medium text-lg italic"
                  >
                    En Colombia, los comparendos prescriben a los 3 años.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Timeline */}
          <div className="relative  ">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-orange-300 origin-top"
            />

            {/* Timeline Items */}
            <div className="space-y-8">
              {/* Item 1 - Plazo general */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10"
                >
                  1
                </motion.div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Plazo general</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Prescribe si han pasado 3 años desde la infracción, sin cobro efectivo.
                  </p>
                </div>
              </motion.div>

              {/* Item 2 - Interrupción del plazo */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10"
                >
                  2
                </motion.div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1 ">
                  <h3 className="text-xl font-bold text-gray-400 mb-3">Interrupción del plazo</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Si se notifica un requerimiento de pago al titular del vehículo.
                  </p>
                </div>
              </motion.div>

              {/* Item 3 - Nueva cuenta regresiva */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.8, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10"
                >
                  3
                </motion.div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-400 mb-3">Nueva cuenta regresiva</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Comienza un nuevo plazo de 3 años desde la notificación efectiva.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
