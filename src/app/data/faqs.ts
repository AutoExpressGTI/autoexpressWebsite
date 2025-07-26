export interface FAQ {
  id: number
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "¿En cuánto tiempo prescribe una infracción de tránsito?",
    answer:
      "Las infracciones de tránsito prescriben en un término de 3 años contados a partir de la fecha en que se cometió la infracción, siempre y cuando no se haya iniciado el proceso sancionatorio. Si ya se inició el proceso, el término de prescripción puede variar según el estado del procedimiento.",
  },
  {
    id: 2,
    question: "¿Cuánto tiempo tiene la Secretaría para notificar una fotomulta?",
    answer:
      "La Secretaría de Movilidad tiene un plazo máximo de 6 meses para notificar una fotomulta desde la fecha en que se cometió la infracción. Si no se notifica dentro de este término, la multa puede considerarse caduca y perder su validez legal.",
  },
  {
    id: 3,
    question: "¿Cuándo aplica la caducidad en una infracción?",
    answer:
      "La caducidad aplica cuando la autoridad de tránsito no cumple con los términos legales establecidos para adelantar el proceso sancionatorio. Esto puede ocurrir por falta de notificación oportuna, demoras injustificadas en el proceso, o incumplimiento de los plazos establecidos por la ley.",
  },
  {
    id: 4,
    question: "¿Es posible reactivar una licencia de conducción?",
    answer:
      "Sí, es posible reactivar una licencia de conducción suspendida o cancelada, dependiendo del motivo de la suspensión. El proceso puede incluir el pago de multas pendientes, la realización de cursos de sensibilización, exámenes médicos y de conducción, según corresponda al caso específico.",
  },
]
