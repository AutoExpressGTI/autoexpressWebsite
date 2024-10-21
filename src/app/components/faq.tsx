import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: '¿Cómo puedo eliminar una fotomulta?',
    answer: 'Para eliminar una fotomulta, es necesario iniciar el proceso de impugnación, presentando pruebas que justifiquen la invalidez de la misma.',
  },
  {
    question: '¿Cuánto tiempo toma el proceso de impugnación?',
    answer: 'El proceso de impugnación puede tardar entre 30 y 60 días hábiles dependiendo del caso y la autoridad de tránsito involucrada.',
  },
  {
    question: '¿Qué documentos necesito para impugnar?',
    answer: 'Necesitarás documentos como la notificación de la multa, identificación personal, y cualquier prueba que soporte tu impugnación.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-16 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-indigo-700">Preguntas Frecuentes (FAQ)</h1>
      <div className="w-full max-w-4xl">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer bg-white p-4 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span className="text-2xl text-indigo-700">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="bg-white p-4 mt-2 rounded-lg shadow-sm">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
