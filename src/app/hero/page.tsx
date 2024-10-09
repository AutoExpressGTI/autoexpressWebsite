import React from 'react'
import Faq from '../components/faq'
import Servicios from '../components/servicios'
import Testimonios from '../components/testimonios'

const Hero = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center border'>

        <div className="h-[100vh] w-full flex flex-col justify-center items-center border">
        <h1>Página de Inicio (Home)</h1>
        <p><span>Diseño atractivo y moderno:</span> Incluirá un mensaje claro y destacado sobre la posibilidad de eliminar fotomultas, resaltando el ahorro de hasta un 90%. Contará con llamadas a la acción visibles para que los usuarios puedan iniciar rápidamente el proceso.</p>
        <p><span>Imágenes de apoyo: </span> Se utilizarán fotos y gráficos de alta calidad para reforzar el mensaje de éxito y tranquilidad que los clientes pueden alcanzar al eliminar sus multas.</p>
        </div>

        <Servicios/>
        <Testimonios/>
        <Faq/>

    </div>
  )
}

export default Hero