'use client'

import { motion, AnimatePresence, Variants, } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { FaWhatsapp } from "react-icons/fa6";



const Navbar: React.FC = () =>{
    const [navbarOpen, setNavbarOpen]=useState<boolean>(false)

    const menuVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            delay: i * 0.3,
            duration: 0.8,
          },
        }),
        exit: { opacity: 0, x: 20, transition: { duration: 1 } }
      };

    const desktopLinkVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
        },
    }),
    };

    const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
        },
    }),
    };

const Links: {text: string, href:string}[] = [
    {text: 'Inicio', href: '/'},
    {text: 'Asi funciona', href: '/proceso'},
    {text: 'Preguntas frecuentes', href: '#faq'}
];
return(
    <>
    <header className="w-full bg-[var(--background)] fixed z-50 shadow-2xl">
        <nav className="max-w-[1200px] m-auto h-[80px] flex items-center justify-around">
            {/* Logos */}
            <motion.div
                className="text-white flex items-center justify-center gap-4"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                custom={0}
                >
                <Link href="/">
                    <motion.div variants={fadeUpVariants} custom={0}>
                    <Image alt="Logo AutoExpress" src="/logoAutoExpress.webp" width={50} height={50} />
                    </motion.div>
                </Link>
                <Link href="/">
                    <motion.h2
                    className="logoName text-[--black] font-semibold"
                    variants={fadeUpVariants}
                    custom={1}
                    >
                    Auto<span className="text-[--black] font-semibold">Express.</span>
                    </motion.h2>
                </Link>
            </motion.div>

            {/* links pc */}
            <motion.ul
            className="hidden lg:flex text-[var(--black)]  gap-6"
            initial="hidden"
            animate="visible"
            >
            {Links.map((link, index) => (
                <motion.li
                key={index}
                custom={index}
                variants={desktopLinkVariants}
                >
                <Link
                    className="relative inline-block p-1 text-[var(--black)] before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-0 before:bg-[var(--green)] before:transition-all before:duration-300 hover:before:w-full"
                    href={link.href}
                >
                    {link.text}
                </Link>
                </motion.li>
            ))}
            </motion.ul> 

                <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                custom={2}
                >
                    <Link 
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=573002172285&text=Hola%2C%20quiero%20asesor%C3%ADa%20%F0%9F%98%83">
                        <button  className="hidden lg:flex justify-center items-center gap-3 border border-[var(--green)] hover:border-[#59ac1e7b] p-1 rounded-md bg-[#888787]/30 px-4">
                            Contáctanos <FaWhatsapp />
                        </button>
                    </Link> 
                </motion.div>

        {/* Mobile navbar */}
                <AnimatePresence>
                    {navbarOpen && (
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full h-[100vh] flex flex-col items-center justify-center gap-8 absolute top-0 left-0 bg-[var(--background)] text-[var(--black)] font-bold xl:hidden"
                        >
                        {Links.map((link, id)=>(
                            <motion.li 
                            key={id}
                            custom={id}
                            variants={menuVariants}
                            onClick={ ()=> setNavbarOpen(false)}
                            >
                                <Link href={link.href}>{link.text}</Link>
                            </motion.li>
                        ))}
                        </motion.ul>
                    )}
                </AnimatePresence>



                <motion.div
                onClick={() => setNavbarOpen(!navbarOpen)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`top-0 right-0 m-4 z-10 cursor-pointer flex flex-col items-center space-y-1 ${navbarOpen ? "open" : ""} lg:hidden xl:hidden`}
                >
                <div className={`styleBar transition-transform ${navbarOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                <div className={`styleBar transition-opacity ${navbarOpen ? 'opacity-0' : ''}`}></div>
                <div className={`styleBar transition-transform ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </motion.div>
        </nav>
    </header>
    </>
)
}
export default Navbar