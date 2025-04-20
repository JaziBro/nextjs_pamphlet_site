"use client"

import { useState } from "react"
import { Home, Clock, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"

export default function FeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Feature data with icons
  const features = [
    {
      icon: <Home className="h-5 w-5 text-gray-400" />,
      title: "Feature One",
      description: "Comprehensive description of the first feature and its benefits",
      progress: 80,
    },
    {
      icon: <Clock className="h-5 w-5 text-gray-400" />,
      title: "Feature Two",
      description: "Detailed explanation of the second feature and how it works",
      progress: 65,
    },
    {
      icon: <DollarSign className="h-5 w-5 text-gray-400" />,
      title: "Feature Three",
      description: "Information about the third feature and its value proposition",
      progress: 90,
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
          {/* Left side - Features content */}
          <div className="space-y-6">
            {/* Heading and subheading */}
            <div className="space-y-3">
              <div className="h-6 w-48 rounded bg-zinc-800"></div>
              <div className="h-5 w-64 rounded bg-zinc-800"></div>
            </div>

            {/* Feature with progress bars */}
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
                      {feature.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="h-4 w-36 rounded bg-zinc-800"></div>
                      <div className="h-3 w-48 rounded bg-zinc-800"></div>
                    </div>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-gray-500 to-gray-300"
                      style={{ width: `${feature.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation controls */}
            <div className="mt-8 flex items-center space-x-4">
              <button
                onClick={prevSlide}
                className="flex h-10 w-24 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                <span className="text-xs">Prev</span>
              </button>

              <button
                onClick={nextSlide}
                className="flex h-10 w-36 items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
              >
                <span className="text-xs">Next Feature</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Right side - Gradient image */}
          <div className="h-64 w-full overflow-hidden rounded-md bg-gradient-to-b from-white to-gray-400 md:h-80"></div>
        </div>
      </div>
    </section>
  )
}
