'use client'

import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ComparendoBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section className='w-full py-16 bg-[var(--gray)]' ref={ref}>
      <div className='max-w-[1200px] m-auto flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-20 text-black font-bold'>

        <motion.article
          className='flex justify-center items-center'
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className='max-w-[300px] text-center text-xl md:text-2xl'>
            ¿Te llegó un <span className='text-[var(--green)]'>comparendo</span> y no sabes por dónde empezar?
          </h2>
        </motion.article>

        <motion.article
          className='flex justify-center items-center text-white font-bold bg-[var(--yellow)] p-2 rounded-md'
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
        <Link href="/proceso">
           <button className='flex items-center justify-center gap-2 md:text-2xl'>
            Conoce el proceso legal
            <IoMdArrowRoundForward />
          </button>
        </Link>
        </motion.article>

      </div>
    </section>
  );
};

export default ComparendoBanner;
