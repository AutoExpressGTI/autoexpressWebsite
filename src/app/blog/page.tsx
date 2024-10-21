import React from 'react';

const BlogCards = () => {
  const topics = [
    {
      title: '¿Qué son Foto Multas?',
      content: 'Las foto multas son un sistema de vigilancia compuesto por cámaras y reguladores de velocidad que controla las carreteras en las principales ciudades colombianas. Este sistema también vigila infracciones como parquear en zonas prohibidas, exceso de velocidad, pico y placa, no respetar semáforos, y pasos peatonales.'
    },
    {
      title: '¿Qué son Comparendos de Tránsito?',
      content: 'El comparendo es una orden formal de notificación para que el presunto contraventor se presente ante la autoridad de tránsito por la comisión de una infracción, como conducir sin licencia, estacionar en sitios prohibidos o conducir bajo el influjo del alcohol.'
    },
    {
      title: '¿Qué es el Cobro Coactivo?',
      content: 'El cobro coactivo es la posibilidad de la administración pública para cobrar deudas a su favor, como embargos de cuentas bancarias. La Secretaría de Movilidad tiene un plazo de 3 años desde el hecho para iniciar este proceso.'
    },
    {
      title: '¿Qué es Caducidad y Prescripción?',
      content: 'La caducidad es el vencimiento del plazo de un año para que la Secretaría emita la resolución. La prescripción se refiere a la pérdida del derecho de la autoridad a exigir el pago de una multa después de 3 años sin cobro coactivo.'
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Artículos del Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">{topic.title}</h3>
              <p className="text-gray-600">{topic.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
