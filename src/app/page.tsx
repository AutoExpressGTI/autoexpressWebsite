import ComparendoBanner from "./components/ComparendoBanner";
import Hero from "./components/hero";
import NuestroEnfoque from "./components/nuestro-enfoque";
import PreguntasFrecuentes from "./components/preguntas-frecuentes";
import ProcesoReactivacion from "./components/ProcesoReactivacion";
import Servicios from "./components/Servicios";
import Testimonios from "./components/testimonios";
import WarningBanner from "./components/warning-banner";



export default function Home() {
  return (
  <div className="">
    <Hero/>
    <ComparendoBanner/>
    <Servicios/>
    <ProcesoReactivacion/>
    <WarningBanner/>
    <ComparendoBanner/>
    <NuestroEnfoque/>
    <Testimonios/>
    <PreguntasFrecuentes/>
  </div>
  );
}
