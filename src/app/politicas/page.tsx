import React from 'react';

const PoliticaPrivacidad: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto py-24">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad y Tratamiento de Datos</h1>

      <p className="mb-4">
        En cumplimiento de la Ley 1581 de 2012 sobre protección de datos personales (habeas data),
        AUTO EXPRESS GTI pone a disposición su política de tratamiento de datos, accesible desde
        nuestra página principal.
      </p>

      <p className="mb-4">
        Al proporcionar sus datos personales, usted autoriza a AUTO EXPRESS GTI, sus aliados
        comerciales y/o terceros a:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>Realizar el tratamiento y almacenamiento de su información personal.</li>
        <li>
          Enviar ofertas comerciales, productos y/o servicios a través de medios electrónicos como
          WhatsApp.
        </li>
        <li>
          Consultar y reportar información en bases de datos como DATACRÉDITO, TRANSUNIÓN, cajas de
          compensación, administradoras de pensiones, cesantías y entidades del sistema de
          seguridad social.
        </li>
        <li>
          Validar la autenticidad de la información proporcionada en otras bases de datos como
          FENALCO, Aportes en Línea, SOI, Mareigua y SIMPLE.
        </li>
      </ul>

      <p className="mt-4">
        Usted podrá ejercer sus derechos como titular de los datos personales en los términos de la
        Ley 1581 de 2012 y Ley 1266 de 2008, usando los canales dispuestos en nuestras Políticas de
        Protección de Datos Personales.
      </p>

      <p className="mt-4 font-semibold">
        El envío de sus datos o de su documento de identidad constituye aceptación automática de
        esta política.
      </p>
    </div>
  );
};

export default PoliticaPrivacidad;
