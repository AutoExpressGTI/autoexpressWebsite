"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Facebook } from "lucide-react"
import { testimonials } from "../data/testimonials" 
import TestimonialCard from "./testimonial-card"
import Link from "next/link"

export default function Testimonios() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Responsive testimonials per page
  const getTestimonialsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // mobile
      if (window.innerWidth < 1024) return 2 // tablet
      return 3 // desktop
    }
    return 3
  }

  const [testimonialsPerPage, setTestimonialsPerPage] = useState(getTestimonialsPerPage())

  // Add useEffect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newPerPage = getTestimonialsPerPage()
      setTestimonialsPerPage(newPerPage)
      // Reset to first page when changing layout
      setCurrentIndex(0)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + testimonialsPerPage,
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, testimonials.length - testimonialsPerPage)
        : Math.max(0, prevIndex - testimonialsPerPage),
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index * testimonialsPerPage)
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage)
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[var(--gray)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8"
          >
            Testimonios
          </motion.h2>

          {/* Stats and CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--green)] mb-2"
              >
                +3.900
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-700 font-semibold"
              >
                Casos ganados
              </motion.div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-3 transition-colors duration-200"
            >
              <motion.div
                initial={{ rotate: -180 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Facebook className="w-5 h-5" />
              </motion.div>
                <Link href="https://www.facebook.com/reel/1016101966584285" target="_blank">
                  <span className="font-medium">Dejar una reseña</span>
                </Link>
            </motion.button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 hidden sm:block"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 hidden sm:block"
            disabled={currentIndex + testimonialsPerPage >= testimonials.length}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </motion.button>

          {/* Mobile Navigation - Below cards */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
              disabled={currentIndex + testimonialsPerPage >= testimonials.length}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${currentIndex}`} testimonial={testimonial} index={index} />
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-2 mt-8"
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <motion.button
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + i * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  Math.floor(currentIndex / testimonialsPerPage) === i ? "bg-gray-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

