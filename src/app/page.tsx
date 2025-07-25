import ComparendoBanner from "./components/ComparendoBanner";
import Hero from "./components/hero";
import ProcesoReactivacion from "./components/ProcesoReactivacion";
import Servicios from "./components/Servicios";
import WarningBanner from "./components/warning-banner";



export default function Home() {
  return (
  <div className="">
    <Hero/>
    <ComparendoBanner/>
    <Servicios/>
    <ProcesoReactivacion/>
    <WarningBanner/>
  </div>
  );
}
