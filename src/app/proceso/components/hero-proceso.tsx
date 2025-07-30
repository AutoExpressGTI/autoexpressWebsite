"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroProceso() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/bosque.png"
          alt="Carretera con árboles"
          className="w-full h-full object-cover bg-center bg-cover"
          fill
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] flex justify-center items-center flex-col mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl flex justify-center items-center flex-col">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="mb-4"
            >
              <div className="inline-block bg-[var(--green)] px-6 py-4 md:px-8 md:py-5 rounded-lg shadow-lg">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  Así funciona el proceso legal:
                </h1>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="inline-block bg-orange-500 px-6 py-4 md:px-8 md:py-5 rounded-lg shadow-lg">
                <h2 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                  Infracciones, comparendos y multas
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
