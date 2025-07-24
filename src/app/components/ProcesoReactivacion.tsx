'use client'

import Link from 'next/link'
import React, { useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect } from 'react'

const procesoAnim = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut'
    }
  })
}

const ProcesoPaso = ({ children, index }: { children: React.ReactNode, index: number }) => {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.article
      ref={ref}
      variants={procesoAnim}
      initial="hidden"
      animate={controls}
      custom={index}
      className='w-full'
    >
      {children}
    </motion.article>
  )
}

const ProcesoReactivacion = () => {
  return (
    <section className='w-full bg-[var(--background)] py-10'>
      <div className="max-w-[1200px] m-auto flex flex-col gap-8 ">
        <article className='flex flex-col justify-center items-center gap-8 p-4'>
          <h1 className='font-bold text-center text-2xl'>Nosotros te ayudamos:</h1>
          <p className='text-center max-w-[700px]'>Recupera tu licencia sin estrés. Evaluamos tu caso con base en el expediente de la Secretaría de Tránsito y, si es viable, te acompañamos durante todo el proceso (3 a 4 meses).</p>
          <p className='font-bold text-center max-w-[700px]'>✅ En cada gestión te entregamos el radicado oficial, a diferencia de otras entidades.</p>
          <p className='font-bold text-center max-w-[700px]'>ℹ️ Un trámite puede tardarse mínimo 15 días hábiles hasta 45 días hábiles según la cantidad de instancias.</p>
        </article>

        <article className='w-full flex justify-center items-center'>
          <div className="relative hidden md:flex w-1/2 flex-col gap-8 justify-center items-center">
            <div className="absolute flex justify-center items-center w-[400px] h-[400px] bg-[url('/logoAutoExpress.webp')] bg-center bg-no-repeat bg-cover opacity-10"></div>

            <h2 className='text-4xl font-bold z-10'>¿Cómo funciona el proceso?</h2>
            <Link href="https://api.whatsapp.com/send?phone=573002172285&text=Hola%2C%20quiero%20asesor%C3%ADa%20%F0%9F%98%83" target="_blank" className='z-10'>
              <button className="hidden items-center justify-center md:flex gap-2 max-w-[400px] bg-[var(--green)] p-4 mx-1 rounded-lg text-white lg:text-1xl xl:text-2xl">
                <FaWhatsapp />
                Escríbenos por WhatsApp
              </button>
            </Link>
          </div>

          <div className="proceso-container flex flex-col p-4 justify-center items-center max-w-[500px]">

            {[ // pasos del proceso
              "Revisamos tu caso <br /> (viabilidad)",
              "Diagnóstico legal y <br /> opciones",
              "Si el resultado es a favor <br /> → pagas honorarios",
              "Si es negativo <br /> → solo asumes el trámite",
              "Si no se puede trabajar, <br /> también te lo decimos"
            ].map((texto, i) => (
              <ProcesoPaso key={i} index={i}>
                <div className="flex justify-start gap-5 items-center">
                  <div className="w-16 h-16 bg-[var(--green)] rounded-full flex justify-center items-center text-white text-2xl">{i + 1}</div>
                  <div className="proceso bg-[var(--gray)] rounded-md p-2" dangerouslySetInnerHTML={{ __html: texto }}></div>
                </div>
                <div className={`w-1 ${i === 4 ? "h-14" : "h-10"} bg-[var(--green)] ml-8`}></div>
              </ProcesoPaso>
            ))}

          </div>
        </article>
      </div>
    </section>
  )
}

export default ProcesoReactivacion
