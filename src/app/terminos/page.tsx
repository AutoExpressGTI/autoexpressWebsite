import React from 'react';

const TerminosCondiciones: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto py-24">
      <h1 className="text-3xl font-bold mb-4">Términos y Condiciones</h1>
      <p className="mb-4">
        Al acceder y utilizar este sitio web, propiedad de AUTO EXPRESS GTI, el usuario acepta
        cumplir con los siguientes términos y condiciones. Si no está de acuerdo con ellos,
        absténgase de utilizar este sitio.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Este sitio está destinado únicamente para fines informativos y promocionales.</li>
        <li>
          AUTO EXPRESS GTI no solicita claves personales, códigos temporales ni acceso a
          plataformas transaccionales.
        </li>
        <li>
          En ningún momento se solicitará la descarga de archivos ni se compartirán enlaces o rutas
          sospechosas.
        </li>
        <li>
          Recomendamos verificar la identidad del asesor que lo contacte llamando a nuestra línea
          oficial (+57) 300 217 2285 o a través de WhatsApp.
        </li>
        <li>
          AUTO EXPRESS GTI se reserva el derecho de modificar estos términos en cualquier momento
          sin previo aviso.
        </li>
      </ul>
    </div>
  );
};

export default TerminosCondiciones;

