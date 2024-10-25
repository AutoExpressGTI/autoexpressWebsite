import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 space-y-8 lg:space-y-0">
        {/* Sección de Información de Contacto */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
          <p className="mb-2">Dirección: Calle 123, Ciudad</p>
          <p className="mb-2">Teléfono: +57 300 217 2285</p>
          <p>Correo electrónico: contacto@autoexpressgti.com</p>
        </div>

        {/* Sección de Enlaces Rápidos */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-400">Inicio</Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-gray-400">Servicios</Link>
            </li>
            <li>
              <Link href="/testimonios" className="hover:text-gray-400">Testimonios</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-400">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-semibold mb-4">Conéctate con nosotros</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Sección de Política de Privacidad */}
      <div className="mt-8 text-center">
        <Link href="/privacidad" className="text-sm text-gray-400 hover:text-gray-200">
          Política de Privacidad
        </Link>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-gray-500">
        © 2024 AUTO EXPRESS GTI. Todos los derechos reservados.
      </div>
    </footer>
  );
};
