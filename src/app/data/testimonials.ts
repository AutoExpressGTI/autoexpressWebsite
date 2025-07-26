export interface Testimonial {
  id: number
  name: string
  timeAgo: string
  avatar: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Martha Medina",
    timeAgo: "46 semanas",
    avatar: "/testimonios/testimonio1.jpg",
    rating: 5,
    text: "Los mejores, que excelente servicio, que diligentes, proceden de manera profesional los recomiendo a ojo cerrado, son honestos, claros y puedes hacer tu trámite con ellos no dudes en adquirir el servicio",
  },
  {
    id: 2,
    name: "Thor Rivera",
    timeAgo: "12 semanas",
    avatar: "/testimonios/testimonio2.jpg",
    rating: 5,
    text: "Exelente agradecido con el trabajo muy correctos y diligentes recomendables",
  },
  {
    id: 3,
    name: "Manuel Ignacio Cruz Cardozo",
    timeAgo: "21 semanas",
    avatar: "/testimonios/testimonio3.jpg",
    rating: 5,
    text: "Excelente, me eliminaron 9 fotomultas en diez días hábiles y se pagó por resultados positivos buena experiencia y recomendados al 💯",
  },
  {
    id: 4,
    name: "Jose Adelmo",
    timeAgo: "46 semanas",
    avatar: "/testimonios/testimonio4.jpg",
    rating: 5,
    text: "Exelente compañia me eliminaron 2 multas por eso los recomiendo por ser honestos confiables y paga uno cuando los eliminan exelente servicio.grasias",
  },
  {
    id: 5,
    name: "Edgar Forero",
    timeAgo: "1 año",
    avatar: "/testimonios/testimonio5.jpg",
    rating: 5,
    text: "Lo recomiendo, es honesto me han bajado 3 multas",
  },
  {
    id: 6,
    name: "Andres Medina",
    timeAgo: "1 año",
    avatar: "/testimonios/testimonio6.jpg",
    rating: 5,
    text: "Super recomendado, me eliminaron 6 multas que sumaban más de $8.000.000, muchísimas gracias por la gestión realizada",
  },{
    id: 7,
    name: "Morales Héctor",
    timeAgo: "47 semanas",
    avatar: "/testimonios/testimonio7.jpg",
    rating: 5,
    text: "Muy muy recomendable la verdad mi proceso se demoró un par de meses pero me salió favorable y pague hasta ver el resultado no pague nada antes de ver los resultados lo recomiendo",
  },
  {
    id: 7,
    name: "Leo Cardona",
    timeAgo: "1 año",
    avatar: "/testimonios/testimonio8.jpg",
    rating: 5,
    text: "Consulté con ellos y me dieron una respuesta muy acertada, me pareció muy correcto su actuar y proceder, diferente a otras empresas que dicen dedicarse a estos trámites.",
  },
]
