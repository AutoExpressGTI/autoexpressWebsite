'use client'
import React from 'react'
import Faq from '../components/faq'
import Servicios from '../components/servicios'
import Testimonios from '../components/testimonios'
import VisionMision from '../components/visionMision'

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">

      {/* Hero Section */}
      <div className="h-[100vh] w-full flex flex-col justify-center items-center bg-gradient-to-t from-[#93291E] to-[#000] text-white text-center p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Elimina tus Fotomultas hasta un <span className="text-green-600">90%</span></h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Nuestro equipo de expertos legales está listo para ayudarte a reducir o eliminar tus fotomultas. ¡Ahorra tiempo y dinero con una asesoría profesional y eficiente!
        </p>
        <a href="#servicios" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 hover:text-black transition duration-300">
          ¡Inicia tu Proceso Ahora!
        </a>
      </div>

      {/* Servicios Section */}
      <div id="servicios" className="w-full py-12 bg-white">
        <Servicios />
        <VisionMision/> 
      </div>

      {/* Testimonios Section */}
      <div className="w-full py-12 bg-gray-100">
        <Testimonios />
      </div>

      {/* FAQ Section */}
      <div className="w-full py-12 bg-white">
        <Faq />
      </div>

    </header>
  )
}

export default Hero
