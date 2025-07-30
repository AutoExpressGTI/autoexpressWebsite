import React from 'react'
import HeroProceso from './components/hero-proceso'
import EtapasInfraccion from './components/etapas-infraccion'
import ProcesoComparendo from './components/proceso-comparendo'
import PrescripcionComparendo from './components/prescripcion-comparendo'
import PreguntasFrecuentes from '../components/preguntas-frecuentes'

const page = () => {
  return (
    <>
    <HeroProceso/>
    <EtapasInfraccion/>
    <ProcesoComparendo/>
    <PrescripcionComparendo/>
    <PreguntasFrecuentes/>
    </>
  )
}

export default page