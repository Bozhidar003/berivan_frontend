"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Изящност и блясък със злато",
    subtitle: "Колекции от златни бижута — от класически до модерни модели. Готови за вас, с доверие и качество.",
    image: "/luxury-gold-jewelry-on-marble.jpg",
  },
  {
    title: "Нови продукти всеки ден",
    subtitle: "Открийте нашите последни колекции — класически, модерни и ексклузивни модели. Готови за вас, с доверие и качество.",
    image: "/elegant-engagement-ring-bridal.jpg",
  },
  {
    title: "Ексклузивни колекции",
    subtitle: "Модели, които никога не са се появявали на пазара. Единствени в света. Готови за вас, с доверие и качество.",
    image: "/luxury-engagement-rings-collection.jpg",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="font-serif text-5xl md:text-4xl lg:text-6xl text-white mb-4 text-balance">{slide.title}</h2>
            <p className="text-sm md:text-base lg:text-xl text-white/90 mb-8 max-w-2xl text-balance">{slide.subtitle}</p>
            <Button className="bg-transparent border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A] px-8 py-6 text-base transition-luxury">
              Пазарувай сега
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-luxury"
      >
        <ChevronLeft className="lg:w-12 lg:h-12 w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-luxury"
      >
        <ChevronRight className="lg:w-12 lg:h-12 w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-luxury ${
              index === currentSlide ? "bg-[#D4AF37] w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
