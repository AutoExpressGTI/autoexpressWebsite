'use client'

import { motion, AnimatePresence, Variants, } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"


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

const Links: {text: string, href:string}[] = [
    {text: 'Inicio', href: '/'},
    {text: 'Blog', href: 'blog'},
    {text: 'Contacto', href: '/Contacto'}
];
return(
    <>
    <div className="w-full h-[80px] flex items-center justify-around  bg-black">
        <div className="text-white">
            <h2>Auto <span className="text-red-600">Express.</span></h2>
        </div>
        
        <AnimatePresence>
            {navbarOpen && (
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full h-[100vh] flex flex-col items-center justify-around gap-6 absolute top-0 left-0 bg-black text-white xl:hidden"
                >
                {Links.map((link, id)=>(
                    <motion.li 
                    key={id}
                    custom={id}
                    variants={menuVariants}
                    >
                        <Link href={link.href}>{link.text}</Link>
                    </motion.li>
                ))}
                </motion.ul>
            )}
        </AnimatePresence>

        <ul className="hidden sm:flex text-white gap-6">
            {Links.map((link, index)=>(
                <li key={index}>
                    <Link href={link.href}>{link.text}</Link>
                </li>
            ))}
        </ul>

        <div 
            onClick={()=> setNavbarOpen(!navbarOpen)}
            className={`absolute top-0 right-0 m-8 z-10 cursor-pointer flex flex-col items-center space-y-1 ${navbarOpen ? "open":""} xl:hidden`}
        >
            <div className={`styleBar transition-transform ${navbarOpen ? "rotate-45 translate-y-2 ":""}`}></div>
            <div className={`styleBar transition-opacity ${navbarOpen ? 'opacity-0' : ''}`}></div>
            <div className={`styleBar transition-transform ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
    </div>
    </>
)
}
export default Navbar