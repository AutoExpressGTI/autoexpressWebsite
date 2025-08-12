"use client"

import { motion } from "framer-motion"
import { ChevronUp, Instagram, Facebook, Mail } from "lucide-react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa6"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="w-full bg-[var(--gray)] pt-12 pb-6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
              <Image
                src="/logoAutoExpress.webp"
                alt="Auto Express GTI Logo"
                fill
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
              />
            </div>
          </motion.div>

          {/* Back to Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 mx-auto group"
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-[var(--green)] rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-200"
              >
                <ChevronUp className="w-6 h-6 text-white " />
              </motion.div>
              <span className="text-gray-700 font-medium">Volver al inicio</span>
            </motion.button>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-700 mb-4 text-lg">Escríbenos para más información</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--green)] hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-3 mx-auto md:mx-0 md:ml-auto transition-colors duration-200 mb-4"
            >
              <FaWhatsapp className="w-5 h-5 " />
              <a className="font-medium" href="https://api.whatsapp.com/send?phone=573002172285&text=Hola%2C%20quiero%20asesor%C3%ADa%20%F0%9F%98%83" target="_blank">Escríbenos por WhatsApp</a>
            </motion.button>

            {/* Social Media Icons */}
            <div className="flex gap-3 justify-center md:justify-end">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-br rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/profile.php?id=100083251786387&locale=es_LA"
                target="_blank"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:autoexpressgti@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mb-6 origin-left"
        />

        {/* Bottom Legal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600"
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center md:text-left">
            <motion.a
              href="/politicas"
              whileHover={{ color: "#374151" }}
              className="hover:underline transition-colors duration-200"
            >
              Tratamiento de Datos
            </motion.a>
            <span className="hidden sm:inline">|</span>
            <motion.a
              href="/terminos"
              whileHover={{ color: "#374151" }}
              className="hover:underline transition-colors duration-200"
            >
              Términos y Condiciones
            </motion.a>
            <span className="hidden sm:inline">|</span>
            <p className=" sm:inline">Desarrollador por</p>
            <motion.a
              href="https://www.r10sagency.com/"
              target="_blank" 
              className="hover:underline transition-colors duration-200"
            > <strong>r10sagency.com</strong>
            </motion.a>
          </div>

          <div className="text-center md:text-right">
            <p>© 2024 AUTOEXPRESS GTI. Todos los derechos reservados.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
