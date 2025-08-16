"use client"

import { motion } from "framer-motion"
import { faqs } from "../data/faqs"
import FAQItem from "./faq-item"
import { FaWhatsapp } from "react-icons/fa6"
import Link from "next/link"

export default function PreguntasFrecuentes() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-100" id="faq">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Preguntas frecuentes</h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg mb-12 md:mb-16"
        >
          <div className="px-6 md:px-8">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold text-gray-800 mb-4"
          >
            ¿Tienes dudas sobre tu comparendo o fotomulta?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 text-lg"
          >
            Recibe asesoría legal clara, rápida y sin filas.
          </motion.p>

            <Link href="https://api.whatsapp.com/send?phone=573002172285&text=Hola%2C%20quiero%20asesor%C3%ADa%20%F0%9F%98%83" target="_blank">
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.5,
                delay: 0.7,
                type: "spring",
                stiffness: 120,
                }}
                viewport={{ once: true }}
                whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--green)] hover:bg-green-600 text-white px-8 py-4 rounded-lg flex items-center gap-3 mx-auto transition-colors duration-200 text-lg font-medium"
            >
                <motion.div
                initial={{ rotate: -10 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: true }}
                >
                <FaWhatsapp />
                </motion.div>
                Escríbenos por WhatsApp
            </motion.button>
            </Link>
        </motion.div>
      </div>
    </section>
  )
}
