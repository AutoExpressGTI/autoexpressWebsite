export interface Etapa {
  id: number
  numero: string
  titulo: string
  descripcion: string
  color: string
}

export const etapas: Etapa[] = [
  {
    id: 1,
    numero: "1",
    titulo: "Infracción",
    descripcion:
      "Violación de una norma de tránsito, como conducir a exceso de velocidad, no portar licencia o estacionar en lugares prohibidos.",
    color: "bg-[var(--yellow)]",
  },
  {
    id: 2,
    numero: "2",
    titulo: "Comparendo",
    descripcion: "Orden formal de notificación para que el infractor se presente ante la autoridad de tránsito.",
    color: "bg-[var(--green)]",
  },
  {
    id: 3,
    numero: "3",
    titulo: "Multa",
    descripcion: "Sanción económica a pagar por la infracción, cuyo valor se determina por la gravedad de la misma.",
    color: "bg-[var(--red)]",
  },
  {
    id: 4,
    numero: "4",
    titulo: "Descuentos",
    descripcion:
      "En algunos casos, se pueden obtener descuentos por el pago de la multa dentro de un plazo específico.",
    color: "bg-[var(--yellow)]",
  },
]
