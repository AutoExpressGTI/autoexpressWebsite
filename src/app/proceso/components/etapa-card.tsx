"use client"

import { motion } from "framer-motion"
import type { Etapa } from "@/app/data/etapas"

interface EtapaCardProps {
  etapa: Etapa
  index: number
}

export default function EtapaCard({ etapa, index }: EtapaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="bg-[#D9D9D9]  rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header with number */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3 + index * 0.2,
        }}
        viewport={{ once: true }}
        className={`${etapa.color} px-6 py-8 text-center origin-left`}
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.2,
            type: "spring",
            stiffness: 200,
          }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          {etapa.numero}
        </motion.span>
      </motion.div>

      {/* Content */}
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.7 + index * 0.2,
          }}
          viewport={{ once: true }}
          className={`text-xl md:text-2xl font-bold mb-4 text-center ${
            etapa.color === "bg-orange-500"
              ? "text-orange-600"
              : etapa.color === "bg-green-500"
                ? "text-green-600"
                : etapa.color === "bg-red-500"
                  ? "text-red-600"
                  : "text-yellow-600"
          }`}
        >
          {etapa.titulo}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.9 + index * 0.2,
          }}
          viewport={{ once: true }}
          className="text-gray-700 leading-relaxed text-center"
        >
          {etapa.descripcion}
        </motion.p>
      </div>
    </motion.div>
  )
}
