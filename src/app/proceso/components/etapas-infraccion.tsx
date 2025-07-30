"use client"

import { motion } from "framer-motion"
import { etapas } from "@/app/data/etapas"
import EtapaCard from "./etapa-card"

export default function EtapasInfraccion() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[var(--background)] ">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Etapas de una Infracción de Tránsito:
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {etapas.map((etapa, index) => (
            <EtapaCard key={etapa.id} etapa={etapa} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
