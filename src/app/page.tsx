import ComparendoBanner from "./components/ComparendoBanner";
import Hero from "./components/hero";
import ProcesoReactivacion from "./components/ProcesoReactivacion";
import Servicios from "./components/Servicios";



export default function Home() {
  return (
  <div className="">
    <Hero/>
    <ComparendoBanner/>
    <Servicios/>
    <ProcesoReactivacion/>
  </div>
  );
}
