'use client'
import React, { useState } from 'react';

const PoliticaPrivacidad = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [consentError, setConsentError] = useState('');

  const handleSubmit = () => {
    if (!consentGiven) {
      setConsentError('Debe aceptar para continuar con el proceso.');
      return;
    }
    // Aquí puedes agregar la lógica para continuar con el proceso (enviar datos, redireccionar, etc.)
    alert('Gracias por su aceptación. Puede continuar con el proceso.');
  };

  return (
    <article className="bg-gray-100 pb-10">
        <div className="p-6 rounded-lg shadow-md max-w-3xl mx-auto pt-20">
        <h1 className="text-2xl font-bold text-center mb-6 mt-10">Política de Tratamiento de Datos Personales</h1>
        <p className="mb-4">
            En cumplimiento de la Ley 1581 de 2012 habeas data, <strong>AUTO EXPRESS GTI</strong> con NIT 901376850-6, tiene a su disposición la
            política de tratamiento de datos personales, la cual puede ser consultada en la página principal de la empresa{' '}
            <strong>EXPRESS SOLUCIONES INTEGRALES</strong> acerca del sitio{' '}
            <a href="http://www.autoexpressgti.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            www.autoexpressgti.com
            </a>{' '}
            - Políticas de Protección de Datos Personales.
        </p>

        <p className="mb-4">
            Pensando en su seguridad, recuerde que <strong>AUTO EXPRESS GTI</strong> en ningún momento solicitará por ningún medio información
            sobre claves de acceso a los canales transaccionales, claves temporales y/o productos. El Asesor que lo está contactando en ningún
            momento realizará transferencia de archivos ni le remitirá rutas de acceso a través de este medio.
        </p>

        <p className="mb-4">
            Con el propósito de darle mayor tranquilidad sobre este proceso para la prestación de nuestros servicios jurídicos, lo invitamos a
            comunicarse en horario laboral con la línea de AUTO EXPRESS GTI (+57)3002172285 o WHATSAPP, para verificar la identidad del Asesor que
            lo está contactando.
        </p>

        <p className="mb-4">
            Con el fin de realizar ofertas comerciales a través de WhatsApp, se solicita su consentimiento expreso. Para tal fin: Yo, Juan Carlos
            Manrique Montes identificado con cédula 1.035.830.165 de Sonson, con el presente mensaje a través de WhatsApp autorizo a AUTO EXPRESS
            GTI, aliados y/o terceros, para realizar el tratamiento de mis datos personales, envío de ofertas comerciales, productos y/o
            servicios, consulta y reporte mi información en las bases de datos u Operadores de Información y Riesgo, incluyendo TRANSUNIÓN y
            DATACRÉDITO, así como para que valide la información existente en bases de datos de cajas de compensación, Administradoras de Fondos
            de Pensiones y de Cesantías y entidades que forman parte del Sistema de Seguridad Social (tales como Aportes en Línea, SOI, Mareigua y
            SIMPLE). Y FENALCO, Como titular de sus datos personales, podrá ejercer los derechos que le correspondan en los términos previstos en
            la Ley 1581 del año 2012 y 1266 de 2008 y mediante los canales previstos en las Políticas de Protección de Datos Personales.
        </p>

        <p className="mb-4">
            Para continuar con el análisis de la solicitud que adelanto con esta entidad el 08/10/2024, escriba la palabra{' '}
            <strong>Acepto</strong> para seguir con el proceso y autorizar el tratamiento de datos personales expresado en este contrato.
        </p>

        <div className="flex items-center mb-6">
            <input
            type="checkbox"
            id="consent"
            checked={consentGiven}
            onChange={() => setConsentGiven(!consentGiven)}
            className="mr-2"
            />
            <label htmlFor="consent" className="text-gray-700">
            Acepto los términos y autorizo el tratamiento de mis datos personales
            </label>
        </div>

        {consentError && <p className="text-red-500 mb-4">{consentError}</p>}

        <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
            Continuar con el Proceso
        </button>
        </div>
    </article>
  );
};

export default PoliticaPrivacidad;
