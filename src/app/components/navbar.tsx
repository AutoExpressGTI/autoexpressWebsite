import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[200px] flex flex-col justify-center items-center'>
        <h1>Navbar (Barra de Navegación)</h1>
        <p>Una barra de navegación en la parte superior del sitio, adaptada a dispositivos móviles, tablets y computadoras.</p>
        <p><span>Enlaces a las secciones principales:</span> Inicio, Servicios, Testimonios, <Link href='/blog' > Blog</Link> Contacto y FAQ.</p>
    </div>
  )
}

export default Navbar