"use client"

import { motion } from "framer-motion"
import { Facebook } from "lucide-react"
import type { Testimonial } from "../data/testimonials"

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.6 + i * 0.1,
          type: "spring",
          stiffness: 200,
        }}
        viewport={{ once: true }}
        className={`text-lg text-yellow ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </motion.span>
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header with avatar and info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            viewport={{ once: true }}
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1,
              }}
              viewport={{ once: true }}
              className="font-semibold text-gray-800"
            >
              {testimonial.name}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1,
              }}
              viewport={{ once: true }}
              className="text-sm text-gray-500"
            >
              {testimonial.timeAgo}
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.1,
          }}
          viewport={{ once: true }}
        >
          <Facebook className="w-6 h-6 text-blue-600" />
        </motion.div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>

      {/* Testimonial text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.8 + index * 0.1,
        }}
        viewport={{ once: true }}
        className="text-gray-700 text-sm leading-relaxed"
      >
        {testimonial.text}
      </motion.p>
    </motion.div>
  )
}
