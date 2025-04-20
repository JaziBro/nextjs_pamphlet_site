"use client"

import { useState } from "react"
import { Maximize2, Share2, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Product features data
  const features = [
    {
      id: 1,
      title: "Feature One",
      description: "Detailed description of the first feature and its benefits.",
      icon: <Maximize2 className="h-5 w-5 text-gray-400" />,
    },
    {
      id: 2,
      title: "Feature Two",
      description: "Comprehensive explanation of the second feature and how it works.",
      icon: <Share2 className="h-5 w-5 text-gray-400" />,
    },
    {
      id: 3,
      title: "Feature Three",
      description: "Information about the third feature and its value proposition.",
      icon: <MessageSquare className="h-5 w-5 text-gray-400" />,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  return (
    <section className="w-full bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Left side - Gradient image */}
          <div className="h-80 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-500 md:h-96"></div>

          {/* Right side - Product features */}
          <div className="space-y-8">
            {/* Heading and subheading */}
            <div className="space-y-3">
              <div className="h-6 w-64 rounded bg-zinc-800"></div>
              <div className="h-5 w-full rounded bg-zinc-800"></div>
            </div>

            {/* Feature box with light background */}
            <div className="rounded-lg bg-zinc-800/50 p-6">
              {/* Feature items */}
              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.id} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
                        {feature.icon}
                      </div>
                      <div className="h-4 w-48 rounded bg-zinc-700"></div>
                    </div>
                    <div className="ml-11">
                      <div className="h-3 w-full rounded bg-zinc-700"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation controls */}
            <div className="flex justify-end">
              <div className="flex items-center space-x-2">
                <Button
                  onClick={prevSlide}
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  onClick={nextSlide}
                  size="icon"
                  variant="outline"
                  className="h-8 w-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
