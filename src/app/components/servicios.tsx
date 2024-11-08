import React from 'react'

const Servicios = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-red-500 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Servicio Fotomultas */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Fotomultas</h3>
            <p className="text-lg">
              Asesoría y asistencia en la impugnación de fotomultas, ayudando a los conductores a reducir o eliminar estas sanciones, 
              con un enfoque en lograr un ahorro significativo. A través de un análisis detallado y estrategias personalizadas, 
              buscamos proteger tus derechos.
            </p>
          </div>

          {/* Servicio Comparendos */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Comparendos</h3>
            <p className="text-lg">
              Orientación y soluciones para impugnar comparendos de tránsito, facilitando el proceso y ofreciendo alternativas legales 
              para resolver estas situaciones. Nuestro equipo te guiará paso a paso para garantizar los mejores resultados posibles.
            </p>
          </div>

          {/* Servicio Acuerdos de Pagos */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Acuerdos de Pagos</h3>
            <p className="text-lg">
              Opciones de acuerdos de pagos flexibles para aquellos que enfrentan sanciones elevadas, proporcionando tranquilidad 
              financiera y accesibilidad para el cliente. Buscamos soluciones personalizadas y adaptadas a tu situación.
            </p>
          </div>

          {/* Servicio Casos de Alcoholemia */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Casos de Alcoholemia</h3>
            <p className="text-lg">
              Defensa legal en casos de alcoholemia, con asesoría integral y personalizada para cada situación. Buscamos mitigar los 
              efectos legales y económicos de este tipo de infracciones a través de una defensa sólida y estrategia adecuada.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios
