'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SimpleSlider from './simple-slider';
import Semaforo from "../../../public/semaforo.webp";
import camara from "../../../public/camara.webp";
import multa from "../../../public/multa.webp";
import alcohol from "../../../public/alcohol.webp";
import id from "../../../public/idConduciendo.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AnimatedArticle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.article>
  );
};

const Servicios = () => {
  return (
    <section className="w-full py-16 bg-[var(--background)]">
      <div className="max-w-[1200px] m-auto gap-2 flex flex-col justify-center items-center lg:flex-row">
        
        <AnimatedArticle className="hidden w-full px-4 lg:w-1/3 gap-4 md:flex xl:flex-col justify-center items-center">
          <div className="flex flex-col max-w-[300px] justify-center items-center gap-2 p-2">
            <Image src={camara} alt="Camara foto multa" width={100} height={100} />
            <h3 className="font-bold">Fotomultas</h3>
            <p className="text-center">Impugnación con ahorro y estrategia legal personalizada.</p>
          </div>

          <div className="flex flex-col max-w-[300px] justify-center items-center gap-2 p-2">
            <Image src={multa} alt="Comparendo" width={100} height={100} />
            <h3 className="font-bold">Comparendos</h3>
            <p>Alternativas legales, guía paso a paso.</p>
          </div>
        </AnimatedArticle>

        <SimpleSlider />

        <AnimatedArticle className="hidden lg:w-1/3 lg:flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <Image src={Semaforo} alt="Semaforo" width={300} height={400} className="rounded-lg" />
          </div>
        </AnimatedArticle>

        <AnimatedArticle className="hidden w-full px-4 lg:w-1/3 gap-4 md:flex xl:flex-col justify-center items-center">
          <div className="max-w-[300px] flex flex-col justify-center items-center gap-2 p-2">
            <Image src={alcohol} alt="Alcoholemia" width={100} height={100} />
            <h3 className="font-bold">Alcoholemia</h3>
            <p className="text-center">Defensa integral para mitigar sanciones.</p>
          </div>

          <div className="max-w-[300px] flex flex-col justify-center items-center gap-2 p-2">
            <Image src={id} alt="Reactivación de Licencia" width={100} height={100} />
            <h3 className="font-bold">Reactivación de Licencia</h3>
            <p className="text-center">Asesoría completa. Tiempo estimado: 3 a 4 meses.</p>
          </div>
        </AnimatedArticle>
      </div>
    </section>
  );
};

export default Servicios;
