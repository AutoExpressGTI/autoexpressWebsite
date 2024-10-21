import React from 'react';

const VisionMision = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen py-10 text-white">
      <div className="max-w-6xl mx-auto p-8">
        {/* Sección de Títulos Generales */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Visión y Misión</h1>
          <p className="text-lg text-gray-200">Explora nuestros valores y compromisos con nuestros clientes</p>
        </div>

        {/* Contenedor de las dos secciones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Visión y Misión de Insolvencias */}
          <section className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Insolvencias</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Visión</h3>
              <p className="text-gray-700">
                Ser líderes en la resolución de insolvencias, brindando soluciones innovadoras y personalizadas que ayuden a las personas y
                empresas a superar dificultades financieras y alcanzar estabilidad económica.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Misión</h3>
              <p className="text-gray-700">
                Nuestra misión es ofrecer servicios expertos y compasivos de asesoramiento y gestión de insolvencias, ayudando a nuestros
                clientes a reestructurar sus deudas de manera sostenible, proteger sus activos y patrimonio, y recuperar su estabilidad
                financiera.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Valores</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Confidencialidad y discreción</li>
                <li>Expertise y experiencia</li>
                <li>Empatía y comprensión</li>
                <li>Innovación y flexibilidad</li>
                <li>Compromiso con la satisfacción del cliente</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Objetivos Estratégicos</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Ampliar nuestra presencia en el mercado nacional</li>
                <li>Desarrollar alianzas estratégicas con instituciones financieras y legales</li>
                <li>Implementar tecnologías innovadoras para mejorar nuestra eficiencia y efectividad</li>
              </ul>
            </div>
          </section>

          {/* Visión y Misión de Fotomultas */}
          <section className="bg-white text-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Fotomultas</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Visión</h3>
              <p className="text-gray-700">
                Ser la empresa líder en soluciones legales, protegiendo los derechos de nuestros clientes y proporcionando una experiencia
                eficiente y transparente en la resolución de fotomultas y comparendos.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Misión</h3>
              <p className="text-gray-700">
                Nuestra misión es proporcionar asesoramiento y representación legal especializada en tránsito, mediante un equipo de expertos
                que aplican leyes y decretos vigentes, garantizando la satisfacción y tranquilidad de nuestros clientes.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VisionMision;
