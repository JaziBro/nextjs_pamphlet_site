"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Card() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 5

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main content/image area */}
        <div className="mx-auto mb-8 h-64 w-full max-w-4xl overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-80"></div>

        {/* Text and navigation */}
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="h-6 w-64 rounded bg-zinc-800"></div>
          <div className="h-4 w-full rounded bg-zinc-800"></div>

          {/* Navigation button */}
          <div className="flex items-center">
            <Button
              onClick={nextSlide}
              variant="ghost"
              className="flex items-center gap-2 text-white hover:bg-zinc-800"
            >
              <div className="h-4 w-24 rounded bg-zinc-800"></div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
