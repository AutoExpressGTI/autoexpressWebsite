'use client'

import { FaWhatsapp } from "react-icons/fa6";
import WhatsAppTooltip from "./whatsapp-tooltip";
import Link from "next/link";
import LogoAutoExpress from "../../../public/logoAutoExpress.webp"
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Hero = () => {
  return (
    <main className="relative w-full bg-[var(--background)]">

      {/* Imagen de fondo */}
      <article className="w-full lg:w-2/3 h-screen bg-[url('/fondoHero.webp')] bg-cover bg-center bg-no-repeat absolute inset-0"></article>

      <section className="relative flex py-48 lg:py-10 max-w-[1200px] m-auto">

        {/* Logo */}
        <motion.article
          className="hidden lg:w-1/2 w-full h-screen lg:flex items-center z-10 justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Image src={LogoAutoExpress} alt="Logo autoexpress" />
        </motion.article>

        {/* Título y contenido */}
        <motion.article
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-4 md:gap-8 z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="flex flex-col gap-5" variants={fadeInUp}>
            <motion.span
              className="bg-[var(--red)] py-1 p-1 px-2 text-white font-semibold rounded-lg text-3xl lg:text-4xl xl:text-5xl lg:text-start"
              variants={fadeInUp}
            >
              Soluciones legales
            </motion.span>
            <motion.span
              className="bg-[var(--yellow)] p-1 text-white font-semibold rounded-lg text-3xl lg:text-4xl xl:text-5xl text-center lg:text-start"
              variants={fadeInUp}
            >
              en tránsito:
            </motion.span>
            <motion.span
              className="p-1 text-black font-semibold rounded-lg text-2xl lg:text-3xl xl:text-4xl text-center lg:text-start"
              variants={fadeInUp}
            >
              Sin filas, sin estrés.
            </motion.span>
          </motion.h1>

          <motion.p
            className="heroP max-w-[400px] text-black/10 italic text-lg lg:text-2xl xl:text-3xl text-center lg:text-start px-4 lg:px-0"
            variants={fadeInUp}
          >
            Multas, comparendos, alcoholemia, insolvencias y más.
          </motion.p>

          <Link href="https://api.whatsapp.com/send?phone=573002172285&text=Hola%2C%20quiero%20asesor%C3%ADa%20%F0%9F%98%83" target="_blank">
            <motion.button
              className="hidden items-center justify-center lg:flex gap-2 max-w-[400px] bg-[var(--green)] p-4 mx-1 rounded-lg text-white lg:text-1xl xl:text-2xl"
              variants={fadeInUp}
            >
              <FaWhatsapp />
              Escríbenos por WhatsApp
            </motion.button>
          </Link>
        </motion.article>

        {/* Tooltip WhatsApp Mobile */}
        <div className="absolute bottom-6 right-6 lg:hidden">
          <WhatsAppTooltip />
        </div>

      </section>

    </main>
  );
};

export default Hero;

