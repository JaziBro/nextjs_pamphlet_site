"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-300 via-gray-500 to-zinc-900 py-24">
      <div className="container mx-auto px-4">
        {/* 3D Mobile Device */}
        <div className="flex justify-center py-16">
          <div
            className="relative h-[400px] w-[200px] transform rotate-12"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute h-full w-full rounded-[32px] bg-zinc-900 shadow-xl"
              style={{
                transform: "translateZ(0px)",
                boxShadow: "8px 8px 24px rgba(0, 0, 0, 0.4)",
              }}
            ></div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-center">
          <div className="flex w-full max-w-3xl items-center justify-between">
            {/* Left text/button */}
            <div className="h-6 w-40 rounded bg-zinc-700"></div>

            {/* Pagination dots */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-white" : "bg-zinc-600"}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Right text/button with arrow */}
            <div className="flex items-center space-x-2">
              <div className="h-4 w-24 rounded bg-zinc-700"></div>
              <button
                onClick={nextSlide}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
